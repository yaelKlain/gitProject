import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux'
import { PostAdd,postPut } from './Store/PostSlice';
import PostSlice from './Store/PostSlice';

export default function FormDialogPost(props) {
    const dispatch = useDispatch()
    const sliceToDo = useSelector((myStore) => myStore.PostSlice.arr)


    const [open, setOpen] = React.useState(true);
    const [inputChange, setInputChange] = React.useState("")


    const handleClose = (props) => {        

        setOpen(false);
        props.openFunc()

        if (props.page == 'add')
        {
            addIPost(props)
            console.log('add');

        }            
        else
        {
            putIPost(props)
            console.log('other');
        }         


    };

    const addIPost = (props) => {
     
        const newpostItem = {
            conntect: inputChange,
            like: sliceToDo[0].like
        }
        dispatch(PostAdd(newpostItem))
    }


    const putIPost = (props) => {
        setOpen(false);
        const newPostItem = {
            conntect: inputChange,
            like: props.like,
            id: props.id
        }
        dispatch(postPut(newPostItem))
    }

   


    return (
        <React.Fragment>

            <Dialog open={open}  >

                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id={props.id}
                        label={props.text}
                        type="text"
                        fullWidth
                        variant="standard"

                        onChange={(e) => { setInputChange(e.target.value) }}

                    />
                </DialogContent>
                <DialogActions>

                    <div className='dialog'>
                        <Button onClick={() => handleClose(props)} >Save</Button>
                    </div>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );

}