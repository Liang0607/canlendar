import React, { Component, PropTypes } from 'react';
import DateTable from './dateTable';
import CalendarInput from './calendarInput';
import CalendarTable from './calendarTable';
import './calendar.css';

export default class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: '',
			show: 0
		}
	}
	dateClick(date) {
		this.setState({time: date});
		this.setState({show: 0})
	}
	focusInput() {
		this.setState({show: 1})
	}
	getChildContext() {
		return {
			time: this.state.time,
			changeDate: this.dateClick.bind(this)
		}
	}
	render() {
		let calendar = () => this.state.show ? <CalendarTable /> : null;
		calendar = calendar();
		return (
			<div className="vito-calendar-wrap">
				<CalendarInput 
					focusInput={ () => this.focusInput() }
				/>
				{ calendar }
			</div>
		)
	}
}

Calendar.childContextTypes = {
	time: React.PropTypes.any,
	changeDate: React.PropTypes.any
}