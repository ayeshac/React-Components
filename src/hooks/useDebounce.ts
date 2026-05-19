import { useEffect, useState } from "react";


const useDebounce = (inputText:string,delay:number) => {

    const [debouncedValue,setDebouncedValue] = useState('')

    useEffect(()=>{
        const time = setTimeout(()=>{
            setDebouncedValue(inputText)
        },delay)
        return ()=>clearTimeout(time)
    },[inputText,delay])

    return debouncedValue
}

export default useDebounce