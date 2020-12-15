import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { addNotification, deleteNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {

	const anecdotes = useSelector(state => {
		return state.anecdotes.sort((a, b) => {
			if (a.votes > b.votes) return -1;
			if (a.votes < b.votes) return 1;
			return 0;
		});
	});
	const dispatch = useDispatch();

	const vote = ({ id, content }) => {
		dispatch(voteAnecdote(id));
		dispatch(addNotification(`You voted for '${content}'`));
		setTimeout(() => {
			dispatch(deleteNotification());
		}, 5000);
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
						<button onClick={() => vote(anecdote)}>vote</button>
					</div>
				</div>
			)}
		</div>

	);
};

export default AnecdoteList;