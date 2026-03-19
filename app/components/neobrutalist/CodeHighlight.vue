<template>
  <div class="relative bg-[#1e1e1e] border-4 border-black shadow-brutal p-4 overflow-auto max-h-[600px] group">
    <div class="absolute top-2 right-2 flex gap-2 z-10">
      <button 
        @click="copyCode" 
        class="bg-brutal-cyan border-2 border-black p-1 text-[10px] font-black uppercase hover:bg-black hover:text-white transition-colors"
      >
        {{ copied ? 'COPIADO' : 'COPIAR' }}
      </button>
    </div>
    <div v-if="loading" class="text-white font-black uppercase text-xs p-4">
      Cargando código...
    </div>
    <div v-else-if="error" class="text-red-500 font-black uppercase text-xs p-4">
      {{ error }}
    </div>
    <div v-else v-html="highlightedCode" class="shiki-container"></div>
  </div>
</template>

<script setup>
import { getSingletonHighlighter } from 'shiki'

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    default: 'vue'
  }
})

const highlightedCode = ref('')
const loading = ref(true)
const error = ref(null)
const copied = ref(false)
const supportedLangs = ['vue', 'javascript', 'typescript', 'html', 'css', 'json']

const resolveLang = (lang) => {
  if (lang === 'js') return 'javascript'
  if (lang === 'ts') return 'typescript'
  return supportedLangs.includes(lang) ? lang : 'javascript'
}

const highlight = async () => {
  loading.value = true
  error.value = null
  try {
    const highlighter = await getSingletonHighlighter({
      themes: ['vitesse-dark'],
      langs: ['vue', 'javascript', 'typescript', 'html', 'css', 'json']
    })

    highlightedCode.value = highlighter.codeToHtml(props.code, { 
      lang: resolveLang(props.lang),
      theme: 'vitesse-dark'
    })
  } catch (e) {
    console.error('Shiki highlighting error:', e)
    error.value = 'Error al resaltar el código'
    highlightedCode.value = `<pre class="text-white p-4">${props.code}</pre>`
  } finally {
    loading.value = false
  }
}

const copyCode = () => {
  navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}

watch(() => props.code, highlight, { immediate: true })
</script>

<style>
.shiki-container pre {
  margin: 0;
  padding: 0;
  background-color: transparent !important;
}
.shiki-container code {
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
}
</style>
