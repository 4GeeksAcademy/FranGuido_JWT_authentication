const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			signupData: [],
			loginData: [],
			privateData: [],
			email: null,
			password: null,
			token: null,
			
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

			// FETCH USER SIGNUP DATA FROM /API/SIGNUP ENDPOINT
			fetchSignup: () => {
				fetch('https://humble-chainsaw-wppr4g44gg42596v-3000.app.github.dev/api/signup', {
					method: "POST",
					headers : { "Content-Type": "application/json" },
					body : JSON.stringify({ email, password }) 
				})
				.then(response => response.json())
				.then(data => {setStore({signupData : data.response})})
				.catch(err => err)
			},


			// FETCH USER LOGIN DATA FROM /API/LOGIN ENDPOINT
			fetchLogin: () => {
				fetch('https://humble-chainsaw-wppr4g44gg42596v-3000.app.github.dev/api/login', {
					method: "POST",
					headers : { "Content-Type": "application/json" },
					body : JSON.stringify({ email, password })
				})
				.then(response => response.json())
				.then(data => {setStore({loginData : data.response})})
				.catch(err => err)

				const token = localStorage.getItem('jwt-token')
				localStorage.setItem("jwt-token", data.token)
			},

			// FETCH USER PRIVATE DATA FROM /API/PRIVATE ENDPOINT
			fetchPrivate: () => {
				fetch('https://humble-chainsaw-wppr4g44gg42596v-3000.app.github.dev/api/private', {
					method: "GET",
					headers: {
						"Content-Type": "application/json" ,
						"Authorization" : "Bearer" + token,
					}
				}).then(response => response.json())
				.then(data => {setStore({privateData : data.response})})
				.catch(err => err)
			},

			
			// LOGOUT
			logout: () => {
				sessionStorage.removeItem("token");
				console.log("Logging out");
				setStore({ token: null });
			},

			// HANDLE DATA CHANGE IN EMAIL AND PASSWORD
			handleEmail: e => {
				setStore({[e.target.email] : e.target.value})
			},

			handlePassword: e => {
				setStore({[e.target.password] : e.target.value})
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
