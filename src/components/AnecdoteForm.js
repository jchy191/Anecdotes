import React from 'react';
import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {

	const dispatch = useDispatch();

	const addNote = (e) => {
		e.preventDefault();
		const content = e.target.anecdote.value;
		dispatch(addAnecdote(content));
	};

	return (
		<div className='anecdote-form'>
			<h2>create new</h2>
			<form onSubmit={addNote}>
				<div><input name='anecdote'/></div>
				<button type='submit'>create</button>
			</form>
		</div>

	);
};

export default AnecdoteForm;