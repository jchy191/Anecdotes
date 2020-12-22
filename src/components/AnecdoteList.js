import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';


const AnecdoteList = ({anecdotes, filter, voteAnecdote, setNotification}) => {

	const vote = ({ id, content }) => {
		voteAnecdote(id);
		setNotification(`You voted for '${content}'`, 5000);
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

AnecdoteList.propTypes = {
	anecdotes: PropTypes.array,
	filter: PropTypes.string,
	voteAnecdote: PropTypes.func.isRequired,
	setNotification: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	const anecdotes = state.anecdotes.sort((a, b) => {
		if (a.votes > b.votes) return -1;
		if (a.votes < b.votes) return 1;
		return 0;
	});
	return {
		filter: state.filter,
		anecdotes
	};
};

const mapDispatchToProps = {
	voteAnecdote,
	setNotification,
};


export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);