// // // this file will no render anything 
// // // this file helps with the functionality of context 
import { createContext } from "react"



export const defaultConnectionData = {
	url: "https://pokeapi.co/api/v2/pokemon/"
}

export const ConnectionContext = createContext(defaultConnectionData);

export default function ConnectionProvider(props){


	return(
		<ConnectionContext.Provider value={defaultConnectionData}>
			{props.children}
		</ConnectionContext.Provider>
	)
}