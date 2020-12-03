import React from "react";
import { LaunchListQuery } from "../../generated/graphql";
import Typography from "@material-ui/core/Typography";
//import "./styles.css";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from "@material-ui/core/Card";



export interface OwnProps {
  handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps {
  data: LaunchListQuery;
}

function ListItemLink() {
  return <ListItem button component="a"  />;
}

const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => (
  
  <div style={{}}>
  
    <List component="nav"style={{width: '100%',
              maxWidth: 360, height:"150px" 
              }}  >
      {!!data.launches &&
        data.launches.map(
          (launched, i) =>
            !!launched && (
             
              <ListItem  button style={{width: '100%',
              maxWidth: '500px'
              }} 
                key={i}
                onClick={() => handleIdChange(launched.flight_number!)}
              >
                <Card style={{textAlign:'center',minWidth: 500,display: 'inline-block',
    margin: '0 2px', 
    transform: 'scale(0.8)'}}>
                <Typography color="primary"  variant ='h4' gutterBottom>
                  Mission Name: {launched.mission_name}
                 </Typography>
                              
                 <Typography color="primary" variant ='body1'>
                   Lunch Year: {launched.launch_year}
                 </Typography >
                 </Card>
                 
                    
              </ListItem>
            )
        )}
    </List>
    
  </div>
);
export default LaunchList;
