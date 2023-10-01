
/*

*Reducer is a way to replace a state hook for something more complex 


let instructions = {
	type: 'login',
	username: 'someCoolUserName',
	password: 'Password1'
}
*/
/*
let instructions = {
	type:'setJwt',
	data: {
		jwt: 'some JWT token goes here'
	}
}
*/


export const userReducer = (previousState, instructions) => {
	let newState = {...previousState};
    // when we call the reducer with create a object 
	switch(instructions.type){
		case "setJwt":
			newState = instructions.data;
			return newState;
		case "login":
			newState = "pretend a fetch request finished and returned a JWT";
			return newState;
		case "logout":
			// newState = '';
			return {jwt: ''};
		default:
			return newState;
	}

	return newState;
}
