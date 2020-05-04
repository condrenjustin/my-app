import React from 'react';
import Table from './Table';
import styles from './header.module.scss';
import { Grid } from '@material-ui/core';

export interface HomeProps{
  tableHeight:number;
  tableOptions:any;
  tableStyle:any;
  tableTitle:string;
  data:any[];
  columns:any[];
}

const Home = (props:HomeProps) => {
  const {
    tableHeight,
    tableOptions,
    tableStyle,
    tableTitle,
    data,
    columns,
  } = props;

  return (
    <div className={styles.tableSpacing}>
          <Table
            data={data}
            columns={columns}
            tableHeight={tableHeight}
            tableOptions={tableOptions}
            tableTitle={tableTitle}
            tableStyle={tableStyle}
          />
    </div>
  );
};

export default Home;
