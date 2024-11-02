import { toast } from "react-toastify"
const getFromLocal = (key) => {
      const data = localStorage.getItem(key)
      if (data) {
            return JSON.parse(data)
      }
      else {
            return []
      }
}


const setItemLocal = (key, id, bookName, location) => {

      let getData = getFromLocal(key)
      if (getData.includes(id)) {
            toast.error(`${bookName} Already Added to ${location}`)
            return
      }
      else {
            getData.push(id)
            const getDataStringify = JSON.stringify(getData)
            localStorage.setItem(key, getDataStringify)
            toast.success(`${bookName} Added to ${location}`)
      }
}
export { setItemLocal, getFromLocal }