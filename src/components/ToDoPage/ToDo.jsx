import  { todoGet } from "../../Store/ToDoSlice"
import { useSelector, useDispatch } from 'react-redux'
import BasicCard from "./showToDoList"
import React from "react"
import FormDialogToDo from "../DialogCards"

const ToDo = () => {

    const dispatch=useDispatch()
    const arr=dispatch(todoGet())
    const sliceToDo = useSelector((myStore) => myStore.toDoSlice.arr)  
         
    const AddItem=()=>{            
        setOpen(true);                   
    }    
 
    const [open, setOpen] = React.useState(false);    

    return (
        <>
          <button onClick={() => AddItem() }>add
            {open && <FormDialogToDo  page={'addToDo'}/>} </button>

         
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {                  
                    sliceToDo.map((item) => {
                        return (                            
                            <BasicCard id={item.id} text={item.name} />
                        )
                    })
                }
                </div>
        </>
    )
}
export default ToDo