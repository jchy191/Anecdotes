import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import AnecdoteForm from './AnecdoteForm';

const AnecdoteList = () => {

	const anecdotes = useSelector(state => {
		return state.sort((a, b) => {
			if (a.votes > b.votes) return -1;
			if (a.votes < b.votes) return 1;
			return 0;
		});
	});
	const dispatch = useDispatch();

	const vote = (id) => {
		dispatch(voteAnecdote(id));
	};

	return (
		<div className='anecdote-list'>
			{anecdotes.map(anecdote =>
				<div key={anecdote.id}>
					<div>
						{anecdote.content}
					</div>
					<div>
					has {anecdote.votes}
						<button onClick={() => vote(anecdote.id)}>vote</button>
					</div>
				</div>
			)}
		</div>

	);
};

export default AnecdoteList;