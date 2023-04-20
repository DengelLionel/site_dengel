const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;


const NEXT_SSG_FILES = [
    '/*.json$',
    '/*_buildManifest.js$',
    '/*_middlewareManifest.js$',
    '/*_ssgManifest.js$',
    '/*.js$',
  ];
  const config = {
    siteUrl,
    generateRobotsTxt: true,
    exclude,
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

