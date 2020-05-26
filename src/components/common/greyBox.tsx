import React from 'react';
import styles from './common.module.scss';
import { Paper, Grid, Typography } from '@material-ui/core'

export interface GreyBoxProps{
  items:{ label: string, value: string }[];
}

const GreyBox = (props:GreyBoxProps) => {
	const {
    items,
	} = props;

	return (
		<div className={styles.tableSpacing}>
			<Paper style={{backgroundColor: '#E5E5E5'}} className={styles.paperStyles} variant="outlined">
				<Grid container justify="space-around">
          {items.map((item:{ label: string, value: string }, index:number) => (
            <Grid item>
              <Typography align="center" variant="h4">
                {item.label.charAt(0).toUpperCase()}{item.label.slice(1)}
              </Typography>
              <Typography align="center">
                { item.value.charAt(0).toUpperCase() }{item.value.slice(1)}
              </Typography>
            </Grid> 
          ) ) }
				</Grid>
			</Paper>
		</div>
	);
};

export default GreyBox;
