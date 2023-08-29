import { ref, listAll, getDownloadURL, list } from "firebase/storage"
import { storage } from "./firebase"

const IMG_LIMIT = 16
let firstLoad: boolean = false
export const GetImgList = async (payload: {
  limit: number,
  nextToken?: string
}) => {
  const listRef = ref(storage, "images")



  const page = await list(listRef, {
    maxResults: payload.limit,
    pageToken: payload.nextToken
   })

  const imgList = await Promise.all(
    page.items.map(async(item) => {
      return {
        id: regularName(item.name),
        url: await getDownloadURL(item)
      }
    })
  )

  return {
    nextToken: page.nextPageToken,
    imgList,
  }

  // return {
  //   total: res.items.length,
  //   imgList,
  // }
}

const regularName = (name: string) => {
  const dotIndex = name.lastIndexOf(".")

  return name.slice(0, dotIndex)
}
