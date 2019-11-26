import React, {Component} from 'react';
import axios from 'axios';
import YksiLeffa from "./YksiLeffa";





class LeffaListaMUI extends Component {
    constructor(){
        super();
        this.state = {
            leffat: []
        }
    }
    componentWillMount(){
        this.getLeffat();
    }


    getLeffat(){
        axios.get('http://localhost:8080/leffa/all')
            .then(response => {
                this.setState({leffat: response.data}, () =>{
                    //console.log(this.state);
                })
            })
    }
    render(){
        const leffaOliot = this.state.leffat.map((leffa, i) => {
            return(
                <YksiLeffa key={leffa.id} item={leffa} />


            )
        })
        return(
            <div align="center" >
                    <tr>
                    {leffaOliot}
                    </tr>
            </div>

        )
    }
}





export default LeffaListaMUI;