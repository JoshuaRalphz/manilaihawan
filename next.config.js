const nextConfig = {
  images: {
    domains: ['logo.clearbit.com', 'source.unsplash.com'],
    unoptimized: true,
  },
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ],
  },
};

module.exports = nextConfig; 