import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
import StarIcon from '@material-ui/icons/Star';





function LeffaListaMUI(props) {
    return (
        <Grid container flexDirection="row"   >
            {
                props.leffat.map(leffa =>{
                        return (
                            <Grid item key={leffa.id}>
                                <Card style={ { maxWidth: 700, minWidth: 300, marginTop: 100} }>
                                    <CardHeader title={ leffa.nimi.toUpperCase()} subheader={ leffa.arvosteltu} />
                                    <ReactPlayer url={leffa.traileri} title='Traileri' size='auto' />
                                    <CardContent>
                                        <Typography>{ leffa.ohjaaja }</Typography>
                                        <Typography>{ leffa.vuosi }</Typography>
                                        <Typography style={{fontSize: 30}}>{ leffa.arvosana } <StarIcon /></Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    }

                )
            }
        </Grid>

    );

}

export default LeffaListaMUI;