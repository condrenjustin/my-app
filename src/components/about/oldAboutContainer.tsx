import React from 'react';
// import { connect } from 'react-redux';
import About from './about';
import { connect, useSelector, useDispatch } from 'react-redux';
import homeReducers from '../../reducers/homeReducer';

export interface AboutContainerProps {
  reducedData: {homeData:string[][], homeColumns:string[], selectedDataIndex:number}
	dispatch: (action:any) => any;
}

class AboutContainer extends React.Component<AboutContainerProps> {
	render() {
    // const data = useSelector(
    //   (state: {reducedData: {data:string[][], columns:string[], index:number}}) => state.reducedData.data);
    // const columns = useSelector(
    //   (state: {reducedData: {data:string[][], columns:string[], index:number}}) => state.reducedData.columns);
    // const index = useSelector(
    //   (state: {reducedData: {data:string[][], columns:string[], index:number}}) => state.reducedData.index);

    const { reducedData } = this.props;

		const greyBoxInfo = [
      { label: 'Name', value: 'N/A' },
      { label: 'Company', value: 'N/A' },
      { label: 'City', value: 'N/A' },
      { label: 'State', value: 'N/A' },
    ]

    if (reducedData.selectedDataIndex !== null && reducedData.selectedDataIndex !== undefined) {
      greyBoxInfo.map((item:{ label:string, value:string }, index:number) => 
        (
          item.value = reducedData.homeData[reducedData.selectedDataIndex][index]
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
}

function mapStateToProps(state:any) {
  const { homeReducers } = state;
  return { 
    reducedData: { 
      homeData: homeReducers.reducedData.data,
      homeColumns: homeReducers.reducedData.columns,
      selectedDataIndex: homeReducers.reducedData.selectedDataIndex,
    }
  }
}

export default connect(mapStateToProps)(AboutContainer);
