import React from "react";
import ToastItem from "./Toast";
import { Toast } from "../types/toast";
import './Toast.css'


interface Props{
    toastData:Toast[];
    removeToast:(id:string)=>void;
}
const ToastContainer = ({toastData, removeToast}:Props) => {
    
    return (
        <div className="toast-container">
            {toastData.map((item: Toast) => <ToastItem key={item.id} toast={item} onClose={() => removeToast(item.id)} />)}

        </div>
    )
}

export default ToastContainer;