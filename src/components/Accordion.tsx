import React, { useState } from "react";
import { AccordionItem } from "../types";
import AccordionItemUI from "./AccordionItem";
import './Accordion.css'

interface Props{
    data: AccordionItem[]
}

const Accordion = ({data} : Props) => {
    const [openIndex,setOpenIndex] = useState<number | null>(null)
    const onClick = (index:number) => {
        setOpenIndex((index===openIndex ? null : index))
    }
    return(
        <div className="accordion-container">
            {data.map((item:AccordionItem,index:number)=><AccordionItemUI key={index} header={item.header} body={item.body} onClick={()=>onClick(index)} isOpen={index === openIndex}/>)}
        </div>
    )
}

export default Accordion