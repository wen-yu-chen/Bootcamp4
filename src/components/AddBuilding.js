import React from 'react';

class AddBuilding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          newCode: '',
          newName: '',
          newLatitude: '',
              newLongitude: '',
          /*
          newCoordinates: {
              newLatitude: '',
              newLongitude: ''
          },
          */
          newAddress: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(e){
        e.preventDefault();
        this.props.addBuilding(
            this.state.newCode,
            this.state.newName,
            this.state.newLatitude,
            this.state.newLongitude,
            this.state.newAddress
        )
    }

    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {

		return (
			<div>
					<i>Add a new building</i>
					<form onSubmit={this.handleSubmit}>
                        <input id='newCode' name='newCode' value={this.state.newCode} className='addBar' type='text' placeholder='Code' onChange={(e) => this.handleChange(e)}></input>
                        <input id='newName' name='newName' value={this.state.newName} className='addBar' type='text' placeholder='Name' onChange={ (e)=> this.handleChange(e)}></input>
                        <input id='newLatitude' name='newLatitude' value={this.state.newLatitude} className='addBar' type='text' placeholder='Latitude(optional)' onChange={ (e)=> this.handleChange(e)}></input>
                        <input id='newLongitude' name='newLongitude' value={this.state.newLongititude} className='addBar' type='text' placeholder='Longititude(optional)' onChange={ (e)=> this.handleChange(e)}></input>
                        <input id='newAddress' name='newAddress' value={this.state.newAddress} className='addBar' type='text' placeholder='Address(optional)' onChange={ (e)=> this.handleChange(e)}></input>
                        <input className='addButton' type="submit" placeholder='ADD'></input>
                    </form>
			</div>
		);
	}
}
export default AddBuilding;
