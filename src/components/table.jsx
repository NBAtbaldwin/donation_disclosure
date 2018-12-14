import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const table = (props) => {

    const columns = [{
        Header: 'Amount',
        accessor: 'amount',
        Cell: props => <span>{`$${parseInt(props.value).toLocaleString('USD')}`}</span>
      }, {
        Header: 'Date',
        accessor: 'contributionDate',
        Cell: props => <span>{props.value.split(' ').slice(1,4).join(" ")}</span>
      }, {
        Header: 'Contributor',
        accessor: 'contributor',
      }, {
        Header: 'Address',
        accessor: 'contributorAddress',
      }, {
        Header: 'Employer',
        accessor: 'employer',
      }, {
        Header: 'Occupation',
        accessor: 'occupation',
      }, {
        Header: 'Office',
        accessor: 'office',
      }, {
        Header: 'Recipient',
        accessor: 'recipient',
      }]
    
    return(
        <ReactTable
          data={props.records}
          columns={columns}
        />
    )
}

export default table;