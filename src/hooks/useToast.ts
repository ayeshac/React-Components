import { useState } from "react"
import { Toast, ToastType } from "../types/toast"

interface Props{
    message:string;
    type: ToastType;
}
const useToast = () => {
   const [toastData,setToastData] = useState<Toast[]>([])

   const addToast = ({message,type} : Props) => {
        let newToastObj = {
            id: Date.now().toString(),
            message:message,
            type:type
        }
        setToastData((prev)=>[...prev,newToastObj])
        setTimeout(()=>{
            setToastData(prev=>prev.filter((i)=>i.id!==newToastObj.id))
        },3000)

   }

   const removeToast = (id:string)  => {
        setToastData((prev)=>prev.filter(i=>i.id!==id))
   }

   return {toastData,addToast,removeToast}
}

export default useToast