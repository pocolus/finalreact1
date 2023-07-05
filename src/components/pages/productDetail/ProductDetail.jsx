
import { ItemCount } from "../../common/ItemCount";

const ProductDetail = ({ productSelected, cantidad, onAdd }) => {
  return (
    <>
      <div>
        <h2 style={{color:"darkred", textAlign:"center", padding: "20px"}}> {productSelected.title}</h2>
        <img src={productSelected.img} style={{position: "relative",  left: "43%"}} size="100px" width= "200px"  alt="" />
      </div>

      <ItemCount
        stock={productSelected.stock}
        initial={cantidad}
        onAdd={onAdd}
      />
    </>
  );
};

export default ProductDetail;
