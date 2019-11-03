import React from 'react';


class BuildingList extends React.Component {

	handleClick(e) {
		//console.log(e);
		this.props.selectedUpdate(e)
	}

	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText } = this.props;

		const buildingList = data
			.filter(directory => {
				//remove names that do not match
				//return directory.directory.indexOf(filterText) >= 0
				return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 
			})
			.map(directory => {
				return (
					<tr 
						key={directory.id} 						
						onClick={() => this.handleClick(directory.id - 1)}>
						
						<td>{directory.code} </td>
						<td> {directory.name} </td>

					</tr>
				);
		});


		return (
			<div>
				{buildingList}
			</div>
		);
	}
}
export default BuildingList;