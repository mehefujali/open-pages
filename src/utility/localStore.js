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



const setItemLocal = (key, id) => {


      let getData = getFromLocal(key)

      console.log(getData);

      if (getData.includes(id)) {
            toast.error('already added')
            return
      }
      else {
            getData.push(id)
            const getDataStringify = JSON.stringify(getData)
            localStorage.setItem(key, getDataStringify)
            toast.success(`${key} Added`)
      }


}

export { setItemLocal }