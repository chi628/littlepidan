import { ref, listAll, getDownloadURL, list } from "firebase/storage"
import { storage } from "./firebase"

export const GetImgList = async () => {
  const listRef = ref(storage, "images")

  const res = await listAll(listRef)

  const imgList = await Promise.all(
    res.items.map(async (item) => {
      return {
        id: regularName(item.name),
        url: await getDownloadURL(item),
      }
    })
  )

  return {
    total: res.items.length,
    imgList,
  }
}

const regularName = (name: string) => {
  const dotIndex = name.lastIndexOf(".")

  return name.slice(0, dotIndex)
}
