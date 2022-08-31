import React from "react";

function Subir(){

    function handleSave(event){
          event.preventDefault();
            const response = fetch(process.env.BACKEND_URL + "/image",{
              method:'POST',
              mode:"cors"
              ,headers:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify()
            }
            )
              .then((response) => response.json())
              .then((result) => {
                console.log('Success:', result);
              })
              .catch((error) => {
                console.error('Error:', error);
              }) 
        }
    return(
        <div className="container">
            <h1>Picture Page</h1>
            <form method="post" onSubmit={handleSave} encType="multipart/form-data">
                
                
                
                <div className = "file-field input-field">
                    <div className = "btn">
                        <span>Browse</span>
                        <input name="pic" id="pic" type="file" />
                    </div>
                    
                </div>   
                <input type="submit" value="Save" className="waves-effect waves-light btn"></input>
            </form>
        </div>
        
    );
};

export default Subir;