import { ADD_IN_TABLE } from "./actions.js";
import { DELETE_IN_TABLE } from "./actions.js";

const defaultState = [
	{
		datePay : '2021-01-01',
		kioskName : 'Киоск № 11',
		payType : 0,
		payStatus : 0,
		sum : 9000,
		paySum : 9000,
		quantityPositions : 2,
		namePosicions : "Морс клюква из вологодской области"
	}
]

export const addReducer = (state = defaultState, action) => {
	switch (action.type){
		case ADD_IN_TABLE:
			return [ ...state, action.payload ]
		case DELETE_IN_TABLE:
			return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]
		default:
			return state;
	}
}
