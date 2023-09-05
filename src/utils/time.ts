import dayjs from "dayjs"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"

dayjs.extend(isSameOrAfter)
export const isBirthDay = dayjs().isSameOrAfter(dayjs("20230906"))
