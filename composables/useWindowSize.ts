import { onMounted, onUnmounted, ref } from 'vue'

const width = ref<Number>(0)
const height = ref<Number>(0)

type sizes = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
type query = '>' | '<' | '=='

const windowSize: Record<sizes, Number> = {
  'sm': 640,
  'md': 768,
  'lg': 1024,
  'xl': 1280,
  '2xl': 1536,
}

const getSizes = () => {
  width.value = window.innerWidth
  height.value = window.innerHeight
}

function useWindowSize() {
  const onWidthChange = () => getSizes()

  const isWindowSize = (query: query, size: sizes) => {
    if (query === '>') {
      if (width.value && width.value >= windowSize[size])
        return true
    }
    if (query === '<') {
      if (width.value && width.value <= windowSize[size])
        return true
    }
    if (query === '==') {
      if (width.value && width.value === windowSize[size])
        return true
    }
    return false
  }

  onMounted(() => {
    width.value = window.innerWidth
    height.value = window.innerHeight
    window.addEventListener('resize', onWidthChange)
  })
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))

  return { width, height, isWindowSize }
}

export { useWindowSize }
