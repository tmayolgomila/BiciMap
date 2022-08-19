const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {


			
		},
		
		actions: {
			signup: async (nombre, apellidos, email, telefono, password) => {
				try{
					const resp = await fetch(process.env.BACKEND_URL + "/signup", {
					  method: "POST",
					  headers: { "Content-Type": "application/json" },
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
				  if (resp.status === 401) {
					throw "Invalid credentials";
				  } else if (resp.status === 400) {
					throw "Invalid email or password format";
				  }
				  if (!resp.ok) throw Error("There was a problem in the login request");
				  navigate("/private");
				  const data = await resp.json();
				  setStore({ email: email });
				  setStore({ auth: true });
				  localStorage.setItem("jwt-token", email);
				  setStore({ token: email });
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
			  addbike: async (tipo, foto, precio, año, modificaciones, talla, material, observaciones, electrica) => {
				try {
				  const resp = await fetch(process.env.BACKEND_URL + "/altasvender", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({tipo, foto, precio, año, modificaciones, talla, material, observaciones, electrica}),
				  });
				  if (resp.status === 401) {
					throw "Invalid credentials";
				  } else if (resp.status === 400) {
					throw "Invalid format";
				  }
				  if (!resp.ok) throw Error("There was a problem in the login request");
				  const data = await resp.json();
				  setStore({ tipo: tipo });
				  setStore({ foto: foto });
				  setStore({ precio: precio });
				  setStore({ año: año });
				  setStore({ modificaciones: modificaciones });
				  setStore({ talla: talla });
				  setStore({ material: material });
				  setStore({ observaciones: observaciones });
				  setStore({ electrica: electrica });
				  setStore({ auth: true });
				  return data;
				} catch (err) {
				  alert(err);
				}
			  }


			
		}
	};
};

export default getState;
