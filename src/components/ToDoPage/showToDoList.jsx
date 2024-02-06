import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import FormDialog from '../DialogCards';
import { toDoDelete } from '../../Store/ToDoSlice';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function BasicCard(props) {

    const dispatch=useDispatch()
    const DeleteItem=()=>{       
        dispatch(toDoDelete(props.id))        
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const [open, setOpen] = React.useState(false);
   
    return (
        <Card sx={{ minWidth: 275 }} style={{ margin: 'auto', marginTop: '20px' }}>
            <CardContent>
                <FormControlLabel control={<Checkbox />} />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.id}
                </Typography>
                <Typography variant="body2">
                    <div>{props.text}</div>                  

                </Typography>
                <Typography variant="body2">
                    <div>{props.time}</div>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => handleClickOpen()}>
                    {open && <FormDialog text={props.text} id={props.id} createDate={props.createDate} completed={props.completed} page={"editToDo"}/>}
                    <EditIcon /></Button>                                   
                <Button size="small" variant="outlined" onClick={() => DeleteItem(props.id)}                
                ><DeleteIcon /></Button>
            </CardActions>

        </Card>
    );
}