import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';

import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: -1,
      data: [],
      myText: 'Click on a name to view more information'
    };
  }

  
  componentWillMount() {
    this.setState( {
      ...this.state,
      data: this.props.data
    })
  }


  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      myText: 'Building Information',
      selectedBuilding: id
    })
  }

  
  addBuilding = (inputCode, inputName, inputLat, inputLon, inputAddr) => {
    var val={
      id: this.state.data.length + 1,
      code: inputCode,
      name: inputName,
      latitude: inputLat,
      longitude: inputLon,
      address: inputAddr
    }

    if (inputCode && inputName) {
      this.setState({
        ...this.state,
        data: this.state.data.concat([val])
      })
    }

    else {
      window.alert("Please enter both CODE and NAME");
    }    
  }

  removeBuilding() {
    //<RemoveBuilding data={this.state.data[rem]} />
    //console.log('a')
    //console.log(this.state.data[removed])
    
    console.log(this.state.selectedBuilding)
    var index = this.state.selectedBuilding;
    console.log(this.state.data.splice(this.state.selectedBuilding, 1))
    
    //adjust id
    for (var i = index; i < this.state.data.length; i++) {
      this.state.data[i].id--;
    }
    
    this.setState ({
      data: this.state.data,
      selectedBuilding: -1,
      myText: 'Click on a name to view more information'
    })
  }


  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search 
          filterText = {this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText={this.state.filterText}
                    selectedBuilding={this.state.selectedBuilding}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                data={this.state.data}
                myText={this.state.myText}
                selectedBuilding={this.state.selectedBuilding}
              />
              <RemoveBuilding  
                //data={this.state.data} 
                selectedBuilding={this.state.selectedBuilding}
                removeBuilding={this.removeBuilding.bind(this)}
              />
            </div>
            <div className="column2">
              
            </div>
            <div className="column3">
              <AddBuilding 
                addBuilding={this.addBuilding.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
