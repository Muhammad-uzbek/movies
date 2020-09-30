import React, { Component } from 'react'
import { FaSortDown, FaSortUp } from "react-icons/fa";

export default class TableHeader extends Component {

    raiseSort = (path) =>{
        let sortColumn = this.props.sortColumn;

        if(sortColumn.path === path){
            sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
        }else{
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }

        this.props.onSort(sortColumn);
    }

    rednerIcon = (sortColumn, path) =>{
        if (sortColumn.path !== path) return null;
        return sortColumn.order === 'asc' ? <FaSortDown size='25' /> : <FaSortUp size='25' />;
    }

  render() {
    const {columns,sortColumn} = this.props;

    
    return (
            <thead className="thead-dark">
                <tr>
                    {
                        columns.map(({path, label }) => 
                        <th 
                            scope="col" 
                            key={path || label} 
                            onClick={()=>{this.raiseSort(path)}}
                        >
                                {label}{this.rednerIcon(sortColumn, path)}
                        </th>)
                        }
                </tr>
            </thead>
    )
  }
}
