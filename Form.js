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

    handleAddSubColumn = () => {
        this.setState({
          subcolumns: this.state.subcolumns.concat([{ subname: "" }])
        });
      };
  
    handleRemoveColumn = idx => () => {

      this.setState({
        columns: this.state.columns.filter((s, sidx) => idx !== sidx)
      });
    };

    handleRemoveSubColumn = idx => () => {
        this.setState({
          subcolumns: this.state.subcolumns.filter((s, sidx) => idx !== sidx)
        });
      };

    handleSubcoloumn = evt => {
       
        // console.log('hihi');
        // console.log(evt.target.value);
        //column: this.state.columns.filter((s, sidx) => idx !== sidx)
    };
  
    render() {
      return (
        <form action="#" method="post" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Please enter the name of the object"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
  
          <h3>Columns</h3>

          {/* {this.state.subcolumns.map((subcolumn, idx) => (
              <div className="subcolumn">
                  <h1>THIS IS A SUBCOLUMN</h1>
                 
                  <button
                type="button"
                onClick={this.handleRemoveSubColumn(idx)}
                className="small"
              >
                -
              </button>
              
              </div>
          ))} */}
  
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
                onClick={this.handleAddSubColumn}
                className="small">
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

