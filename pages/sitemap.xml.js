const EXTERNAL_DATA_URL = 'https://dengelriveradev.com/miblog';

function generateSiteMap(miblog) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://dengelriveradev.com</loc>
     </url>
     <url>
       <loc>https://dengelriveradev.com/</loc>
     </url>
     ${miblog
       .map(({titulo }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${titulo}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(miblog);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;