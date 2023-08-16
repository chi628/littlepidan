export function throttle(func: Function, limit = 200): any {
  let inThrottle: boolean
  return function (): any {
    const args = arguments

    if (!inThrottle) {
      inThrottle = true
      // @ts-ignore
      func.apply(this, args)
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export function debounce(func: Function, limit = 200): any {
  let timer: any = null
  return function () {
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      // @ts-ignore
      func.apply(this, args)
    }, limit)
  }
}
