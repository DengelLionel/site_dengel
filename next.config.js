/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["fotos.perfil.com","kardumtech.es","www.cybercenter.cl","picsum.photos","www.hostinger.es","d1ih8jugeo2m5m.cloudfront.net","img.freepik.com"],
 
   }
}

const withBundleAnalyzer=require('@next/bundle-analyzer')({
  enabled:process.env.ANALYZE==='true'
})
module.exports = withBundleAnalyzer(nextConfig)
