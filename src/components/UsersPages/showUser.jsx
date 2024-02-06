import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRef } from 'react';
import { UserDelete } from '../../Store/UserSlice';
import FormDialogUser from '../DialogUser';

export default function BasicCard1(props) {
    const dispatch=useDispatch()
    const DeleteItem=()=>{       
        dispatch(UserDelete(props.id))        
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const dialogRef = useRef(null);
    const [open, setOpen] = React.useState(false); 

    return (
        <Card sx={{ minWidth: 275 }} style={{ margin: 'auto', marginTop: '20px' }}>
            <CardContent>                          
                <div>{props.text.email}</div>
                <div>{props.text.phone}</div>
                <div>{props.text.name}</div>
                <div>{props.text.address}</div>               

            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => handleClickOpen(true)}>                    
                    <EditIcon /></Button>
                    {open && <FormDialogUser text={props.text.name} id={props.id} email={props.text.email} phone={props.text.phone} address={props.text.address} page={"editUser"}/>}
                <Button size="small" variant="outlined" onClick={() => DeleteItem(props.id)}                
                ><DeleteIcon /></Button>
            </CardActions>
        </Card>
    );
}