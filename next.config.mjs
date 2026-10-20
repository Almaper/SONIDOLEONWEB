/** @type {import('next').NextConfig} */
// Web estática: `next build` genera la carpeta `out/` lista para GitHub Pages.
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
