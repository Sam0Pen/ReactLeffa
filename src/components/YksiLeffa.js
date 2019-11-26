import React, {Component } from "react";
import { Link } from 'react-router-dom';
import {CardHeader, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import StarIcon from "@material-ui/icons/Star";
import MovieIcon from "@material-ui/icons/Movie";
import IconButton from "@material-ui/core/IconButton";



class YksiLeffa extends Component{
    constructor(props){
        super(props);
        this.state= {
            item: props.item
        }
    }
    render(){
        return(
            <Grid container spacing={3} styles={{display: "flex", flexDirection: "row"}}>
                {

                    <Grid item key={this.state.item.id} >

                        <Card style={{maxWidth: 600, minWidth: 600}} >
                            <CardHeader title={this.state.item.nimi.toUpperCase()} subheader={this.state.item.arvosteltu}/>
                            <CardMedia image={ 'http://localhost:8080/download/' + this.state.item.posteri } title='posteri' style={ {height:600} }/>
                            <CardContent>
                                <Typography><StarIcon />{this.state.item.arvosana}</Typography>
                                <IconButton component={Link} to={`/nayta/${this.state.item.id}`}><MovieIcon /></IconButton>
                            </CardContent>
                        </Card>
                    </Grid>

                }
            </Grid>
        )
    }

}
export default YksiLeffa;