import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import TablePagination from "@material-ui/core/TablePagination";
import SearchBar from "material-ui-search-bar";
import { Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { FetchCustomerTable } from "../redux/actions";

const useStyles = makeStyles(() => ({
  table: {
    minWidth: 650,
  },
}));

const data = [
  {
    firstname: "Sunil",
    lastName: "Chawla",
    contact: 7986383677,
    product: "FlashLI",
    sale: "78990",
    date: "4/12/2020",
  },
  {
    firstname: "Sunil",
    lastName: "Chawla",
    contact: 7986383677,
    product: "FlashLI",
    sale: "78990",
    date: "4/12/2020",
  },
  {
    firstname: "Sunil",
    lastName: "Chawla",
    contact: 7986383677,
    product: "FlashLI",
    sale: "78990",
    date: "4/12/2020",
  },
  {
    firstname: "Sunil",
    lastName: "Chawla",
    contact: 7986383677,
    product: "FlashLI",
    sale: "78990",
    date: "4/12/2020",
  },
  {
    firstname: "Sunil",
    lastName: "Chawla",
    contact: 7986383677,
    product: "FlashLI",
    sale: "78990",
    date: "4/12/2020",
  },
  {
    firstname: "Sunil",
    lastName: "Chawla",
    contact: 7986383677,
    product: "FlashLI",
    sale: "78990",
    date: "4/12/2020",
  },
  {
    firstname: "Sunil",
    lastName: "Chawla",
    contact: 7986383677,
    product: "FlashLI",
    sale: "78990",
    date: "4/12/2020",
  },
  {
    firstname: "Sunil",
    lastName: "Chawla",
    contact: 7986383677,
    product: "FlashLI",
    sale: "78990",
    date: "4/12/2020",
  },
  {
    firstname: "Sunil",
    lastName: "Chawla",
    contact: 7986383677,
    product: "FlashLI",
    sale: "78990",
    date: "4/12/2020",
  },
  {
    firstname: "Sunil",
    lastName: "Chawla",
    contact: 7986383677,
    product: "FlashLI",
    sale: "78990",
    date: "4/12/2020",
  },
  {
    firstname: "Sunil",
    lastName: "Chawla",
    contact: 7986383677,
    product: "FlashLI",
    sale: "78990",
    date: "4/12/2020",
  },
  {
    firstname: "Sunil",
    lastName: "Chawla",
    contact: 7986383677,
    product: "FlashLI",
    sale: "78990",
    date: "4/12/2020",
  },
];

function CustomerPage(props) {
  const classes = useStyles();
  const [searchValue, handleSearch] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  React.useEffect(() => {
    props.FetchCustomerTable(props.token);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleSearchValue = (event) => {
    handleSearch({ searchValue: event.target.value });
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  function ApplyPagination(Data, page, size) {
    var PaginatedData = [...Data];
    const startIndex = page * size;
    const lastIndex = Math.min(startIndex + size, Data.length);
    return PaginatedData.slice(startIndex, lastIndex);
  }

  function Paginate(Data) {
    var FilteredData = [...Data];
    FilteredData = ApplyPagination(FilteredData, page, rowsPerPage);
    return FilteredData;
  }

  const { customer_details, customer_details_loading } = props;

  return (
    <div>
      <Grid container>
        <Grid md={6}>
          <Typography
            component="h1"
            variant="h6"
            style={{ marginLeft: "10%", marginTop: 10 }}
          >
            My Customers
          </Typography>
        </Grid>
        <Grid md={5}>
          <SearchBar
            style={{ marginTop: 10 }}
            value={searchValue}
            onChange={handleSearchValue}
            // onRequestSearch={() => doSomethingWith(this.state.value)}
          />
        </Grid>
        <Grid md={3} style={{ marginLeft: "10%" }}>
          <Card>
            <Grid md={12}>
              <h6 style={{ marginLeft: 15 }}>Total Customers</h6>
              <Grid container>
                <Grid md={4}>
                  <Typography
                    component="h1"
                    variant="h6"
                    style={{ marginLeft: 20 }}
                  >
                    430
                  </Typography>
                </Grid>
                <Grid md={8}>
                  <img
                    style={{ width: 100, height: 50, marginTop: "-20px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE1CBncbJwut8ludk1dkkmDunzCxd7tAnGwQ&usqp=CAU"
                    alt=""
                  />
                </Grid>
                <br />
                <br />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid container justify={"center"} style={{ marginTop: 30 }}>
        <Grid md={11} sm={11} xs={11}>
          <TableContainer component={Card}>
            <h4 style={{ marginLeft: 15 }}>Customers Info</h4>
            {customer_details_loading ? (
              "Loading"
            ) : (
              <Table className={classes.table} aria-label="simple table">
                <TableHead style={{ backgroundColor: "#D3D3D3" }}>
                  <TableRow>
                    <TableCell>
                      <p
                        style={{
                          fontWeight: "bolder",
                          fontSize: 18,
                        }}
                      >
                        Name
                      </p>
                    </TableCell>

                    <TableCell align="right">
                      <p style={{ fontWeight: "bolder", fontSize: 18 }}>
                        Contact Number
                      </p>
                    </TableCell>
                    <TableCell align="right">
                      <p style={{ fontWeight: "bolder", fontSize: 18 }}>
                        Total Sale
                      </p>
                    </TableCell>
                    <TableCell align="right">
                      <p style={{ fontWeight: "bolder", fontSize: 18 }}>
                        TallyInvoiceNo.
                      </p>
                    </TableCell>
                    <TableCell align="right">
                      <p style={{ fontWeight: "bolder", fontSize: 18 }}>
                        Lead Status
                      </p>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {console.log(customer_details[0].data.name, ">>>>>>>")} */}
                  {customer_details.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>

                      <TableCell align="right">{row.mobilephone}</TableCell>
                      <TableCell align="right">{row.product_name}</TableCell>
                      <TableCell align="right">
                        {row.tally_invoice_no__c}
                      </TableCell>
                      <TableCell align="right">{row.lead_status__c}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
            <TablePagination
              rowsPerPageOptions={[5, 10, 15, 20]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    token: state.Login_Status.token,
    customer_details: state.customer_details,
    customer_details_loading: state.customer_details_loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    FetchCustomerTable: (token) => FetchCustomerTable(token, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);
