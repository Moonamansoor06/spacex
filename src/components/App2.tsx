import React from 'react'
import Rocket from './../images/anim-rock.gif'
import SpaceX from './../images/spacex-logo.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    display:'block',
    width: '500px',
    height:'550px'
  },
  bullet: {

    
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
 
  root2: {
    flexGrow: 1,
  },
  paper: {
    
  /*   maxWidth: 500, */
  },
 image: {
    width: '1320px',
    height: '250px',
  },
  img: {
    width: '660px',
    height:'250px',
    display: 'in-line',

  }, 
 
}))

export default function App2() {
  const classes = useStyles();


  return (
    <div /* className={ classes.root} */>
    <Paper className={classes.paper}>
      <Grid container direction='column' alignContent='stretch' 
      alignItems='stretch' spacing={4} className="root" 
      style={{  display:"flex", background:'#091128'}}>
    
        <Grid item spacing={4} alignContent='stretch' alignItems='stretch'/*  style={{width:'500px',margin:'20px 10px' }} */>
          <ButtonBase className={classes.image}>
         <img className={classes.img} alt="complex" src={SpaceX} />
            <img className={classes.img} alt="complex" src={Rocket} />
           

         </ButtonBase> 
        </Grid>
        <Grid item xs={12} spacing={4}  /* style={{width:'550px',margin:'20px 10px' }} */>

    <Card /* className={classes.root2} */ variant="outlined">
      <CardContent>
          
        <Typography className={classes.title} color="primary" gutterBottom>
          SpaceX 
        </Typography>
       
        <Typography variant="subtitle1" color="primary" component="p">
        Space Exploration Technologies Corp. is an American 
            aerospace manufacturer and space transportation services 
            company headquartered in Hawthorne, California. 
            It was founded in 2002 by Elon Musk with the goal of 
            reducing space transportation costs to enable the colonization 
            of Mars.
          
          
  
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    </Grid>
    </Grid>
  </Paper>
    </div>

  );
}
