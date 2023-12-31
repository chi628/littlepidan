import { createApp } from "vue"
import type { InjectionKey } from "vue"
export const CLOSE_MODAL: InjectionKey<() => void> = Symbol("closeModal")

const openModal = (modal: any, props?: any) => {
  const container = document.createElement("div")

  const close = () => {
    setTimeout(() => {
      container.parentNode!.removeChild(container)
    }, 500)
  }

  modal().then((c: any) => {
    const mockModal = createApp(c.default, props)
    mockModal.provide(CLOSE_MODAL, close)
    document.body.append(container)
    mockModal.mount(container)
  })
}

export const UserNameModal = () => {
  openModal(() => import("@/components/modal/name.vue"))
}

export const ConfirmModal = (content: string) => {
  openModal(() => import("@/components/modal/confirm.vue"), {
    content,
  })
}

export const scoreModal = () => {
  openModal(() => import("@/components/modal/score.vue"))
}

export const commentModal = (payload: { id: string; url: string }) => {
  openModal(() => import("@/components/modal/comment.vue"), payload)
}

export const imageModal = (url: string) => {
  openModal(() => import("@/components/modal/imageModal.vue"), {
    url,
  })
}

export const celebrateModal = () => {
  openModal(() => import("@/components/modal/birthday.vue"))
}
