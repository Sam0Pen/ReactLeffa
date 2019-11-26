import React from 'react';
import './App.css';
import LeffaLomakeMUI from './components/LeffaLomakeMUI';
import MenuMUI from './components/MenuMUI';
import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey } from "@material-ui/core/colors";
import {MuiThemeProvider} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HaeLeffa from "./components/HaeLeffa";
import LeffaDetail from "./components/LeffaDetail";


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





function App() {

  return (
      <MuiThemeProvider theme={ theme }>
          <CssBaseline />
          <BrowserRouter>
          <div>
              <MenuMUI />
              <Switch>
                  <Route exact path='/'component={HaeLeffa}/>
                  <Route exact path='/lisaa' component={LeffaLomakeMUI} />
                  <Route exact path='/nayta/:id' component={LeffaDetail} />


              </Switch>

          </div>
          </BrowserRouter>
          <footer align='center'>Sami Jaanu</footer>
      </MuiThemeProvider>



    );
}



export default App;
