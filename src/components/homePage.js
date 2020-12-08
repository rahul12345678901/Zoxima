import * as React from "react";
import { Card } from "@material-ui/core";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  AreaSeries,
  Title,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { withStyles } from "@material-ui/core/styles";
import { ArgumentScale, Animation } from "@devexpress/dx-react-chart";
import { curveCatmullRom, area } from "d3-shape";
import { scalePoint } from "d3-scale";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
const data = [
  { month: "Jan", appStore: 101 },
  { month: "Feb", appStore: 40 },
  { month: "Mar", appStore: 80 },
  { month: "Apr", appStore: 60 },
  { month: "May", appStore: 70 },
  { month: "Jun", appStore: 100 },
  { month: "Jul", appStore: 40 },
  { month: "Aug", appStore: 80 },
  { month: "Sep", appStore: 60 },
  { month: "Oct", appStore: 70 },
  { month: "Nov", appStore: 100 },
  { month: "Dec", appStore: 120 },
];
const legendStyles = () => ({
  root: {
    display: "flex",
    margin: "auto",
    flexDirection: "row",
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: "nowrap",
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const demoStyles = () => ({
  chart: {
    paddingRight: "20px",
  },
});

const Area = (props) => (
  <AreaSeries.Path
    {...props}
    path={area()
      .x(({ arg }) => arg)
      .y1(({ val }) => val)
      .y0(({ startVal }) => startVal)
      .curve(curveCatmullRom)}
  />
);

class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid md={3}>
          <Card style={{ margin: 25 }}>
            <Grid md={12}>
              <h6 style={{ marginLeft: 15 }}>Total Sale</h6>
              <Grid container>
                <Grid md={5}>
                  <Typography
                    component="h1"
                    variant="h6"
                    style={{ marginLeft: 20 }}
                  >
                    32,00,000
                  </Typography>
                </Grid>
                <Grid md={7}>
                  <img
                    style={{
                      width: 100,
                      height: 50,
                      marginTop: "-20px",
                      float: "right",
                    }}
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
        <Grid md={3}>
          <Card style={{ margin: 25 }}>
            <Grid md={12}>
              <h6 style={{ marginLeft: 15 }}>All Footfalls</h6>
              <Grid container>
                <Grid md={5}>
                  <Typography
                    component="h1"
                    variant="h6"
                    style={{ marginLeft: 20 }}
                  >
                    570
                  </Typography>
                </Grid>
                <Grid md={7}>
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
        <Grid md={3}>
          <Card style={{ margin: 25 }}>
            <Grid md={12}>
              <h6 style={{ marginLeft: 15 }}>Total Products Sold</h6>
              <Grid container>
                <Grid md={5}>
                  <Typography
                    component="h1"
                    variant="h6"
                    style={{ marginLeft: 20 }}
                  >
                    60
                  </Typography>
                </Grid>
                <Grid md={7}>
                  <img
                    style={{
                      width: 100,
                      height: 50,
                      marginTop: "-20px",
                    }}
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
        <Grid md={3}>
          <Card style={{ margin: 25 }}>
            <Grid md={12}>
              <h6 style={{ marginLeft: 15 }}>Lead Open</h6>
              <Grid container>
                <Grid md={5}>
                  <Typography
                    component="h1"
                    variant="h6"
                    style={{ marginLeft: 20 }}
                  >
                    40
                  </Typography>
                </Grid>
                <Grid md={7}>
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
        <Grid md={9} style={{ marginBottom: 25 }}>
          <Card>
            <Chart data={chartData} className={classes.chart}>
              <ArgumentScale factory={scalePoint} />
              <ArgumentAxis />
              <ValueAxis />

              <AreaSeries
                name="App Store"
                valueField="appStore"
                argumentField="month"
                seriesComponent={Area}
              />

              <Animation />
              {/* <Legend
            position="bottom"
            rootComponent={Root}
            labelComponent={Label}
          /> */}
              <Title text="Revenue Trend" />
            </Chart>
          </Card>
        </Grid>
        <Grid md={3}>
          <Card style={{ margin: 25 }}>
            <Grid md={12}>
              <h6 style={{ marginLeft: 15 }}>Total Orders</h6>
              <Grid container>
                <Grid md={5}>
                  <Typography
                    component="h1"
                    variant="h6"
                    style={{ marginLeft: 20 }}
                  >
                    389
                  </Typography>
                </Grid>
                <Grid md={7}>
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
          <Card style={{ margin: 25 }}>
            <Grid md={12}>
              <h6 style={{ marginLeft: 15 }}>Total Shipment</h6>
              <Grid container>
                <Grid md={5}>
                  <Typography
                    component="h1"
                    variant="h6"
                    style={{ marginLeft: 20 }}
                  >
                    234
                  </Typography>
                </Grid>
                <Grid md={7}>
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
          <Card style={{ margin: 25 }}>
            <Grid md={12}>
              <h6 style={{ marginLeft: 15 }}>Scheme Claims</h6>
              <Grid container>
                <Grid md={5}>
                  <Typography
                    component="h1"
                    variant="h6"
                    style={{ marginLeft: 20 }}
                  >
                    100
                  </Typography>
                </Grid>
                <Grid md={7}>
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
          <Card style={{ margin: 25 }}>
            <Grid md={12}>
              <h6 style={{ marginLeft: 15 }}>Booking</h6>
              <Grid container>
                <Grid md={5}>
                  <Typography
                    component="h1"
                    variant="h6"
                    style={{ marginLeft: 20 }}
                  >
                    23
                  </Typography>
                </Grid>
                <Grid md={7}>
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

        <Grid md={9} style={{ marginTop: 25 }}>
          <Card>
            <Chart data={chartData} className={classes.chart}>
              <ArgumentScale factory={scalePoint} />
              <ArgumentAxis />
              <ValueAxis />

              <AreaSeries
                name="App Store"
                valueField="appStore"
                argumentField="month"
                seriesComponent={Area}
              />

              <Animation />
              {/* <Legend
            position="bottom"
            rootComponent={Root}
            labelComponent={Label}
          /> */}
              <Title text="Vehical Sold Trend" />
            </Chart>
          </Card>
        </Grid>

        <Grid md={3}>
          <Card style={{ margin: 25 }}>
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
          <Card style={{ margin: 25 }}>
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
    );
  }
}

export default withStyles(demoStyles, { name: "HomePage" })(HomePage);
