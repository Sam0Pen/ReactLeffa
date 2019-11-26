import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import LeffaListaMUI from "./LeffaListaMUI";



function HaeLeffa () {
    const [leffat, setLeffa] = useState([]);
    const [virhe, setVirhe] = useState('Haetaan');
    useEffect(() => {
        async function haeKaikkiLeffa() {
            try {
                const response = await fetch('http://localhost:8080/leffa/all');
                const json = await response.json();
                setLeffa(json);
                setVirhe('');
            } catch (error) {
                setLeffa([]);
                setVirhe('Tietojen haku ei onnistunut');
            }
        }

        haeKaikkiLeffa();
    }, []);

    if (virhe.length > 0) {
        return ( <Typography>{ virhe }</Typography> );
    }
    if (leffat.length > 0) {
        return ( <LeffaListaMUI leffat={ leffat } /> );
    }
    return ( <Typography>Yhtään leffaa ei ole</Typography> );

}
export default HaeLeffa;