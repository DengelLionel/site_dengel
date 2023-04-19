/* const SITE_URL = process.env.SITE_URL || 'https://dengelriveradev.com';


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

export default config; */
import { SitemapStream, streamToPromise } from 'sitemap'
import { createGzip } from 'zlib'
import { GetServerSidePropsContext } from 'next'
import { createServer } from 'http'

const hostname = 'https://dengelriveradev.com'

interface Url {
  url: string
  changefreq: string
  priority: number
}

async function generateSitemapXml(): Promise<Buffer> {
  const sitemap = new SitemapStream({
    hostname,
  })
  const pipeline = sitemap.pipe(createGzip())

  const urls: Url[] = [
    {
      url: '/',
      changefreq: 'daily',
      priority: 1,
    },
    {
      url: '/about',
      changefreq: 'monthly',
      priority: 0.8,
    },
    // Agrega tus rutas aquí
  ]

  urls.forEach((url) => {
    sitemap.write(url)
  })

  sitemap.end()

  return streamToPromise(pipeline)
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const sitemapXml = await generateSitemapXml()

  ctx.res.setHeader('Content-Type', 'application/xml')
  ctx.res.setHeader('Content-Encoding', 'gzip')
  ctx.res.write(sitemapXml)
  ctx.res.end()

  return {
    props: {},
  }
}

const app = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/xml')
  res.setHeader('Content-Encoding', 'gzip')
  generateSitemapXml().then((sitemapXml) => {
    res.write(sitemapXml)
    res.end()
  })
})

app.listen(3000, () => {
  console.log(`Server running on https://dengelriveradev.com`)
})