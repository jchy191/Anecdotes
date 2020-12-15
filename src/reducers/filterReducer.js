const reducer = (state='', action) => {
	switch (action.type) {
	case 'CHANGE_FILTER':
		return state = action.data.filter;
	case 'CLEAR_FILTER':
		return state = '';
	default:
		return state;
	}
};

export const changeFilter = (filter) => {
	return {
		type: 'CHANGE_FILTER',
		data: { filter }
	};
};

export const clearFilter = () => {
	return {
		type: 'CLEAR_FILTER'
	};
};

export default reducer;