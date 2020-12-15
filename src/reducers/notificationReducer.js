const reducer = (state=null, action) => {
	switch(action.type) {
	case 'ADD_NOTIF':
		return state = action.data.message;
	case 'DEL_NOTIF':
		return state = null;
	default:
		return state;
	}
};

export const addNotification = (message) => {
	return {
		type: 'ADD_NOTIF',
		data: { message }
	};
};

export const deleteNotification = () => {
	return {
		type: 'DEL_NOTIF',
	};
};

export default reducer;