const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			auth: false,
			token: "bienvenido",
			email: null,
			
		},
		actions: {
			signup: async (nombre, apellidos, email, dni,telefono, password) => {
				try{
					const resp = await fetch(process.env.BACKEND_URL + "/signup", {
					  method: "POST",
					  headers: { "Content-Type": "application/json" },
					  body: JSON.stringify({nombre, apellidos, email, dni,telefono, password }),
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
					setStore({ dni: dni });
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
		}
	};
};

export default getState;
