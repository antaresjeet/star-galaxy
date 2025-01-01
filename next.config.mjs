/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    swapiEndPoint: 'https://swapi.py4e.com/api/',
    starWarsOfficialWebsite: 'https://www.starwars.com/'
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
};

export default nextConfig;
