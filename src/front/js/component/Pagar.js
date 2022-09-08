import React, {useContext, useState, useEffect} from 'react';
import { Context } from "../store/appContext";
import ReactDOM from "react-dom"
import "../../styles/pagos.css";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function Pago(){
  const { store, actions } = useContext(Context);
  const [price, setPrice] = useState(0.30);
  const [opcion, setOpcion] = useState(0.30);

  useEffect(()=> {
  
    if (opcion != "0.3"){
      setPrice(opcion);
      
    }
  }, [opcion])


  const precioFinal = () => {
    if (store.precioCompra.precio === "" || store.precioCompra.precio === null){
      return ("value: 0.3")
    } else {
      return ("value: store.precioCompra.precio")
    }
  }

  const createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            precioFinal
          },
        },
      ],
    });
  }
  const onApprove = (data, actions) => {
    return actions.order.capture(alert("Pago realizado con éxito"));
  }
  const handleChange = (e)=>{
    setPrice(e.target.value);
  }
  const handleCambio = (e)=>{
    setOpcion(e.target.value);
  }

  return(
    <>
    
    
    {store.precioCompra.precio === "" || store.precioCompra.precio === null ? <h2>A pagar 0.3 $</h2> : <h2>A pagar {store.precioCompra.precio} $</h2>}
    
    {opcion ==="2000" && (<input type="text" onChange={handleChange} value={store.precioCompra.precio}  size={32} ></input>)}
    <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </>
  )
}