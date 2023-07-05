import { Button, TextField } from "@mui/material";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div style={{ paddingTop: "40px"}}>
      <form style={{padding: "25px"}} onSubmit={handleSubmit}>
        <h1 style={{padding:"10px", textAlign:"center", color:"darkred"}} >Coloca Tus Datos Personales</h1>
        <TextField style={{display: "flex", width: "50%", padding:"45px"}}
          label="Name" 
          variant="outlined"
          name="name"
          onChange={handleChange}
          helperText={errors.name}
          error={errors.name ? true : false}
        />
        <TextField  style={{display: "flex", width: "50%", padding:"45px"}}
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          helperText={errors.email}
          error={errors.email ? true : false}
        />
        <TextField  style={{display: "flex", width: "50%", padding:"45px"}}
          label="Phone"
          variant="outlined"
          name="phone"
          onChange={handleChange}
          helperText={errors.phone}
          error={errors.phone ? true : false}
        />
        <Button style={{ left:"15%", width: "20%", padding:"15px", backgroundColor:"darkred", color:"black", fontWeight:"bold"}}  variant="outlined" type="submit">
        Comprar
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
