const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      auth: false,
      tipo: null,
      foto: null,
      precio: null,
      año: null,
      modificaciones: null,
      talla: null,
      material: null,
      fechalimite: null,
      observaciones: null,
      nombre: null,
      apellidos: null,
      email: null,
      telefono: null,
      idestacion: null,
      precioCompra: "",
      token: "empty",

      bikes: [],
      estaciones: [],
    },

    actions: {
      signup: async (nombre, apellidos, email, telefono, password) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              nombre,
              apellidos,
              email,
              telefono,
              password,
            }),
          });

          if (!resp.ok) throw Error("There was a problem in the login request");

          if (resp.status === 401) {
            throw "Invalid credentials";
          } else if (resp.status === 400) {
            throw "Invalid format";
          }
          const data = await resp.json();
          setStore({ nombre: nombre });
          setStore({ apellidos: apellidos });
          setStore({ email: email });
          setStore({ telefono: telefono });
          setStore({ password: password });

          localStorage.setItem("jwt-token", email);
          setStore({ token: email });
          return data;
        } catch (err) {
          alert(err);
        }
      },

      login: async (email, password) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });

          const data = await resp.json();
          setStore({ email: email });
          setStore({ auth: true });
          localStorage.setItem("jwt-token", email);
          setStore({ token: email });
          if (resp.status > 399 && resp.status < 600) {
            setStore({ auth: false });
            localStorage.removeItem("jwt-token");
          }
          return data;
        } catch (err) {
          alert(err);
        }
      },
      logout: () => {
        localStorage.removeItem("jwt-token");
        setStore({ auth: false });
        setStore({ email: null });
      },
      addbike: async (
        tipo,
        foto,
        precio,
        año,
        modificaciones,
        talla,
        material,
        observaciones,
        email,
        idestacion
      ) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/altasvender", {
            method: "POST",
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({
              tipo,
              foto,
              precio,
              año,
              modificaciones,
              talla,
              material,
              observaciones,
              email,
              idestacion,
            }),
          });
          if (resp.status === 401) {
            throw "Invalid credentials";
          } else if (resp.status === 400) {
            throw "Invalid format";
          }
          if (!resp.ok) throw Error("There was a problem in the request");
          const data = await resp.json();
          setStore({ tipo: tipo });
          setStore({ foto: foto });
          setStore({ precio: precio });
          setStore({ año: año });
          setStore({ modificaciones: modificaciones });
          setStore({ talla: talla });
          setStore({ material: material });
          setStore({ observaciones: observaciones });
          setStore({ auth: true });
          return data;
        } catch (err) {
          console.log(err)
        }
      },
      rentabike: async (
        tipo,
        foto,
        talla,
        material,
        observaciones,
        fechalimite,
        email,
        idestacion
      ) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/altasalquiler", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              tipo,
              foto,
              talla,
              material,
              observaciones,
              fechalimite,
              email,
              idestacion,
            }),
          });
          if (resp.status === 401) {
            throw "Invalid credentials";
          } else if (resp.status === 400) {
            throw "Invalid format";
          }
          if (!resp.ok) throw Error("There was a problem in the request");
          const data = await resp.json();
          setStore({ tipo: tipo });
          setStore({ foto: foto });
          setStore({ talla: talla });
          setStore({ material: material });
          setStore({ observaciones: observaciones });
          setStore({ fechalimite: fechalimite });
          setStore({ auth: true });
          return data;
        } catch (err) {
          console.log(err)
        }
      },
      getBikes: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/bikes", {
            method: "GET",
          });

          const data = await resp.json();
          setStore({ bikes: data.results });

          return null;
        } catch (error) {
          console.log(error);
        }
      },
      getEstaciones: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/estaciones", {
            method: "GET",
          });

          const data = await resp.json();
          setStore({ estaciones: data.results });

          return null;
        } catch (error) {
          console.log(error);
        }
      },
      deleteBikes: async (id) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/user/" + id, {
            method: "DELETE",
          });
        
         const store = getStore();
         store.bikes.splice(id, 1);
         setStore({ bikes: [...store.bikes] });
         return null; 
        } catch (error) {
          console.log(error);
        }
      },

      editUser: async (id,tipo, talla, material, año, modificaciones) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/modbike/" + id, {
            method: "PUT",
            body: JSON.stringify({id, tipo, talla, material, año, modificaciones}),
            headers: {
              "Content-Type": "application/json",
            },
          })
		  if (resp.status === 401) {
            throw "Invalid credentials";
          } else if (resp.status === 400) {
            throw "Invalid format";
          }
          if (!resp.ok) throw Error("There was a problem in the request");
          const data = await resp.json();
          if (tipo != "")
          setStore({ tipo: tipo });
		      setStore({ talla: talla });
		      setStore({ material: material });
          setStore({ año: año });
          setStore({ modificaciones: modificaciones });
          
          return data;
        } catch (err) {
          console.error(err);
        }
      },
      pagos: async (id) =>{
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/pagos/" + id, {
            method: "GET",
          });
        
          if (resp.status > 399 && resp.status < 600){
            throw "Precio mal insertado"
          }

          const data = await resp.json(); 
          setStore({precioCompra: data });

        } catch (err) {
          console.error(err);
        }
      },
      
    },
  };
};

export default getState;
