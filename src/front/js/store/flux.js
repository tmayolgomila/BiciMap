const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			auth:false,
			tipo:null,
			foto:null,
			precio:null,
			año:null,
			modificaciones:null,
			talla:null,
			material:null,
			fechalimite:null,
			observaciones:null,
			nombre: null,
			apellidos: null,
			email: null,
			telefono: null,
			bikes: []

		},
		
		actions: {
			signup: async (nombre, apellidos, email, telefono, password) => {
				try{
					const resp = await fetch(process.env.BACKEND_URL + "/signup", {
					  method: "POST",
					  headers: { "Content-Type": "application/json" , 'Access-Control-Allow-Origin': '*' },
					  body: JSON.stringify({nombre, apellidos, email, telefono, password }),
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
					return data;}
					catch(err){
						alert(err)
					}
				
			  },

			login: async (email, password, navigate) => {
				try {
				  const resp = await fetch(process.env.BACKEND_URL + "/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, password }),
				  });
				  		 
				  //throw Error("There was a problem in the login request");
				  //navigate("/private");
				  const data = await resp.json();
				  setStore({ email: email });
				  setStore({ auth: true });
				  localStorage.setItem("jwt-token", email);
				  setStore({ token: email });
				  if (resp.status === 401 || resp.status === 400 ) {
					setStore({ auth: false });
				  }	
				  return data;
				} catch (err) {
				  alert(err);
				}
			  },
			  logout: () => {
				localStorage.removeItem("token");
				setStore({ auth: false });
				setStore({ email: null });
			  },
			  addbike: async (tipo, foto, precio, año, modificaciones, talla, material, observaciones) => {
				try {
				  const resp = await fetch(process.env.BACKEND_URL + "/altasvender", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({tipo, foto, precio, año, modificaciones, talla, material, observaciones}),
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
				  alert(err);
				}
			  },
			  rentabike: async (tipo, foto, talla, material, observaciones, fechalimite) => {
				try {
				  const resp = await fetch(process.env.BACKEND_URL + "/altasalquiler", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({tipo, foto, talla, material, observaciones, fechalimite}),
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
				  setStore({fechalimite: fechalimite})
				  setStore({ auth: true });
				  return data;
				} catch (err) {
				  alert(err);
				}
			  },
			  getBikes: async() => {
				try{
					const resp = await fetch(process.env.BACKEND_URL + "/bikes", {
					  method: "GET", 
					})
				
					const data = await resp.json(); 
					setStore({ bikes : data.results})
					return null;

				  } catch(error) {
					  console.log(error);
				  }
			},

			




			
		}
	};
	
};

export default getState;
