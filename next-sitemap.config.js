const SITE_URL = process.env.SITE_URL || 'https://dengelriveradev.com';


const NEXT_SSG_FILES = [
    '/*.json$',
    '/*_buildManifest.js$',
    '/*_middlewareManifest.js$',
    '/*_ssgManifest.js$',
    '/*.js$',
  ];
const config = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: NEXT_SSG_FILES,
      },
    ],
  },
};

export default config; 

