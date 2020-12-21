import anecdoteService from '../services/anecdotes';

const reducer = (state = [], action) => {

	switch (action.type) {
	case 'VOTE':
		return state.map(anecdote => anecdote.id === action.data.id ? action.data : anecdote);
	case 'ADD_ANECDOTE':
		return [...state, action.data];
	case 'INIT_ANECDOTE':
		return action.data;
	default:
		return state;
	}
};

export const voteAnecdote = (id) => {
	return async (dispatch, getState) => {
		const { anecdotes } = getState();
		let anecdoteToUpdate = anecdotes.find(anecdote => anecdote.id === id);
		anecdoteToUpdate = { ...anecdoteToUpdate, votes: anecdoteToUpdate.votes + 1 };
		const response = await anecdoteService.update(anecdoteToUpdate);
		dispatch({
			type: 'VOTE',
			data: response
		});
	};
};

export const addAnecdote = (anecdote) => {
	return async dispatch => {
		const newAnecdote = await anecdoteService.createNew(anecdote);
		dispatch({
			type: 'ADD_ANECDOTE',
			data: newAnecdote
		});
	};
};

export const initialiseAnecdotes = () => {
	return async dispatch => {
		const allAnecdotes = await anecdoteService.getAll();
		dispatch({
			type: 'INIT_ANECDOTE',
			data: allAnecdotes
		});
	};
};

export default reducer;