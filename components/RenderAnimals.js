import React from "react";
import ChangeAnimals from "./ChangeAnimals";

class RenderAnimals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit() {
    this.setState((prevState) => {
      return {
        ...this.state,
        isEdit: !prevState.isEdit,
      };
    });
  }
  render() {
    console.log("Props render animal", this.props);
    return (
      <div>
        <h3>{this.props.animal.type}</h3>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={() => this.props.deleteAnimal(this.props.animal.id)}>
          Shoo away animal
        </button>
        {this.state.isEdit ? (
          <ChangeAnimals
            editAnimal={this.props.editAnimal}
            handleEdit={this.handleEdit}
            animal={this.props.animal}
          />
        ) : null}
      </div>
    );
  }
}

export default RenderAnimals;
