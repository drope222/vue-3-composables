<script setup lang="ts">
import { ref } from 'vue'
import { onKeyPress, useDark, useHideScroll } from '../composables'

const { isDark, setDark } = useDark()
//html body must have 0 margin
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
</script>

<template>
  <div class="h-screen w-full mb-2">
    <div class="p-2">
      <div class="border p-2">
        <div class="pt-2">
          isDark: {{ isDark }}
        </div>
        <div class="pt-2">
          <button @click="setDark">
            setDark
          </button>
        </div>
      </div>
      <div class="border mt-2 p-2">
        <div class="pt-2">
          keyPress: {{ keyPressed }}
        </div>
        <div class="pt-2">
          Press key a, b or c to show code below:
        </div>
        <div class="pt-2">
          code:
        </div>
        <div v-if="showCode" class="pt-2">
          keyPress('a', () => {
          showCode.value = true
          })
        </div>
      </div>
      <div class="border mt-2 p-2">
        <div class="pt-2">
          isScrollHidden: {{ isScrollHidden }}
        </div>
        <div class="pt-2">
          <button @click="showScroll">
            showScroll
          </button>
          <button @click="hideScroll">
            hideScroll
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
.h-screen {
  height: 100vh;
}

.w-full {
  width: 100%;
}

.border {
  border: 1px solid #000000;
}

.pt-2 {
  padding-top: 2rem;
}

.p-2 {
  padding: 2rem;
}

.mt-2 {
  margin-top: 2rem;
}

.mb-2 {
  margin-bottom: 2rem;

}

body {
  margin: 0;
}

html {
  background: #ffffff;
}

.dark {
  background: #000000;
  color: #ffffff;
  overflow-y: auto;
}
</style>
