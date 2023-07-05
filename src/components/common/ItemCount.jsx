import { useCount } from "../hooks/UseCount";

export const ItemCount = ({ stock, initial=1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <div style={{position: "relative",  left: "45%", color:"darkred", padding:"10px"}} className="count--container">
        <button disabled={stock < 1 ? true : false} onClick={decrement}>-</button>
        <span>{count}</span>
        <button disabled={stock < 1 ? true : false}  onClick={increment}>+</button>

        <button onClick={() => onAdd(count)}style={{position: "relative", color:"darkred", left: "0%", padding:"5px"}} >Agregar al carrito</button>
      </div>
    </>
  );
};
