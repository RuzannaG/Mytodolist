import { TodoMain } from "../TodoMain/TodoMain"

export const Todolist = ({todos}) =>{

    



 return(
    <div className="city">
    
    {
        todos.map((todo)=> {
            return(
                <TodoMain key ={todo.id} todo={todo}/>
            )
        })
    }
  
    </div>
 )
}