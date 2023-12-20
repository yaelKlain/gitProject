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

export default function FormDialog(props) {
  const dispatch = useDispatch()



  const [open, setOpen] = React.useState(true);
  const [inputChange,setInputChange]=React.useState("")

    const handleClickOpen = () => {
      setOpen(true);
    };

  const handleClose = (props) => {
    setOpen(false);
    const newToDoItem={
      newText:inputChange,
      id:props.id
    }
    // dispatch(editing(newToDoItem))
  };
  // console.log(inputChange);

 
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

            <Button onClick={()=>handleClose(props)} >Save</Button>
           
          </div>


        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
  
}