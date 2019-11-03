import React from 'react';

class RemoveBuilding extends React.Component {

    handleClick() {
        //console.log('a');
        //this.props.removeBuilding(this.props.data[e])
        this.props.removeBuilding();
    }


    render() {

        const {selectedBuilding} = this.props;

        return(
            <div className="removeButton" onClick={(e) => this.handleClick(e)} >
                {selectedBuilding===-1 ? ''
                :
                "REMOVE"
                }              
            </div>
        )
    }
}
export default RemoveBuilding;