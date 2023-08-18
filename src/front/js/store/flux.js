const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {


			// USER LOGIN
			login: async (email, password) => {
				const resp = await fetch(`https://humble-chainsaw-wppr4g44gg42596v-3001.app.github.dev/api/login`, {
					method : "POST", 
					headers : { "Content-Type": "application/json" },
					body : JSON.stringify({ email, password }) 
				})
				if (!resp.ok) throw Error("Ooops! There's an issue with the login request.")
				
				if (resp.status === 401) { //Unauthorized response status code (user lacks validation)
					throw("Invalid credentials")
				}
				else if(resp.status === 400){
					throw("Invalid email or password")
				}
				const data = await resp.json()
				// Save token in localStorage
				localStorage.setItem("jwt-token", data.token)

				return data
			},

			// FETCH INFO FROM "PRIVATE" ENDPOINT
			getPrivateInfo: async (email, password) => {
				// Get token from localStorage
				const token = localStorage.getItem('jwt-token')

				const resp = fetch(`https://humble-chainsaw-wppr4g44gg42596v-3001.app.github.dev/api/login`, {
					method : "GET",
					headers : {
						"Content-Type": "application/json" ,
						"Authorization" : "Bearer" + token,
					}
				})
				
				if (!resp.ok) throw Error("Ooops! There's an issue with the login request.")

				else if (resp.status === 403) { // Forbidden, no authorization to access
					throw Error("Missing or invalid token")
				}

				const data = await resp.json()
				console.log("This is the data you requested", data);
				localStorage.setItem("jwt-token", data.token)

				return data
			},



			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
