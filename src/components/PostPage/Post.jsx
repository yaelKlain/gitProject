import { useEffect } from "react"  
import FormDialog from "../DialogCards"
import { useSelector, useDispatch } from 'react-redux'
import BasicCard1 from "./ShowPost"
import { postGet } from "../../Store/PostSlice"
import React from "react"

const Post = (props) => {

    const dispatch = useDispatch()
    const arr=dispatch(postGet())
    const slicePost = useSelector((myStore) => myStore.PostSlice.arr)

    const AddItem=()=>{           
        setOpen(true);                   
    }

    const [open, setOpen] = React.useState(false);

    return (
        <>
         <button onClick={() => AddItem() }>add
            {open && <FormDialog text={props.conntect} like={'true'} page={'addPost'}/>} </button>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    slicePost.map((item) => {
                        return (
                            <BasicCard1 id={item.id} text={item.conntect}/>
                        )
                    })
                }</div>


        </>
    )
}

export default Post