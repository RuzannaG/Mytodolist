import { useEffect, useState } from "react"


export  const Header=({onAdd})=>{
 
const [text, setText]= useState("")
useEffect(()=>{
     setText(text)
})

const handleClik=event=>{
     event.preventDefault();
     onAdd(text)
     setText("")
 }
   return(
        <div className="header">
             <h1>Add your todo-items</h1>
             <div className="border" >
                    <form onSubmit={(e)=>
               {e.preventDefault();
                onAdd(text)
                setText("")
                }}>
            <input  className="inp" type="text" placeholder="New Todo" value={text}
            onChange={(e)=>{
               setText(e.target.value)
            }}/>
            
            <button  onClick={handleClik}  type="submit" className='btn'>Add new task</button> 
            </form>
             </div>
        </div>
    )
}