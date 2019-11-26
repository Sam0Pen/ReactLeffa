import React, {Component } from "react";
import { Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';
import Paper from "@material-ui/core/Paper";
import ReactPlayer from "react-player";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";




class LeffaDetail extends Component{
    constructor(props){
        super(props);
        this.state= {
           details:''
        }
    }
    componentWillMount(){
        this.getLeffa();
    }
    getLeffa(){
        let leffaId = this.props.match.params.id;
        axios.get(`http://localhost:8080/leffa/one/${leffaId}`)
            .then(response => {
                this.setState({details: response.data}, () =>{
                    console.log(this.state);
                })
            })

    }

    onDelete(){
        let leffaId = this.state.details.id;
        axios.get(`http://localhost:8080/leffa/delete/${leffaId}`)
        .then(response =>{
           if (response.status === 200) {
               this.props.history.push('/')

           }
        }).catch(err => console.log(err));
    }
    render(){
        return(
            <div>
                <Grid container justify="center">
<Paper >
    <Typography variant="h2">
        {this.state.details.nimi}
    </Typography>
<br />
    <ReactPlayer url={this.state.details.traileri}/>
    <Typography>Ohjaaja: {this.state.details.ohjaaja}</Typography>
    <Typography>Julkaisuvuosi: {this.state.details.vuosi}</Typography>
    <br />
    <Typography variant="h3">Arvosana: {this.state.details.arvosana}</Typography>
    <Button onClick={this.onDelete.bind(this)}><DeleteIcon /></Button>


</Paper>

                </Grid>

            </div>
        )
    }

}
export default LeffaDetail;