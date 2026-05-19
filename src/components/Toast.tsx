import React from "react"
import { Toast } from "../types/toast";
import './Toast.css'

interface Props{
    toast:Toast;
    onClose:()=>void
}

const ToastItem = ({toast,onClose}:Props) => {
    return(
        <div className={`toast toast-${toast.type}`}>
            <span >{toast.message}</span>
            <span onClick={onClose}>X</span>
        </div>
    )
}

export default ToastItem