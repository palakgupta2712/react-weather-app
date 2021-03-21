import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding:30
  },
  media: {
    height: 100,
    width:100
  },
  
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const unixTimestamp = props.cityData.dt
  const milliseconds = unixTimestamp * 1000 // 1575909015000
  const dateObject = new Date(milliseconds)
  console.log(dateObject.toLocaleString("en-US", {weekday: "long"})) // Monday
  const month = dateObject.toLocaleString("en-US", {month: "long"})// December
  const day = dateObject.toLocaleString("en-US", {day: "numeric"}) // 9
  const  year = dateObject.toLocaleString("en-US", {year: "numeric"}) //2019
  // const img_url = "http://openweathermap.org/img/wn/" + props.weather[0].icon + "@2x.png"
  return (
    
    <div align='center' className="dataCard">
    <Card gutterTop className={classes.root} >
      <CardActionArea>
      <Typography gutterBottom variant="body2" component="h2">
            {month} {day}, {year}
          </Typography>
      <Typography gutterBottom variant="h4" component="h2">
            {props.cityData.name}
      </Typography>
     {/* <CardMedia
          className={classes.media}
          image={img_url}
          title="Contemplative Reptile"
        />  */}
      
        <CardContent >
          <Typography gutterBottom variant="h3" component="h2">
            {props.data.temp} <span>&#176;</span>C
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.data.temp_max} <span>&#176;</span> / {props.data.temp_min} <span>&#176;</span>       
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            {/* {props.weather[0].main} */}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
