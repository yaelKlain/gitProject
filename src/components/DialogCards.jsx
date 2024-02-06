import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import BasicCard from './ToDoPage/showToDoList';
import { editing } from '../Store/ToDoSlice';
import { useDispatch, useSelector } from 'react-redux'
import UseGet from '../hooks/useGet';
import { toDoPut } from '../Store/ToDoSlice';
import { toDoAdd } from '../Store/ToDoSlice';

export default function FormDialogToDo(props) {
  const dispatch = useDispatch()
  const sliceToDo = useSelector((myStore) => myStore.toDoSlice.arr)

  const [open, setOpen] = React.useState(true);
  const [inputChange, setInputChange] = React.useState("")

  const handleClose = (props) => {

    if (props.page == 'addToDo')
      addIToDo(props)
  
    if(props.page=='editToDo')
      putIToDo(props)

  };

  const addIToDo = (props) => {
    setOpen(false);
    const newToDoItem = {
      name: inputChange,
      createDate: props.createDate,
      completed: props.completed,
    }
    dispatch(toDoAdd(newToDoItem))
  }

  const putIToDo = (props) => {
    setOpen(false);
    const newToDoItem = {
      name: inputChange,
      createDate: props.createDate,
      completed: props.completed,
      id: props.id
    }
    dispatch(toDoPut(newToDoItem))
  }

  return (
    <React.Fragment>
      <Dialog open={open} >
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