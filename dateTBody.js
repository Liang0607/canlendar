import React, { Component, PropTypes } from 'react';
import { getCells, getDetailTime, dealTimes } from './util';

export default class DateTBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			curtime: '',
			select: '',
			time: []
		}
	}
	componentDidMount() {
		let ar = dealTimes(this.context.time === '' ? null : this.context.time),	//日期数组
			curTime = getDetailTime(),	//今日日期
			selTime;	//选中的日期
		curTime = curTime.year + '-' + curTime.month + '-' + curTime.day;
		selTime = this.context.time || curTime;
		this.setState({curtime: curTime});
		this.setState({select: selTime});
		this.setState({time: ar});
	}
	clickHanler(date) {
		let ar = dealTimes(date);
		this.setState({select: date});
		this.setState({time: ar});
		this.context.changeDate(date);
	}
	render() {
		return (
			<tbody className="vito-calendar-body">
				{this.state.time.map((t, i) => 
					<tr role="row" key={i}>
						{t.map((_t, _i) => 
							<td
								role="gridcell" 
								title={_t.time} 
								className={"vito-calendar-cell " + _t.type + (_t.time == this.state.select ? ' select' : ' noselect') + (_t.time == this.state.curtime ? ' today' : '')}
								key={_t.time}
								onClick={() => this.clickHanler(_t.time)}
							>
								<div 
									className="vito-calendar-date"
								>{_t.text}</div>
							</td>
						)}
					</tr>
				)}
			</tbody>
		)
	}
}

DateTBody.contextTypes = {
	time: React.PropTypes.any,
	changeDate: React.PropTypes.any
}