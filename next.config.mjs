/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.wixstatic.com',
                pathname: '/media/edb4f9_abd0533208c44e4e84bdc4ad942ecbb6~mv2.png/**',
            },
        ],
    },
};

export default nextConfig;

