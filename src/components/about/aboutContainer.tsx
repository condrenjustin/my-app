import React, { useState } from 'react';
// import { connect } from 'react-redux';
import About from './about';
import { useSelector } from 'react-redux';

function AboutContainer() {
  
  // useSelector functions
	const  data  = useSelector(
    (state: any) => state.homeReducers.reducedData.data);
  console.log("AboutContainer -> data", data)
	const columns  = useSelector(
		(state: any) => state.homeReducers.reducedData.columns);
	const  selectedIndex  = useSelector(
		(state: any) => state.homeReducers.reducedData.selectedDataIndex);

	const greyBoxInfo = [
	{ label: 'Name', value: 'N/A' },
	{ label: 'Company', value: 'N/A' },
	{ label: 'City', value: 'N/A' },
	{ label: 'State', value: 'N/A' },
	]

	if (selectedIndex !== null && selectedIndex !== undefined && data !== null && data !== undefined) {
		greyBoxInfo.map((item:{ label:string, value:string }, index:number) => 
			(
				item.value = data[selectedIndex][index]
			)
		)
	}
	
	return (
		<div>
			<About
				greyBoxInfo={greyBoxInfo}
			/>
		</div>
	);
}

export default AboutContainer;
