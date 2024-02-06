import { useSelector, useDispatch } from 'react-redux'
import BasicCard1 from "./ShowPost"
import { postGet } from "../../Store/PostSlice"
import React from "react"
import FormDialogPost from "../../DialogCardsPost"

const Post = (props) => {

    const dispatch = useDispatch()
    const arr = dispatch(postGet())
    const slicePost = useSelector((myStore) => myStore.PostSlice.arr)

    const AddItem = () => {
        setOpen(true);
    }
    const onClose = () => {
        setOpen(false)
    }

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <button onClick={() => AddItem()}>add
                 </button>
                 {open && <FormDialogPost page={'add'} openFunc={onClose}/>}

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    slicePost.map((item) => {
                        return (
                            <BasicCard1 id={item.id} text={item.conntect} />
                        )
                    })
                }</div>
        </>
    )
}
export default Post