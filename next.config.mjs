/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — outputs to `out/`, deployable anywhere (Vercel, Netlify, GitHub Pages).
  output: "export",
  // next/image optimization requires a server; disable it for static export.
  images: { unoptimized: true },
  // Emit `folder/index.html` so routes work on static hosts without trailing-slash config.
  trailingSlash: true,
};

export default nextConfig;
