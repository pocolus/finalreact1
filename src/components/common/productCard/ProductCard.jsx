
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";



const ProductCard = ({ elemento }) => {
  return (
    <Card sx={{ width: 180 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={elemento.img}
        title={elemento.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" color="darkred" component="div" textAlign={"center"}>
          {elemento.title}
        </Typography>
        <Typography variant="h7" color="black" textAlign={"center"}>
        {elemento.description} 
        </Typography>
        <Typography variant="h6" color="darkred" textAlign={"center"}>
        ${elemento.price} us
        </Typography>
        
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/itemDetail/${elemento.id}`}
        >

        <Button 
        variant="contained"
      
        >
          Ver 
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

