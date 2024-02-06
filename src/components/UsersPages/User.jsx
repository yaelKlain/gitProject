import { useSelector,useDispatch} from 'react-redux'
import BasicCard1 from './showUser'
import { UserGet } from '../../Store/UserSlice'
import React from 'react'
import FormDialogUser from '../DialogUser'

const User = () => {  
    const dispatch=useDispatch()
   dispatch(UserGet())
    const sliceToDo = useSelector((myStore) => myStore.userSlice.arr)       
    const AddItem=()=>{  
        setOpen(true);                
    }

    const [open, setOpen] = React.useState(false);     

    const onClose = () => {
        setOpen(false)
    }
    return (
        <>
        <button onClick={() => AddItem() }>add
            {open && <FormDialogUser  page={'addUser'} openFunc={onClose}/>} </button>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    sliceToDo.map((item) => {
                        return (
                            <BasicCard1 id={item.id} text={item} />
                        )
                    })
                }
                </div>
        </>
    )
}

export default User