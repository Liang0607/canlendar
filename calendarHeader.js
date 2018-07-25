import React, { Component, PropTypes } from 'react';
import { getDetailTime } from './util';
import { reg_date_fomat } from './util';

export default class CalendarHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			year: '',
			month: ''
		}
	}
	componentDidMount() {
		let selectTime = getDetailTime(this.context.time === '' ? null : this.context.time);
		this.setState({year: selectTime.year});
		this.setState({month: selectTime.month});
	}
	render() {
		return (
			<div className="vito-calendar-header">
				<div>
					<span className="vito-calendar-ym-select">
						<a className="vito-calendar-year-select" role="button" title="选择年份">
							{ this.state.year + '年' }
						</a>
						<a className="vito-calendar-month-select" role="button" title="选择月份">
							{ this.state.month + '月' }
						</a>
					</span>
				</div>
			</div>
		)
	}
}

CalendarHeader.contextTypes = {
	time: React.PropTypes.any
}