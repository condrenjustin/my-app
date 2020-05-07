import React from 'react';
// import { connect } from 'react-redux';
import Home from '../home/home';
import { setTableActionCreator } from '../../actions/homeActions';
import { connect } from 'react-redux';

export interface HomeContainerProps {
  reducedData: {homeData:string[][], homeColumns:string[]}
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

    dispatch(setTableActionCreator(data, columns));
  }
  
  render() {
    const { reducedData } = this.props;


    const title = 'Our Friends'

    const options = { 
      selectableRows: 'single',
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
    }
  }
}

export default connect(mapStateToProps)(HomeContainer);
