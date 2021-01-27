import { ADD_IN_TABLE } from "./actions.js";
import { DELETE_IN_TABLE } from "./actions.js";

const defaultState = [
	{
		datePay : '2021-01-01T10:00',
		kioskName : 'Киоск № 11',
		chequeType  : 0,
		payStatus : "Оплачено",
		paySum : 9000,
		sum : 9000,
		quantityPositions : 2,
		namePosicions : "Морс клюква из вологодской области"
	},
	{
		datePay : '2020-02-26T18:24',
		kioskName : 'Киоск № 11',
		chequeType  : 0,
		payStatus : "Оплачено",
		paySum : 4500,
		sum : 4500,
		quantityPositions : 1,
		namePosicions : "Морс клюква из вологодской области"
	}
]

export const addReducer = (state = defaultState, action) => {
	switch (action.type){
		case ADD_IN_TABLE:
			return [ ...state, action.payload ]
		case DELETE_IN_TABLE:
			return state.filter((_,index) => index !== action.payload)
		default:
			return state;
	}
}
