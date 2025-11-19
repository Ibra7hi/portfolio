import { use, useEffect } from "react";
import { useRef } from "react";
import React from "react";
export default function Forttest(){
const ref = useRef(null)
useEffect(()=>{
    ref.current.focus()
})

    return(

<input type="text" 
ref={ref}
placeholder="type anything"/>
    );
}