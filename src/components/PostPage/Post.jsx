import { useEffect } from "react"
// import { showToDoList } from "./Store/ToDoSlice"
// import toDoSlice from './components/ToDoPage/Store/ToDoSlice'  

import { useSelector, useDispatch } from 'react-redux'
// import FormDialog from "../DialogCards"
import BasicCard1 from "./ShowPost"
// import BasicCard from "./showToDoList"
// import PostSlice from "../../Store/PostSlice"

const Post = (props) => {

    const dispatch = useDispatch()
    const slicePost = useSelector((myStore) => myStore.PostSlice.postList)

    return (
        <>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    slicePost.map((item) => {
                        return (
                            <BasicCard1 id={item.id} text={item.nameOfTask} />
                        )
                    })
                }</div>


        </>
    )
}

export default Post