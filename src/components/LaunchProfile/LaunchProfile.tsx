import * as React from 'react';
import { LaunchProfileQuery } from '../../generated/graphql';
import './styles.css';
import Paper from '@material-ui/core/Paper';
import {useHistory} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


interface Props {
  data: LaunchProfileQuery;
}

const className = 'LaunchProfile';

const LaunchProfile: React.FC<Props> = ({ data }) => {
  const history = useHistory();

   

  if (!data.launch) {
    return <div>No launch available</div>;
  }

  return (
  
    <Paper color="secondary" 
    style={{ textAlign: "center"}}>
   
    <div className={className}>
      <div color="secondary"  className={`${className}__status`}>
        <Typography color='primary'>
        <span>Flight {data.launch.flight_number}: </span>
        {data.launch.launch_success ? (
          <span className={`${className}__success`}>Success</span>
        ) : (
          <span className={`${className}__failed`}>Failed</span>
        )}
            </Typography>
      </div>
      <Typography color='primary'>
      <h1 color="secondary" className={`${className}__title`}>
        {data.launch.mission_name}
        {data.launch.rocket &&
          ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
      </h1>
      <p color="secondary" className={`${className}__description`}>{data.launch.details}</p>
      </Typography>
      {!!data.launch.links && !!data.launch.links.flickr_images && (
        <div className={`${className}__image-list`}>
          {data.launch.links.flickr_images.map(image =>
            image ? <img src={image} alt= "Launch Image..." className={`${className}__image`} key={image} /> : null,
          )}
      
        </div>
      )} 
      
    </div>
   
  </Paper>
  );
};

export default LaunchProfile;