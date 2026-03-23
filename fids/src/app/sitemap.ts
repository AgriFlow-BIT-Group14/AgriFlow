import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://agriflow.vercel.app'
  
  const staticPages = [
    '',
    '/login',
    '/dashboard',
    '/inventory',
    '/orders',
    '/deliveries',
    '/reports',
    '/ai',
    '/users',
    '/settings',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return staticPages
}
