import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
  // Use Vite's import.meta.glob to bundle the raw content of these files AT BUILD TIME.
  // This avoids any runtime filesystem (fs) or edge storage issues in Vercel/Cloudflare.
  const rawFiles = import.meta.glob('~/app/pages/ejercicios/*.{vue,js,ts}', {
    query: '?raw',
    import: 'default'
  })

  // We can also just get eagerly.
  // const rawFiles = import.meta.glob('~/app/pages/ejercicios/*.{vue,js,ts}', { query: '?raw', import: 'default', eager: true })
  
  const exercises = []
  
  for (const [path, resolver] of Object.entries(rawFiles)) {
    try {
      // Execute the resolver to get the string content
      const content = await resolver() as string
      
      // Extract filename from the full path e.g. '~/app/pages/ejercicios/adduser.vue' => 'adduser.vue'
      const file = path.split('/').pop() || ''
      
      // Simple logic to extract title and technologies
      const title = file.replace(/\.(vue|js|ts)$/, '')
        .split(/[-_]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      const technologies = []
      if (file.endsWith('.vue')) technologies.push('Vue', 'Nuxt')
      if (file.endsWith('.js')) technologies.push('JavaScript')
      if (file.endsWith('.ts')) technologies.push('TypeScript')
      
      // Look for custom metadata in comments
      const titleMatch = content.match(/<!--\s*title:\s*(.*)\s*-->/i)
      const techMatch = content.match(/<!--\s*techs?:\s*(.*)\s*-->/i)
      const descriptionMatch = content.match(/<!--\s*description:\s*(.*)\s*-->/i)

      // ALSO look for metadata object in JS/TS: const info = { title: "...", description: "..." }
      const jsInfoMatch = content.match(/const\s+(?:info|metadata|exerciseInfo)\s*=\s*\{([\s\S]*?)\}/i)
      let jsTitle: string | null = null
      let jsDescription: string | null = null

      if (jsInfoMatch) {
        const jsBody = jsInfoMatch[1] || ''
        const tMatch = jsBody.match(/title:\s*['"`](.*?)['"`]/i)
        const dMatch = jsBody.match(/description:\s*['"`](.*?)['"`]/i)
        if (tMatch?.[1]) jsTitle = tMatch[1]
        if (dMatch?.[1]) jsDescription = dMatch[1]
      }
      
      exercises.push({
        slug: file.replace(/\.(vue|js|ts)$/, ''),
        title: jsTitle || titleMatch?.[1]?.trim() || title,
        description: jsDescription || descriptionMatch?.[1]?.trim() || 'Explora este ejercicio para ver el resultado funcional y el código fuente.',
        technologies: techMatch?.[1] ? techMatch[1].split(',').map(t => t.trim()) : technologies,
        createdAt: new Date(),
        updatedAt: new Date(),
        fileName: file,
        content: content
      })
    } catch (e) {
      console.error(`Error processing file ${path}:`, e)
    }
  }

  // Sort alphabetically by title
  return exercises.sort((a, b) => a.title.localeCompare(b.title))
})
