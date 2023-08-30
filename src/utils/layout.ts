import { computed, onBeforeUnmount, ref, markRaw,shallowRef } from 'vue'
import { debounce } from '@/utils/func'

export interface Breakpoints {
  [key: number]: string | Object
}

export enum Breakpoint {
  DEAFULT = 0,
  MOBILE = 480,
  TABLET = 1024,
  DESKTOP = 1280,
}

export const useLayout = (payload?: { breakpoints: Breakpoints }) => {
  const screenWidth = ref(0)
  const componentName = shallowRef('div')
  let componentObj = shallowRef({})
  const breakpoints = Object.keys(payload?.breakpoints || [])
    .map((o) => parseInt(o))
    .sort((a, b) => (a > b ? 1 : -1))
  const updateComponent = () => {
    let width = window.innerWidth
    // 是手機檢查轉向
    if ('ontouchstart' in document.documentElement) {
      width = window.matchMedia('(orientation: portrait)').matches
        ? window.innerWidth
        : window.innerHeight
    }
    if (payload && payload.breakpoints) {
      componentObj.value = breakpoints.reduce((p, c) => {
        if (width >= c) {
          return payload.breakpoints[c]
        }
        return p
      }, payload.breakpoints[breakpoints[0]] || 'div')
    }

    screenWidth.value = width
  }

  const resize = debounce(updateComponent, 30)

  window.addEventListener('resize', resize)
  updateComponent()

  function unUseLayout() {
    window.removeEventListener('resize', resize)
  }

  onBeforeUnmount(() => {
    unUseLayout()
  })

  return {
    screenWidth,
    isMobile: computed(() => {
      return screenWidth.value < Breakpoint.TABLET
    }),
    unUseLayout,
    componentName,
    componentObj,
  }
}
