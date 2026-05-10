import React from 'react'
import './Accordion.css'

interface Props {
    header: string;
    body: string;
    isOpen: boolean;
    onClick: () => void
}

const AccordionItemUI = ({ header, body, isOpen, onClick }: Props) => {
    return (
        <div className='accordion-item'>
            <h3 className='accordion-header' onClick={() => onClick()} style={{cursor:"pointer"}}><span>{header}</span> <span>{isOpen ? '▼' : '►'}</span></h3>
            {isOpen && <div className='accordion-body'>{body}</div>}
        </div>
    )
}

export default AccordionItemUI