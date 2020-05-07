/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import { HomeActions } from '../actions/homeActions';


export interface HomeState {
	data: string[][],
	columns: string[],
	api: { 
		flags: any,
		data: any,
	}
}

const defaultState = {
	data: [[]],
	columns: [],
	api: { 
		flags: {},
		data: {},
	}
};

function homeReducer(
	state:HomeState = defaultState,
	action:{type:HomeActions, payload:any},
) {
	switch (action.type) {
		case HomeActions.SET_TABLE:
			return {
				// return state as it is
				...state,
				// change state data
				data: { ...state.data, ...action.payload.data },
				columns: { ...state.columns, ...action.payload.columns }
			};
		case HomeActions.SET_HOME_API_FLAG:
			return{
				...state,
		api: {
			...state.api,
			data: { ...state.api.flags, ...action.payload },
		},
			};
		case HomeActions.SET_HOME_API_DATA:
			return{
				...state,
		api: {
			...state.api,
			data: { ...state.api.data, ...action.payload },
		},
			};
		default:
			return state;
	}
}

const homeReducers = combineReducers({
	reducedData: homeReducer,
});

export default homeReducers;