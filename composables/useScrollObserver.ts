interface Options {
  root?: HTMLElement | null
  rootMargin?: string | undefined
  threshold?: number | number[] | undefined
}

const defaultOptions: Options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
}
function useScrollObserve(
  callback: (entry: IntersectionObserverEntry) => void,
  options: Options = defaultOptions) {
  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      callback(entry)
    })
  }

  const observer = new IntersectionObserver(intersectionCallback, options)

  const observe = (target: HTMLElement) => {
    observer.observe(target)
  }

  return { observe }
}

export { useScrollObserve }
