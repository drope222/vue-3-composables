<script setup lang="ts">
import { ref } from 'vue'
import { onKeyPress, useDark, useHideScroll, useWindowSize } from '../composables'

const { isDark, setDark } = useDark()
// html body must have 0 margin
const { showScroll, hideScroll, isScrollHidden } = useHideScroll()
const { keyPress, keyPressed } = onKeyPress()

const showCode = ref(false)

keyPress('a', (e) => {
  e.preventDefault()
  showCode.value = !showCode.value
})

keyPress(['b', 'c'], () => {
  showCode.value = !showCode.value
})

const { isWindowSize, width, height } = useWindowSize()
</script>

<template>
  <div class="h-screen w-full mb-2">
    <div class="p-2 divide-y">
      <div class="p-4">
        <div>
          isDark: {{ isDark }}
        </div>
        <div class="pt-2">
          <button class="btn" @click="setDark">
            setDark
          </button>
        </div>
      </div>
      <div class="p-4 flex flex-col">
        <div>
          keyPress: {{ keyPressed }}
        </div>
        <div class="pt-2">
          Press key a, b or c to show code below:
        </div>
        <div class="pt-2">
          code:
        </div>
        <div class="pt-2 code">
          <span v-if="showCode">
            keyPress('a', () => {
            showCode.value = true
            })

          </span>
        </div>
      </div>
      <div class="p-4">
        <div>
          isScrollHidden: {{ isScrollHidden }}
        </div>
        <div class="flex gap-3 pt-2">
          <button class="btn" @click="showScroll">
            showScroll
          </button>
          <button class="btn" @click="hideScroll">
            hideScroll
          </button>
        </div>
      </div>

      <div class="p-4">
        <div>
          Width: {{ width }}
        </div>
        <div>
          Height: {{ height }}
        </div>
        <div>
          isWindowSize > md: {{ isWindowSize('>', 'md') }}
        </div>
        <div>
          isWindowSize &lt; md: {{ isWindowSize('<', 'md') }}
        </div>
        <div>
          isWindowSize &lt; lg: {{ isWindowSize('<', 'lg') }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
html {
  @apply bg-[#ECEFF4] text-[#4C566A];
}
.code {
  @apply bg-[#E5E9F0] min-h-10 rounded p-2 dark:bg-[#4C566A];
}

.btn {
  @apply bg-[#88C0D0] bg-opacity-90 hover:bg-[#88C0D0]  text-[#3B4252] font-medium p-2 rounded-md;
}
.dark {
  @apply bg-[#2E3440] text-[#ECEFF4];
}
</style>
