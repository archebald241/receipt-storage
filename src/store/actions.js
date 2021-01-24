export const ADD_IN_TABLE = 'ADD_IN_TABLE';
export const DELETE_IN_TABLE = 'DELETE_IN_TABLE';

export const setTableText = line => ({
	type: ADD_IN_TABLE,
	payload: line
});

export const delTableText = num => ({
	type: DELETE_IN_TABLE,
	payload: num
});
