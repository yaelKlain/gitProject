import { useEffect } from "react" 
import ToDoSlice, { todoGet } from "../../Store/ToDoSlice"
import { useSelector, useDispatch } from 'react-redux'
import BasicCard from "./showToDoList"
import { toDoAdd } from "../../Store/ToDoSlice"
import FormDialog from "../DialogCards"
import React from "react"


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
            {open && <FormDialog  page={'addToDo'}/>} </button>

         
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