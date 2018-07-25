import React, { Component, PropTypes } from 'react';
import CalendarHeader from './calendarHeader';
import CalendarBody from './calendarBody';

export default class CalendarTable extends Component {
	render() {
		return (
			<div className="vito-calendar-date-panel">
				<CalendarHeader />
				<CalendarBody />
			</div>
		)
	}
}