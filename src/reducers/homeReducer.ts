/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import { HomeActions } from '../actions/homeActions';


export interface HomeState {
	data: string[][],
	columns: string[],
	selectedDataIndex: number|null,
	api: { 
		flags: any,
		data: any,
	},
}

const defaultState = {
	data: [[]],
	columns: [],
	selectedDataIndex: null,
	api: { 
		flags: {},
		data: {},
	},
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
				data: action.payload.data,
				columns: action.payload.columns,
			};
		case HomeActions.SET_HOME_API_FLAG:
			return {
				...state,
				api: {
					...state.api,
					data: { ...state.api.flags, ...action.payload },
				},
			};
		case HomeActions.SET_HOME_API_DATA:
			return {
				...state,
				api: {
					...state.api,
					data: { ...state.api.data, ...action.payload },
				},
			};
		case HomeActions.SAVE_DATA_INDEX:
			return {
				...state,
				selectedDataIndex: action.payload.selectedDataIndex,
			}
		default:
			return state;
	}
}

const homeReducers = combineReducers({
	reducedData: homeReducer,
});

export default homeReducers;