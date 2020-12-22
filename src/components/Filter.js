import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../reducers/filterReducer';

const Filter = ({ changeFilter }) => {

	const handleChange = (e) => {
		const filter = e.target.value;
		changeFilter(filter);
	};

	const style = {
		marginBottom: 10
	};

	return (
		<div style={style}>
			Filter: <input onChange={handleChange} />
		</div>
	);
};

Filter.propTypes = {
	changeFilter: PropTypes.func.isRequired,
};

export default connect(null, { changeFilter })(Filter);