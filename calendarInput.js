import React, { Component, PropTypes } from 'react';
import { reg_date_fomat } from './util';

export default class CalendarInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: ''
		}
	}
	render() {
		return (
			<div className="vito-calendar-input-wrap">
				<input 
					className="vito-calendar-input " 
					placeholder="请选择日期"
					onFocus={ this.props.focusInput } 
					value={ this.context.time.replace(reg_date_fomat, '-0') }
				/>
			</div>
		)
	}
}

CalendarInput.contextTypes = {
	time: React.PropTypes.any
}