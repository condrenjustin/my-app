import React from 'react';
import Table from '../common/table';
import styles from './home.module.scss';
import GreyBox from '../common/greyBox';

export interface HomeProps{
  tableHeight:number;
  tableOptions:any;
  tableStyle:any;
  tableTitle:string;
  data:any[];
  columns:any[];
  greyBoxInfo:{ label: string, value: string }[];
}

const Home = (props:HomeProps) => {
  const {
    tableHeight,
    tableOptions,
    tableStyle,
    tableTitle,
    data,
    columns,
    greyBoxInfo,
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
      <GreyBox
        items={greyBoxInfo}
      />
    </div>
  );
};

export default Home;
