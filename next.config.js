/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  images: {
    domains: [
      'www.badmovies.org', 
      'image.tmdb.org', 
      'www.netflix.com',
      'www.themoviedb.org',
      'www.themoviedb.org'
    ]
  }
}

module.exports = nextConfig
