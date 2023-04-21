  export const TodoMain = ({todo}) =>{
     
    return (

        <div className="input-list">
        <label>
            {todo.text}
       <input type="checkbox"/>
       <button>X</button>
        </label>
    </div>
    )
  }