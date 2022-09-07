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

  const createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: store.precioCompra.precio,
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
    <h2>A pagar {store.precioCompra.precio} $</h2>
    <select className="selectorPago" value={opcion} onChange={handleCambio}>
      <option value="0.3">Alquila</option>
      <option value={store.precioCompra.precio}>Compra(Introducir cantidad acordada)</option>
    </select>
    {opcion ==="2000" && (<input type="text" onChange={handleChange} value={store.precioCompra.precio}  size={32} ></input>)}
    <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </>
  )
}