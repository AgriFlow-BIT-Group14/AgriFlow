import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // If there are any restricted paths
    },
    sitemap: 'https://agri-flow-self.vercel.app/sitemap.xml',
  }
}
