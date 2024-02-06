import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux'
import { UserAdd, UserPut } from '../Store/UserSlice';

export default function FormDialogUser(props) {
    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(true);
    const [inputChange, setInputChange] = React.useState("")
    const [inputChangeEmail, setInputChangeEmail] = React.useState("")
    const [inputChangePhone, setInputChangePhone] = React.useState("")
    const [inputChangeAddress, setInputChangeAddres] = React.useState("")


    const handleClose = (props) => {
        setOpen(false);

        if (props.page == 'addUser')
            addIUser(props)
        else
            putIUser(props)
    };

    const addIUser = (props) => {

        const newpostItem = {
            name: inputChange,
            address: 'rabi',
            phone: '@' + inputChange,
            email: '0372'
        }
        dispatch(UserAdd(newpostItem))
    }

    const putIUser = (props) => {
        setOpen(false);
        const newPostItem = {
            name: inputChange,
            address: inputChangeAddress,
            phone: inputChangePhone,
            email: inputChangeEmail,
            id: props.id
        }
        dispatch(UserPut(newPostItem))
    }

    return (
        <React.Fragment>
            <Dialog open={open}>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"                        
                        label='name'
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { setInputChange(e.target.value) }}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        label='email'
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { setInputChangeEmail(e.target.value) }}
                    />
                      <TextField
                        autoFocus
                        margin="dense"
                        label='phone'
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { setInputChangePhone(e.target.value) }}
                    />
                     <TextField
                        autoFocus
                        margin="dense"
                        label='address'
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { setInputChangeAddres(e.target.value) }}
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