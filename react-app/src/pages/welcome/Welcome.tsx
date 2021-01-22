import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CarCard from "../../components/cards/CarCard";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Input,
  Paper,
  Slider,
  Typography,
} from "@material-ui/core";

import theme from "../../themes/theme";
import { Label } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {},
  filterPaper: {},
  buttonCenter: {
    backgroundColor: "rgba(0, 0, 0, 0.6);",
    display: "flex",
    justifyContent: "center",
    alignitems: "center",
    textAlign: "center",
  },
  menuButton: {
    fontWeight: 700,
    fontSize: 20,
    opacity: "100%",
    color: "white",
    borderRadius: 10,
    borderWidth: "10px",
  },
  inputStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.2);",
  },
  leftGrid: {
    marginTop: theme.spacing(30),
    display: "flex",
    flexDirection: "column",
  },
});

const Welcome = () => {
  const [data, setData] = useState([] as any);
  const [page, setPage] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [mainFilter, setMainFilter] = useState("");
  const [value, setValue] = React.useState([100, 37]);
  const stateChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchInput(event.target.value);
    if (searchInput.length >= 0) setPage(1);
  };
  const handleChangeSlider = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const getData = () => {
    fetch("cars.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson.car);
      });
  };

  useEffect(() => {
    getData();
  }, [mainFilter]);

  const paginate = function (array: any, index: any, size: any) {
    // transform values
    index = Math.abs(parseInt(index));
    index = index > 0 ? index - 1 : index;
    size = parseInt(size);
    size = size < 1 ? 1 : size;

    // filter
    return [
      ...array.filter(
        (value: any, n: any) => n >= index * size && n < (index + 1) * size
      ),
    ];
  };

  const testFilter = data.filter((d: any) =>
    d.model.toLowerCase().includes(mainFilter)
  );

  const carFilter =
    searchInput.length > 0
      ? testFilter.filter((d: any) =>
          d.model.toLowerCase().includes(searchInput.toLowerCase())
        )
      : data;

  const paginatedCars = paginate(carFilter, page, 4);

  const pageButtons = [] as any;

  for (let index = 0; index < carFilter.length / 4; index++) {
    pageButtons.push(
      <Button key={index} onClick={() => setPage(index + 1)}>
        Page {index + 1}
      </Button>
    );
  }

  const classes = useStyles();

  const CornRow = () => {
    return (
      <>
        {paginatedCars.map((data, index) => (
          <Grid key={index} item xs={6}>
            <CarCard key={index} props={data}></CarCard>
          </Grid>
        ))}
      </>
    );
  };
  const clickHandler = (props: string) => {
    setMainFilter(props);
  };
  const FilterCard = () => {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <CardActions className={classes.buttonCenter}>
          <Box
            className={classes.menuButton}
            component={Button}
            m={5}
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              setMainFilter("sarpsborg");
            }}
          >
            Sarpsborg
          </Box>
          <Box className={classes.menuButton} component={Button} m={5}>
            Moss
          </Box>
          <Box className={classes.menuButton} component={Button} m={5}>
            Fredrikstad
          </Box>
        </CardActions>
      </Card>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={3}>
          <Grid className={classes.leftGrid} item xs={2}>
            <p>Velg tilgjengelighet</p>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    //checked={}
                    //onChange={}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Til salgs"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    //checked={}
                    //onChange={}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Til leie"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    //checked={}
                    //onChange={}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Snart ledig"
              />
            </FormGroup>
            <p>Velg type</p>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    //checked={}
                    //onChange={}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Leilighet"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    //checked={}
                    //onChange={}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Hus"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    //checked={}
                    //onChange={}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Kontorer"
              />
            </FormGroup>

            <Typography id="range-slider" gutterBottom>
              Prisklasse
            </Typography>
            <Slider
              value={value}
              onChange={handleChangeSlider}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              //getAriaValueText={valuetext}
            />
          </Grid>
          <Grid item xs={10}>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={12}>
                <FilterCard></FilterCard>
              </Grid>
              <Grid item xs={12}>
                <Input
                  placeholder="Søk etter addresse her..."
                  type="text"
                  value={searchInput}
                  onChange={stateChange}
                />
              </Grid>
              <CornRow />
            </Grid>
            {pageButtons}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Welcome;
