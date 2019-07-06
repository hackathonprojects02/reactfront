import React from 'react';

class Form extends React.Component {
    constructor() {
      super();
      this.state = {
        name: "",
        shareholders: [{ name: "" }]
      };
    }
  
    handleNameChange = evt => {
      this.setState({ name: evt.target.value });
    };
  
    handleShareholderNameChange = idx => evt => {
      const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
        if (idx !== sidx) return shareholder;
        return { ...shareholder, name: evt.target.value };
      });
  
      this.setState({ shareholders: newShareholders });
    };
  
    handleSubmit = evt => {
      const { name, shareholders } = this.state;
      alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
    };
  
    handleAddShareholder = () => {
      this.setState({
        shareholders: this.state.shareholders.concat([{ name: "" }])
      });
    };
  
    handleRemoveShareholder = idx => () => {
      this.setState({
        shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
      });
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Please enter the name of the object"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
  
          <h3>Columns</h3>
  
          {this.state.shareholders.map((shareholder, idx) => (
            <div className="shareholder">
              <input
                type="text"
                placeholder={`Column #${idx + 1} name`}
                value={shareholder.name}
                onChange={this.handleShareholderNameChange(idx)}
              />
              <button
                type="button"
                onClick={this.handleRemoveShareholder(idx)}
                className="small"
              >
                -
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={this.handleAddShareholder}
            className="small"
          >
            Add Column
          </button>
          <button>Submit</button>
        </form>
      );
    }
  }

export default Form;