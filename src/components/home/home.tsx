import React from 'react';
import Table from '../common/table';
import styles from './home.module.scss';
import { Paper, Grid, Typography } from '@material-ui/core'

export interface HomeProps{
  tableHeight:number;
  tableOptions:any;
  tableStyle:any;
  tableTitle:string;
  data:any[];
  columns:any[];
  selectedDataIndex:any;
}

const Home = (props:HomeProps) => {
  const {
    tableHeight,
    tableOptions,
    tableStyle,
    tableTitle,
    data,
    columns,
    selectedDataIndex,
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
      <Paper style={{backgroundColor: '#E5E5E5'}} className={styles.paperStyles} variant="outlined">
        <Grid container justify="space-around">
          <Grid item>
            <Typography align="center" variant="h4">
              Name
            </Typography>
            <Typography align="center">
              {selectedDataIndex.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" variant="h4">
              Company
            </Typography>
            <Typography align="center">
              {selectedDataIndex.company}
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" variant="h4">
              City
            </Typography>
            <Typography align="center">
            {selectedDataIndex.city}
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" variant="h4">
              State
            </Typography>
            <Typography align="center">
              {selectedDataIndex.state}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Home;
