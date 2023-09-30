// this file will no render anything 
// this file helps with the functionality of context 

import { createContext } from "react"



export const defaultConnectionData = {
	url: "https://pokeapi.co/api/v2/pokemon/"
}

// create data in context to use trhou the app 
const ConnectionContext = createContext(defaultConnectionData);

export default ConnectionContext;