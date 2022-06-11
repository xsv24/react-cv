import { useReducer, useEffect } from 'react';

export const types = {
	REQUEST: `REQUEST`,
	SUCCESS: `SUCCESS`,
	FAIL: `FAIL`
};

export const fetchReducer = (state, action) => {
	switch(action.type){
		case types.REQUEST:
			return {
				...state,
				loading: true,
				values: [],
				error: null
			};

		case types.SUCCESS:
			return {
				...state,
				loading: false,
				values: action.payload,
				error: null
			};

		case types.FAIL:
			return {
				...state,
				loading: false,
				values: [],
				error: action.payload
			};
		
		default: 
			return state;
	}
}

const useRequest = ({
	request,
	onSuccess,
	onFail,
	load = true
}) => {

	const [state, dispatch] = useReducer(fetchReducer, {
		loading: load,
		values: [],
		error: null
	});

	useEffect(() => {
		if(!state.loading) return;

		dispatch({ type: types.REQUEST });
		request()
			.then(res => {
				onSuccess && onSuccess(res);
				dispatch({ type: types.SUCCESS, payload: res });
			})
			.catch(err => {
				console.error('An error occured on attempting to load a request.');
				onFail && onFail(err);
				dispatch({ type: types.ERROR, payload: err });
            });
            
	}, [state.loading]);

	return [state, dispatch];
};

export default useRequest;