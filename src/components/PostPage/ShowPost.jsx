import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  useDispatch } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRef } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { red } from '@mui/material/colors';
import { useState } from 'react';
import FormDialogPost from "../../DialogCardsPost"
import { PostDelete } from '../../Store/PostSlice';

export default function BasicCard1(props) {
    const dispatch = useDispatch()

    const DeleteItem=()=>{       
        dispatch(PostDelete(props.id))        
    }

    const dialogRef = useRef(null);

    const [open, setOpen] = React.useState(false);

    const [favoriteIconColor, setFavoriteIconColor] = React.useState(false);
    const [favoriteIconBasic, setFavoriteIconBasic] = React.useState(true);

    const [isExpanded, setExpanded] = useState(false);   

    const [longText, setLongText] = React.useState(props.text);

    const longText1=props.text
    const w=longText1.slice(0, 5);

    const onClose = () => {
        setOpen(false)
    } 

    const changeColor = () => {        
        setFavoriteIconColor(true);
        setFavoriteIconBasic(false)
    }

    const changeColor1 = () => {
       
        setFavoriteIconColor(false);
        setFavoriteIconBasic(true)
    }

    return (

        <Card sx={{ minWidth: 275 }} style={{ margin: 'auto', marginTop: '20px' }}>
            <CardContent>
                {favoriteIconBasic && <FavoriteBorderIcon onClick={() => { changeColor() }} />}
                {favoriteIconColor && <FavoriteBorderIcon sx={{ color: red[500] }} onClick={() => { changeColor1() }} />}
                <Typography variant="body2">
                    <div>
                        <p>                      
                        
                             {isExpanded ? longText: w}
                        </p>
                        
                        <button onClick={() => setExpanded(!isExpanded)}>
                            {isExpanded ? "less" : "more"}
                           
                        </button>
                    </div>                   
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => setOpen(true)}>                    
                    <EditIcon /></Button>
                    {open && <FormDialogPost openFunc={onClose} text={longText} ref={dialogRef} page={"edit"} id={props.id}/>}
                <Button size="small" onClick={() => DeleteItem(props)}><DeleteIcon /></Button>
            </CardActions>

        </Card>
    );
}