import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import AttachmentIcon from '@material-ui/icons/Attachment';
import Input from '@material-ui/core/Input';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({

    formControl: {
        minWidth: 500
    }
}));


function LeffaLomakeMUI() {

    const [leffa, setValues] = useState({
        id: '',
        nimi: '',
        arvosteltu: moment(new Date()).format("YYYY-DD-MM"),
        traileri:'',
        posteri: '',
        ohjaaja: '',
        vuosi: '',
        arvosana: ''
    });
    const [viesti, setViesti] = useState('');

    const muuta = (e) => {
        setViesti('');
        setValues( {
            ...leffa, [e.target.name]: e.target.value
        });

    }

    const muutaSuurella = (e) => {
        setViesti('');
        setValues( {
            ...leffa, [e.target.name]: e.target.value.toUpperCase()
        });

    }

    const muutaKuva = (e) => {
        setViesti('');
        setValues({
                ...leffa, [e.target.name]: e.target.files[0]
            });
        console.log(e.target.files[0])

    }



    const lisaaLeffa = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nimi', leffa.nimi);
        formData.append('arvosteltu', leffa.arvosteltu);
        formData.append('posteri', leffa.posteri);
        formData.append('traileri', leffa.traileri);
        formData.append('ohjaaja', leffa.ohjaaja);
        formData.append('vuosi', leffa.vuosi);
        formData.append('arvosana', leffa.arvosana);
        axios.post('http://localhost:8080/leffa/add', formData)
            .then(response => {
                if (response.status === 200) {
                    setValues( {nimi: '', arvosteltu: new Date(), posteri: [], traileri: '', ohjaaja: '', vuosi:'', arvosana:'' } );
                    setViesti('Lisättiin');
                } else {
                    setViesti('Lisäys ei onnistunut');
                }
            })
    }
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const tyhjenna = (e) => {
        e.preventDefault();
        setValues(
            {
                id: '',
                nimi: '',
                arvosteltu: moment(new Date()).format("YYYY-DD-MM"),
                posteri: '',
                traileri:'',
                ohjaaja: '',
                vuosi: '',
                arvosana: ''

            })

    }
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    let kuvaNimi='';
    if (leffa.posteri !== null){
        kuvaNimi = leffa.posteri.name;
    }

    return (
        <Grid container justify="center">
    <Paper style={{fullWidth: true, marginTop: 200}}>
        <form style={{width: 500}} >
            <TextField label='Nimi' name='nimi' id='nimi' value={leffa.nimi} margin='normal' required fullWidth='true' onChange={ e => muutaSuurella(e) } />

            <TextField label='Trailerin Youtube-linkki' name='traileri' id='traileri' value={leffa.traileri} margin='normal' required fullWidth='true' onChange={ e => muuta(e) } />

            <TextField label='Ohjaaja' name='ohjaaja' id='ohjaaja' value={leffa.ohjaaja} margin='normal' required fullWidth='true' onChange={ e => muuta(e) } />

            <TextField label='Vuosi' name='vuosi' id='vuosi' value={leffa.vuosi} margin='normal' required fullWidth='true' onChange={ e => muuta(e) } />

            <Input accept='image/*' name='posteri' id='poster' type='file' style={{display: 'none'}} onChange={muutaKuva}/>
            <InputLabel htmlFor='poster'>
                Kuva
                <Button component='span' color='primary'><AttachmentIcon /></Button>
                { kuvaNimi }
            </InputLabel>

        <FormControl className={classes.formControl}>
            <InputLabel htmlFor='arvio'>Arvosana</InputLabel>
            <Select
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={ leffa.arvosana}
                onChange={ (e) => muuta(e)}
                inputProps={{
                    name: 'arvosana',
                    id: 'arvio'
                }}>
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1/10</MenuItem>
                <MenuItem value={2}>2/10</MenuItem>
                <MenuItem value={3}>3/10</MenuItem>
                <MenuItem value={4}>4/10</MenuItem>
                <MenuItem value={5}>5/10</MenuItem>
                <MenuItem value={6}>6/10</MenuItem>
                <MenuItem value={7}>7/10</MenuItem>
                <MenuItem value={8}>8/10</MenuItem>
                <MenuItem value={9}>9/10</MenuItem>
                <MenuItem value={10}>10/10</MenuItem>
            </Select>

        </FormControl>
            <br />
            <br />


            <Button variant='contained' color='primary' style={{ marginRight: 50 }} onClick={e => lisaaLeffa(e)}><CreateIcon />Lisää</Button>
            <Button variant='contained' color='secondary' onClick={e => tyhjenna(e)}><ClearIcon />Tyhjennä</Button>

        </form>
        <Typography>{ viesti }</Typography>
    </Paper>
        </Grid>


    );
}

export default LeffaLomakeMUI;