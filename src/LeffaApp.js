import React from 'react';
import './App.css';
/*import Leffat from './components/Leffat';*/
/*import LeffaLista from './components/LeffaLista';*/
import LeffaListaMUI from './components/LeffaListaMUI';
import LeffaLomakeMUI from './components/LeffaLomakeMUI';
import MenuMUI from './components/MenuMUI';
import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey } from "@material-ui/core/colors";
import {MuiThemeProvider} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch} from 'react-router-dom';

let theme;
theme = createMuiTheme({
    palette: {
        primary: {main: grey[500],  contrastText: 'white'},
        secondary: {main: red[900],  contrastText: 'white'},
        text: {primary: red[900],  contrastText: 'white'},
        background: {
            default: '#b8bbbb'
        }
    }
});



const lef=[
    {
        id: 1,
      nimi: 'Star Wars',
      arvosteltu: '10.3.2019',
        traileri:'https://www.youtube.com/watch?v=1g3_CFmnU7k',
      ohjaaja: 'George Lucas',
      vuosi: 1977,
      arvosana: 10
},
    {
        id: 2,
      nimi: 'Pulp Fiction',
      arvosteltu: '10.3.2019',
        traileri: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
      ohjaaja: 'Quentin Tarantino',
      vuosi: 1994,
      arvosana: 10

}
];

function App() {

  return (
      <MuiThemeProvider theme={ theme }>
          <CssBaseline />
          <BrowserRouter>
          <div>
              <MenuMUI />
              <Switch>
                  <Route exact path='/' render={(props) => <LeffaListaMUI {...props} leffat={lef}/>}/>
                  <Route path='/lisaa' component={LeffaLomakeMUI} />

              </Switch>

          </div>
          </BrowserRouter>
      </MuiThemeProvider>



    );
}



export default App;
