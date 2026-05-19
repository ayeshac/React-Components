import { ReactNode } from "react";

export interface ModalProps{
    title:string;
    onClose:()=>void;
    onConfirm:()=>void;
    isOpen:boolean;
    children:ReactNode
}