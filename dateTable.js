import React, { Component, PropTypes } from 'react';
import DateTHeader from './dateTHeader';
import DateTBody from './dateTBody';

export default class DateTable extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<table className="vito-calendar-table">
				<DateTHeader />
				<DateTBody />
			</table>
		)
	}
}