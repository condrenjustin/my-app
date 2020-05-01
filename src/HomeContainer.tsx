import React from 'react';
// import { connect } from 'react-redux';
import Home from './Home';

export interface HomeContainerProps {
  // dispatch: (action:any) => any;
}

class HomeContainer extends React.Component<HomeContainerProps> {
  render() {
    const columns = ["Name", "Company", "City", "State"];

    const data = [
      ["Joe James", "Test Corp", "Yonkers", "NY"],
      ["John Walsh", "Test Corp", "Hartford", "CT"],
      ["Bob Herm", "Test Corp", "Tampa", "FL"],
      ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    return (
      <div>
        <Home
          tableHeight={300}
          tableOptions={null}
          tableStyle={null}
          tableTitle={'People'}
          data={data}
          columns={columns}
        />
      </div>
    );
  }
}

export default HomeContainer