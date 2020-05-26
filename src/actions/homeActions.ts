export enum HomeActions {
		SET_HOME_API_FLAG = 'SET_HOME_API_FLAG',
		SET_HOME_API_DATA = 'SET_HOME_API_DATA',
		SET_TABLE = 'SET_TABLE',
		SAVE_DATA_INDEX = 'SAVE_DATA_INDEX'
	}

export const setHomeFlagActionCreator = (flag:string, value:boolean) => {
	const payload:{[flagName:string]: boolean} = {};
	payload[flag] = value;
	return {
		type: HomeActions.SET_HOME_API_FLAG,
		payload,
	};
};

export const setHomeDataActionCreator = (key:string, data:any) => {
	const payload:{[key:string]: any} = {};
	payload[key] = data;
	return {
		type: HomeActions.SET_HOME_API_DATA,
		payload,
	};
};

export const setTableActionCreator = (data:string[][], columns:string[]) => {
	return {
		type: HomeActions.SET_TABLE,
		payload: { data, columns },
	};
};

export const saveDataIndexActionCreator = (selectedDataIndex:number) => {
	return {
		type: HomeActions.SAVE_DATA_INDEX,
		payload: { selectedDataIndex },
	};
};

export default {
	setHomeFlagActionCreator,
	setHomeDataActionCreator,
	setTableActionCreator,
	saveDataIndexActionCreator
}