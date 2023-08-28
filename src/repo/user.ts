import { useUserStore } from '@/stores/user'

export const userName = () => {
  const store = useUserStore()
  return store.userName
}