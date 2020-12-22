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

const showNotification = (message) => {
	return {
		type: 'ADD_NOTIF',
		data: { message }
	};
};

const deleteNotification = () => {
	return {
		type: 'DEL_NOTIF',
	};
};

let timeoutID;

export const setNotification = (message, time) => {
	return dispatch => {
		dispatch(showNotification(message));
		clearTimeout(timeoutID);
		timeoutID = setTimeout(() => {
			dispatch(deleteNotification());
		}, time);
	};
};

export default reducer;