import * as React from "react";
import LaunchList from "./components/LaunchList";
import LaunchProfile from "./components/LaunchProfile";
import { Grid } from "@material-ui/core";
import { GridList } from '@material-ui/core';

import "./App.css";
 
//const theme = {};
const App = () => {
  const [id, setId] = React.useState(42);

  const handleIdChange = React.useCallback((newId) => {
    setId(newId);
  }, []);

  return (
    
    <Grid container  spacing={4} className="root" style={{  marginTop:'20px',display:"flex", background:'#05102F'}}>
    
      <GridList color="secondary" cols={1} spacing={4} style={{width:'500px' ,margin:'20px 10px' }}> 
      <LaunchList handleIdChange={handleIdChange} />
      </GridList>
      <Grid item spacing={4}  style={{width:'800px',margin:'20px 10px' }}>

      <LaunchProfile id={id} />
      </Grid>
  
    </Grid>
  );
};

export default App;
