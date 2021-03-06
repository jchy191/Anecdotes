import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {

	const anecdotes = useSelector(state => {
		return state.anecdotes.sort((a, b) => {
			if (a.votes > b.votes) return -1;
			if (a.votes < b.votes) return 1;
			return 0;
		});
	});
	const filter = useSelector(state => state.filter);
	const dispatch = useDispatch();

	const vote = ({ id, content }) => {
		dispatch(voteAnecdote(id));
		dispatch(setNotification(`You voted for '${content}'`, 5000));
	};


	const anecdotesToShow = anecdotes.filter(anecdote => new RegExp(`${filter}`, 'i').test(anecdote.content));

	return (
		<div className='anecdote-list'>
			{anecdotesToShow.map(anecdote => (
				<div key={anecdote.id}>
					<div>
						{anecdote.content}
					</div>
					<div>
					has {anecdote.votes}
						<button onClick={() => vote(anecdote)}>vote</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default AnecdoteList;