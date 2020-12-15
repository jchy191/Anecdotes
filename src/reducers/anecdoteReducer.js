const reducer = (state = [], action) => {

	switch (action.type) {
	case 'VOTE':
		return state.map(anecdote => {
			if (anecdote.id === action.data.id) {
				return {
					...anecdote,
					votes: anecdote.votes + 1
				};
			}
			return anecdote;
		});
	case 'ADD_ANECDOTE':
		return [...state, action.data];
	case 'INIT_ANECDOTE':
		return action.data;
	default:
		return state;
	}
};

export const voteAnecdote = (id) => {
	return {
		type: 'VOTE',
		data: { id }
	};
};

export const addAnecdote = (anecdote) => {
	return {
		type: 'ADD_ANECDOTE',
		data: anecdote

	};
};

export const initialiseAnecdotes = (anecdotes) => {
	return {
		type: 'INIT_ANECDOTE',
		data: anecdotes
	};
};

export default reducer;