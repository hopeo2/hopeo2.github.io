/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
    env: {
        VITE_APP_EMAILJS_SERVICE_ID: "service_y6knk3u",
        VITE_APP_EMAILJS_TEMPLATE_ID: "template_j3oci5v",
        VITE_APP_EMAILJS_PUBLIC_KEY: "DRhDBUYI_6t3dC91g",
    },
};

module.exports = nextConfig;
