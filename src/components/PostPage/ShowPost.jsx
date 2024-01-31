import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';
import FormDialog from '../DialogCards';
import { useRef } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { red } from '@mui/material/colors';
import { useState } from 'react';
import { Icon } from "@mui/material";


export default function BasicCard1(props) {

    const dialogRef = useRef(null);

    const [open, setOpen] = React.useState(false);

    const [favoriteIconColor, setFavoriteIconColor] = React.useState(false);
    const [favoriteIconBasic, setFavoriteIconBasic] = React.useState(true);

    const [isExpanded, setExpanded] = useState(false);   

    const [longText, setLongText] = React.useState(props.text);

    const longText1=props.text

    const w=longText1.slice(0, 5);
    


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
                        <p                          
                        >
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
                    {open && <FormDialog text={longText} ref={dialogRef} page={'addPost'} />}
                    <EditIcon /></Button>
                <Button size="small"><DeleteIcon /></Button>
            </CardActions>


        </Card>
    );
}