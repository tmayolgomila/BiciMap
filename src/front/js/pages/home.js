import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/maps.css";
import { Link } from "react-router-dom";
import App from "../component/App";
import { CloudinaryContext } from "cloudinary-react";
import { Image } from "cloudinary-react";


export const Home = () => {

const [loading,setLoading] = useState(false)
const [image, setImage] = useState("")

const uploadImage= async e =>{
  const files = e.target.files
  const data = new FormData()
  data.append("file", files[0])
  data.append("upload_preset", "BiciMap")
  setLoading(true)

  const res = await fetch("https://api.cloudinary.com/v1_1/naxinga/image/upload",
  {
    method: "POST",
    body:data
  })

  const file = await res.json()
  console.log(file)
  setImage(file.secure_url)
  setLoading(false)
  }

return(
  
  <div className="container">
       <hr id="hrInicio"></hr>     
  <Link to="signup"><button id="botonSignUp">SignUp</button></Link>
  
  <Link to="login"><button id="botonLogin">Login</button></Link>
    <App />
  
  <div>
    <h1> Sube la imagen</h1>
    <input type="file" name="file" onChange={uploadImage}/>

    {
      loading?(<h3>Loading...</h3>):(<img src={image}/>)
    }
  </div>


  </div>
);
}



