import React, { Component, PropTypes } from 'react';

const week = ['日', '一', '二', '三', '四', '五', '六'];
export default class DateTHeader extends Component {
	render() {
		return (
			<thead className="vito-calendar-header">
				<tr>
					{week.map((w, i) => 
						<th className="vito-calendar-column-header" title={"周" + w} key={w}>
							<span className="vito-calendar-column-header-inner">{w}</span>
						</th>
					)}
				</tr>
			</thead>
		)
	}
}