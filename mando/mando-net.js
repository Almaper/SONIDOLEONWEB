// Mando por internet (red móvil) · Lumentia Presenter · Sonido León
//
// La app y el móvil se encuentran en un servidor MQTT (por defecto el público de EMQX, o uno
// propio). Lo que viaja va cifrado de extremo a extremo (AES-256-GCM) con una clave que solo
// está en el enlace del QR, detrás de «#»: el navegador nunca la manda a ningún servidor.
// La «sala» (temas MQTT) sale de un resumen de la clave, así que no la revela.
//
// Este mismo archivo se usa en la app y en sonidoleon.com/mando/.
'use strict';
(function () {
  const enc = new TextEncoder(), dec = new TextDecoder();
  const b64u = {
    enc: b => btoa(String.fromCharCode(...new Uint8Array(b))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''),
    dec: s => { s = s.replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '='; return Uint8Array.from(atob(s), c => c.charCodeAt(0)); },
  };
  const b64 = {
    enc: u8 => { let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); },
    dec: s => Uint8Array.from(atob(s), c => c.charCodeAt(0)),
  };

  const DEFAULT_BROKER = 'wss://broker.emqx.io:8084/mqtt';
  const PAGE = 'https://sonidoleon.com/mando/';

  // Clave nueva: 32 bytes al azar (43 caracteres).
  function newKey() { return b64u.enc(crypto.getRandomValues(new Uint8Array(32))); }
  function validKey(k) { try { return typeof k === 'string' && b64u.dec(k).length === 32; } catch (e) { return false; } }

  // Sala y clave de cifrado a partir de la clave del enlace.
  async function open(key) {
    const raw = b64u.dec(key);
    if (raw.length !== 32) throw new Error('clave no válida');
    const h = new Uint8Array(await crypto.subtle.digest('SHA-256', enc.encode('lumentia-mando|' + key)));
    const room = Array.from(h.subarray(0, 12), x => x.toString(16).padStart(2, '0')).join('');
    const ck = await crypto.subtle.importKey('raw', raw, 'AES-GCM', false, ['encrypt', 'decrypt']);
    return {
      room,
      topic: t => `lumentia-mando/${room}/${t}`,     // s: estado · n: imagen en pantalla · x: siguiente · c: órdenes · p: móviles
      async seal(obj) {
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv, additionalData: enc.encode(room) }, ck, enc.encode(JSON.stringify(obj))));
        const out = new Uint8Array(12 + ct.length); out.set(iv); out.set(ct, 12);
        return b64.enc(out);
      },
      async open(text) {                              // null si no es nuestro o está manipulado
        try {
          const u8 = b64.dec(String(text));
          if (u8.length < 29) return null;
          const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: u8.subarray(0, 12), additionalData: enc.encode(room) }, ck, u8.subarray(12));
          return JSON.parse(dec.decode(pt));
        } catch (e) { return null; }
      },
    };
  }

  // Enlace del mando: todo va detrás de «#» (no sale del móvil).
  function link(cfg) {
    const p = new URLSearchParams();
    p.set('k', cfg.key);
    if (cfg.broker && cfg.broker !== DEFAULT_BROKER) p.set('b', cfg.broker);
    if (cfg.user) { p.set('u', cfg.user); p.set('w', cfg.pass || ''); }
    return (cfg.page || PAGE) + '#' + p.toString();
  }
  function parseLink(hash) {
    const p = new URLSearchParams(String(hash || '').replace(/^#/, ''));
    return { key: p.get('k') || '', broker: p.get('b') || DEFAULT_BROKER, user: p.get('u') || '', pass: p.get('w') || '' };
  }

  window.MandoNet = { DEFAULT_BROKER, PAGE, newKey, validKey, open, link, parseLink };
})();
