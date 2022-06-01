import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const isUserKey = (newKey: string, key: string | Array<string>) => {
  let keyArray: Array<string> = []

  if (typeof key === 'string')
    keyArray.push(key)
  else if (typeof key === 'object')
    keyArray = key

  for (let i = 0; i < keyArray.length; i++) {
    if (newKey === keyArray[i])
      return true
  }
  return false
}

function onKeyPress() {
  const keyPressed = ref<string | null>(null)
  const keyEvent = ref<KeyboardEvent | null>(null)

  const listenOnKey = (event: KeyboardEvent) => {
    keyPressed.value = event.key
    keyEvent.value = event
  }

  const keyPress = (key: string | Array<string>, callback: (event: KeyboardEvent) => void) => {
    watch(keyPressed, (newKeyPressed) => {
      if (isUserKey(newKeyPressed, key)) {
        callback(keyEvent.value)
        keyPressed.value = null
      }
    })
  }

  onMounted(() => {
    window.addEventListener('keyup', listenOnKey)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keyup', listenOnKey)
  })

  return { keyPress, keyPressed }
}

export { onKeyPress }
