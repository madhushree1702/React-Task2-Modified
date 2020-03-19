import React from 'react';
import TableRow from './TableRow';
import './Design.css';

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          employees : [
            {id: 1, name: 'Khushbu'},
            {id: 2, name: 'Priyanka'},
            {id: 3, name: 'Vaibhavi'},
            {id: 4, name: 'Pavithra'},
            {id: 5, name: 'Gomathi'}
          ]
        }
    }

     // remove = (TableRowId) => {
      //const arrayCopy = this.state.data.filter((TableRow) => TableRow.id !== TableRowId);
    //this.setState({data: arrayCopy});
    //};  
      
    render() {
        return (
            this.state.employees.map((employee) => {
                return (
                    <div className="table">                
                        <TableRow id={employee.id} name={employee.name}></TableRow>
                    </div>         
                )
            })
        )
    }

    //render() {
      //  const Rows = this.state.data.map( (RowData) => <TableRow remove={this.remove} {...RowData } />);
      //}

      
      renderTableHeader(){
        let header = Object.keys(this.state.employees[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
    
     render() {
         return (
           <div>
              <table id='employees'>
                 <tbody>
                   <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
    

}

export default Table;