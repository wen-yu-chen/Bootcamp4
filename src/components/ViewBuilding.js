import React from 'react';
import RemoveBuilding from '../components/RemoveBuilding';

class ViewBuilding extends React.Component {

	render() {

		const { data, selectedBuilding, myText } = this.props;

		return (
			<div>
				<p>
					{' '}
					<i>{myText}</i>
					{selectedBuilding ===-1 ? ''
					:
					<div>
							<ul>{"CODE: " + data[selectedBuilding].code}</ul>
							<ul>{"NAME: " +data[selectedBuilding].name}</ul>
							<ul>
								{data[selectedBuilding].latitude || data[selectedBuilding].longitude ?
								[
									"COORIDNATES: ",
									<ul>{"LATITUDE: " + data[selectedBuilding].latitude}</ul>,
									<ul>{"LONGITUDE: " + data[selectedBuilding].longitude}</ul>
								]
								:
								''
								}
							</ul>
							<ul>
								{data[selectedBuilding].address ?
									[
										"ADDRESS: ",
										data[selectedBuilding].address
									]
									:
									''
								}	
							</ul>
					</div>
					}
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
