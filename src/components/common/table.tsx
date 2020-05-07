import React from 'react';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

export interface TableProperties {
  tableHeight:number;
  tableOptions:any;
  tableStyle:any;
  tableTitle:string;
  data:any[];
  columns:any[];
}

const defaults = {
    responsive: 'scrollMaxHeight',
    elevation: 0,
};

export default class Table extends React.Component<TableProperties> {

  render() {
    const {
      data,
      columns,
      tableHeight,
      tableOptions,
      tableTitle,
      tableStyle,
    } = this.props;

    const finalOptions = {
      ...defaults,
      ...tableOptions,
    }

    const theme = createMuiTheme({
      overrides: {
        // @ts-ignore
        MUIDataTable: {
          responsiveScrollMaxHeight: {
            tableHeight,
          },
        },
      },
    });

    return (
      <div>
          <MuiThemeProvider theme={theme}>
              <MUIDataTable
                // @ts-ignore
                className={tableStyle}
                title={tableTitle}
                data={data}
                columns={columns}
                options={finalOptions}
              />
          </MuiThemeProvider>
      </div>
    )
  }
}