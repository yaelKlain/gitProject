import { useEffect } from "react"
// import { showToDoList } from "./Store/ToDoSlice"
// import toDoSlice from './components/ToDoPage/Store/ToDoSlice'  

import { useSelector, useDispatch } from 'react-redux'
import BasicCard from "./showToDoList"

const ToDo = (props) => {

    const dispatch = useDispatch()
    const sliceToDo=useSelector((myStore)=>myStore.toDoSlice.toDoList)

    
//     useEffect(()=>{
        
//         sliceToDo.map((item) => {
//            return(
//             <BasicCard id={item.id} text={item.nameOfTask}  />
//            )
//            })
        
// },[] )
   
   
    return (
        <>
        
            <div style={{display:'flex',flexWrap:'wrap'}}>
                {
       sliceToDo.map((item) => {
           return(
            <BasicCard id={item.id} text={item.nameOfTask}  />
           )
           })
        }</div>
       
          
        </>
    )
}

export default ToDo