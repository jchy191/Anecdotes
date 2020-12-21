import React from 'react';
import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = () => {

	const dispatch = useDispatch();

	const handleAdd = async (e) => {
		e.preventDefault();
		const content = e.target.anecdote.value;
		dispatch(addAnecdote(content));
		e.target.anecdote.value = '';
		dispatch(setNotification(`You added an anecdote '${content}'`, 5000));
	};

	return (
		<div className='anecdote-form'>
			<h2>create new</h2>
			<form onSubmit={handleAdd}>
				<div><input name='anecdote'/></div>
				<button type='submit'>create</button>
			</form>
		</div>

	);
};

export default AnecdoteForm;