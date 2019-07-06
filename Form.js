import React from 'react';

class Form extends React.Component {
    constructor() {
      super();
      this.state = {
        name: "",
        columns: [{ name: "" }],
        subcolumns: [{ subname: "" }]
      };
    }
  
    handleNameChange = evt => {
      this.setState({ name: evt.target.value });
    };
  
    handleColumnNameChange = idx => evt => {
      const newColumns = this.state.columns.map((column, sidx) => {
        if (idx !== sidx) return column;
        return { ...column, name: evt.target.value };
      });
  
      this.setState({ columns: newColumns });
    };
  
    handleSubmit = evt => {
      const { name, columns } = this.state;
      alert(`Incorporated: ${name} with ${columns.length} columns`);
    };
  
    handleAddColumn = () => {
      this.setState({
        columns: this.state.columns.concat([{ name: "" }])
      });
    };
  
    handleRemoveColumn = idx => () => {
      this.setState({
        columns: this.state.columns.filter((s, sidx) => idx !== sidx)
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
  
          {this.state.columns.map((column, idx) => (
            <div className="column">
              <input
                type="text"
                placeholder={`Column #${idx + 1} name`}
                value={column.name}
                onChange={this.handleColumnNameChange(idx)}
              />
              <button
                type="button"
                onClick={this.handleRemoveColumn(idx)}
                className="small"
              >
                -
              </button>

              <button
                type="button"
                onClick={this.handleRemoveColumn(idx)}
                className="small"
              >
                Add Subheading
              </button>

            </div>
          ))}
          <button
            type="button"
            onClick={this.handleAddColumn}
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