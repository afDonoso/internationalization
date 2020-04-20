import React from 'react';
import { FormattedDate, FormattedNumber, FormattedPlural } from 'react-intl'

export default class Job extends React.Component {

	render() {
		var formattedPlural;
		if (navigator.language.startsWith("en")) {
			formattedPlural = <FormattedPlural
				value={this.props.offer.salary}
				one="million"
				other="millions"
			/>
		} else {
			formattedPlural = <FormattedPlural
				value={this.props.offer.salary}
				one="millón"
				other="millones"
			/>
		}

		return (
			<tr>
				<th scope="row">{this.props.offer.id}</th>
				<td>{this.props.offer.name}</td>
				<td>{this.props.offer.company}</td>
				<td>
					{this.props.offer.salary} {formattedPlural}
				</td>
				<td>{this.props.offer.city}</td>
				<td>
					<FormattedDate
						value={this.props.offer.date}
						year='numeric'
						month='long'
						day='numeric'
						weekday='long'
					/>
				</td>
				<td>
					<FormattedNumber value={this.props.offer.visits} />
				</td>
			</tr>
		);
	}
}