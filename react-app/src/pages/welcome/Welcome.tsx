import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CarCard from "../../components/cards/CarCard";
import Fade from "@material-ui/core/Fade";
import {
  Box,
  Button,
  Card,
  CardActions,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Input,
  Slide,
  Slider,
  Typography,
} from "@material-ui/core";

import theme from "../../themes/theme";
import { useFetch } from "../../hooks/useFetch";

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
    borderRadius: 10,
    borderWidth: "10px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  inputStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.2);",
  },
  leftGrid: {
    marginTop: theme.spacing(30),
    display: "flex",
    flexDirection: "column",
  },
  gridheader: {
    backgroundImage: "url(stairs.jpg)",
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover",
  },
});

const Welcome = () => {
  const url = "http://localhost:1337/api/apartments/getlist";
  //const [data, setData] = useState([] as any);
  const { status, data, error } = useFetch(url);
  const [page, setPage] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [mainFilter, setMainFilter] = useState("");
  const [test, setTest] = useState(true);

  const [value, setValue] = React.useState([100, 37]);
  const stateChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchInput(event.target.value);
    if (searchInput.length >= 0) setPage(1);
  };
  const handleChangeSlider = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const handleChange = () => {
    setTest((prev) => !prev);
  };

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
  /*
  const testFilter = data.filter((d: any) =>
    d.model.toLowerCase().includes(mainFilter)
  );*/
  /*
  const carFilter =
    searchInput.length > 0
      ? testFilter.filter((d: any) =>
          d.model.toLowerCase().includes(searchInput.toLowerCase())
        )
      : data;*/

  const paginatedApartments = paginate(data, page, 4);

  const pageButtons = [] as any;

  for (let index = 0; index < data.length / 4; index++) {
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
        {paginatedApartments.map((data, index) => (
          <Fade
            in={test}
            style={{ transformOrigin: "0 0 0" }}
            {...(test ? { timeout: 2000 } : {})}
          >
            <Grid key={index} item xs={6}>
              <CarCard key={index} props={data}></CarCard>
            </Grid>
          </Fade>
        ))}
      </>
    );
  };

  const FilterCard = () => {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <CardActions className={classes.buttonCenter}>
          <Box className={classes.menuButton} component={Button} m={5}>
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

  const FilterButtons = () => {
    return (
      <Box mt={2} className={classes.toolbar}>
        <Button className={classes.menuButton}>Sarpsborg</Button>
        <Button className={classes.menuButton}>Moss</Button>
        <Button className={classes.menuButton}>Fredrikstad</Button>
      </Box>
    );
  };

  const LeftGrid = () => {
    return (
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
        <p>Velg type(TRYKK PÅ LEILIGHET FOR Å SE)</p>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={test}
                onChange={handleChange}
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
    );
  };

  const RightGrid = () => {
    return (
      <Grid item xs={10}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12}>
            <FilterButtons />
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
    );
  };

  return (
    <div className={classes.root}>
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <Grid className={classes.gridheader} container spacing={0}>
          <Container>
            <Grid container item xs={12} spacing={3}>
              <LeftGrid></LeftGrid>
              <RightGrid></RightGrid>
            </Grid>
          </Container>
        </Grid>
      </Slide>
    </div>
  );
};

export default Welcome;
