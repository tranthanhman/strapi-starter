/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "default",
        domains: ['laravel-school.com',"localhost"],
    },
}

module.exports = nextConfig