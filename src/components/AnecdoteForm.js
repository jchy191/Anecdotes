import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = ({ addAnecdote, setNotification }) => {

	const handleAdd = async (e) => {
		e.preventDefault();
		const content = e.target.anecdote.value;
		addAnecdote(content);
		e.target.anecdote.value = '';
		setNotification(`You added an anecdote '${content}'`, 5000);
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

AnecdoteForm.propTypes = {
	addAnecdote: PropTypes.func.isRequired,
	setNotification: PropTypes.func.isRequired,
};

export default connect(null, { addAnecdote, setNotification })(AnecdoteForm);