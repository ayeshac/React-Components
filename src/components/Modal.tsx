import React, { useEffect } from 'react'
import { ModalProps } from '../types/modal';
import './Modal.css'

const ModalUI = ({ title, isOpen, onClose, onConfirm, children }: ModalProps) => {
    useEffect(()=>{
        const handleKeyDown = (e : KeyboardEvent) =>{
            if(e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown',handleKeyDown)
        return () => document.removeEventListener("keydown",handleKeyDown)
    },[isOpen])
    if (!isOpen) return null
    return (

        < div className='modal-overlay' onClick={onClose}>
            <div className='modal-box' onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button onClick={onClose}>✕</button>
                </div>
                <div className='modal-body'>{children}</div>
                <div className="modal-footer">
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={onConfirm}>Confirm</button>
                </div>
            </div>
        </div >

    )
}
export default ModalUI;