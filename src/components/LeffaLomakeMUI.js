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
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({

    formControl: {
        minWidth: 500
    }
}));


function LeffaLomakeMUI() {

    const [leffa, setValues] = useState({
        id: '',
        nimi: '',
        arvosteltu: new Date(),
        traileri:'',
        ohjaaja: '',
        vuosi: '',
        arvosana: ''
    });

    const muuta = (e) => {
        setValues( {
            ...leffa, [e.target.name]: e.target.value
        });

    }

    const muutaSuurella = (e) => {
        setValues( {
            ...leffa, [e.target.name]: e.target.value.toUpperCase()
        });

    }





    const muutaPaiva = (date) => {
        setValues(
            {
                ...leffa,
                paiva: date
            });
    }

    const lisaaLeffa = (e) => {
        e.preventDefault();

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
                arvosteltu: new Date(),
                traileri:'',
                ohjaaja: '',
                vuosi: '',
                arvosana: ''

            })

    }
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    return (
        <Grid container justify="center">
    <Card style={{fullWidth: true, marginTop: 200}}>
        <form style={{width: 500}} >
            <TextField label='Nimi' name='nimi' id='nimi' value={leffa.nimi} margin='normal' required fullWidth='true' onChange={ e => muutaSuurella(e) } />

            <FormControl name='arvosteltu' type='hidden'  required value={leffa.arvosteltu} onChange={muutaPaiva} format='dd.MM.yyyy' />

            <TextField label='Trailerin Youtube-linkki' name='traileri' id='traileri' value={leffa.traileri} margin='normal' required fullWidth='true' onChange={ e => muuta(e) } />

            <TextField label='Ohjaaja' name='ohjaaja' id='ohjaaja' value={leffa.ohjaaja} margin='normal' required fullWidth='true' onChange={ e => muuta(e) } />

            <TextField label='Vuosi' name='vuosi' id='vuosi' value={leffa.vuosi} margin='normal' required fullWidth='true' onChange={ e => muuta(e) } />
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
    </Card>
        </Grid>


    );
}

export default LeffaLomakeMUI;