import fs from 'node:fs'
import path from 'node:path'
import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
  const exercisesDir = path.resolve(process.cwd(), 'app/pages/ejercicios')
  
  if (!fs.existsSync(exercisesDir)) {
    return []
  }

  const files = fs.readdirSync(exercisesDir)
  
  const exercises = files
    .filter(file => file.endsWith('.vue') || file.endsWith('.js') || file.endsWith('.ts'))
    .map(file => {
      try {
        const filePath = path.join(exercisesDir, file)
        const stats = fs.statSync(filePath)
        const content = fs.readFileSync(filePath, 'utf-8')
        
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
        
        return {
          slug: file.replace(/\.(vue|js|ts)$/, ''),
          title: jsTitle || titleMatch?.[1]?.trim() || title,
          description: jsDescription || descriptionMatch?.[1]?.trim() || 'Explora este ejercicio para ver el resultado funcional y el código fuente.',
          technologies: techMatch?.[1] ? techMatch[1].split(',').map(t => t.trim()) : technologies,
          createdAt: stats.birthtime,
          updatedAt: stats.mtime,
          fileName: file,
          content: content
        }
      } catch (e) {
        console.error(`Error processing file ${file}:`, e)
        return null
      }
    })
    .filter(ex => ex !== null)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

  return exercises
})
