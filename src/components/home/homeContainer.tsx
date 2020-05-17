import React from 'react';
// import { connect } from 'react-redux';
import Home from '../home/home';
import { setTableActionCreator, saveDataIndexActionCreator } from '../../actions/homeActions';
import { connect } from 'react-redux';

export interface HomeContainerProps {
  reducedData: {homeData:string[][], homeColumns:string[], selectedDataIndex:number}
  dispatch: (action:any) => any;
}

class HomeContainer extends React.Component<HomeContainerProps> {
  componentDidMount = () => {
    const columns = ["Name", "Company", "City", "State"];

    const data = [
      ["Joe Joe", "Test Corp", "Yonkers", "NY"],
      ["John Walsh", "Test Corp", "Hartford", "CT"],
      ["Bob Herm", "Test Corp", "Tampa", "FL"],
      ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const { dispatch } = this.props;
    debugger;
    dispatch(setTableActionCreator(data, columns));
  }

  handleRowSelection = (curRowSelected:any) => {
    const { dispatch } = this.props;

    dispatch(saveDataIndexActionCreator(curRowSelected));
  }
  
  
  render() {
    const { reducedData } = this.props;

    const title = 'Our Friends'

    const options = { 
      selectableRows: 'single',
      onRowsSelect: (currentRowsSelected:any, allRowsSelected:any) => this.handleRowSelection(currentRowsSelected[0]?.dataIndex),
    }

    const greyBoxInfo = { 
      name: "N/A",
      company: "N/A",
      city: "N/A",
      state: "N/A",
      };

    if (reducedData.selectedDataIndex !== null && reducedData.selectedDataIndex !== undefined) {
      greyBoxInfo.name = reducedData.homeData[reducedData.selectedDataIndex][0];
      greyBoxInfo.company = reducedData.homeData[reducedData.selectedDataIndex][1];
      greyBoxInfo.city = reducedData.homeData[reducedData.selectedDataIndex][2];
      greyBoxInfo.state = reducedData.homeData[reducedData.selectedDataIndex][3];
    }

    return (
      <div>
        <Home
          tableHeight={300}
          tableOptions={options}
          tableStyle={null}
          tableTitle={title}
          data={reducedData.homeData}
          columns={reducedData.homeColumns}
          selectedDataIndex={greyBoxInfo}
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

export default connect(mapStateToProps)(HomeContainer);
