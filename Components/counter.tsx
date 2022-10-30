import Button1 from "./button1"
import { useState } from "react"

var counting: number = 0

type CounterType = {

   function: () => void
}


const Counter = () => {
    const [value,startingvalue] = useState(0)
    
    const plusCounter = () => {
        //counting = counting+1
        startingvalue(value+1)
        console.log(value);
        
    }
    const minusCounter = () => {
        //counting = counting-1
        startingvalue(value-1)
        console.log(value);
        
    }
        return (
            <div>
                <Button1 onclickhandle={()=>plusCounter()} title={"+"}/>
                 {value}
                <Button1 onclickhandle={()=>minusCounter()} title={"-"}/>

            </div>
        )
}

   




export default Counter

