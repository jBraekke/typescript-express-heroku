import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ApartmentCard from "../../components/cards/ApartmentCard";
import Fade from "@material-ui/core/Fade";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Input,
  Slide,
  Slider,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

import theme from "../../themes/theme";
import { useFetch } from "../../hooks/useFetch";
import { IApartment, IApartmentFilter } from "../../interfaces/IApartment";

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
  topGrid: {
    display: "flex",
    flexDirection: "column",
    //position: "static",
  },
  gridheader: {
    backgroundImage: "url(stairs.jpg)",
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover",
  },
  test: {
    height: "2000px",
    display: "flex",
    justifyContent: "center",
    alignitems: "center",
    textAlign: "center",
    backgroundImage: "url(navsmoke3.jpg)",
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover",
    opacity: "40%",
  },
  pictureLogo: {
    marginTop: theme.spacing(10),
    height: theme.spacing(10),
    width: theme.spacing(10),
  },
});

const Home = () => {
  const url = "http://localhost:1337/api/apartments/getlist";
  //const [data, setData] = useState([] as any);
  const { status, data } = useFetch(url);
  const [page, setPage] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [slideValues, setSlideValues] = useState<number[]>([]);
  const [realEstate, setData] = useState<IApartment[]>([]);
  const [test, setTest] = useState(true);
  const [filter, setFilter] = useState<IApartmentFilter>({
    apartment: false,
    incoming: false,
    house: false,
    commerce: false,
    newlyBuilt: false,
  });

  const predictedView = realEstate.filter((x) => {
    return x.price >= value[0] && x.price <= value[1]; // && (filter.housing && x.type === "house")
  });

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
  const getMinAndMaxPrice = (data: IApartment[]) => {
    const prices = data.map((x: IApartment) => x.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return [min, max];
  };

  useEffect(() => {
    setValue(getMinAndMaxPrice(data));
    setSlideValues(getMinAndMaxPrice(data));
    setData(data);
  }, [data]);

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
            <Grid key={index} item xs={12} md={6}>
              <ApartmentCard key={index} props={data}></ApartmentCard>
            </Grid>
          </Fade>
        ))}
      </>
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

  const LeftGridDesktop = () => {
    return (
      <Grid className={classes.leftGrid} item xs={2}>
        <Typography id="range-slider" gutterBottom>
          Prisklasse
        </Typography>
        <Slider
          value={value}
          onChange={handleChangeSlider}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          //getAriaValueText={valuetext}
          title="rangeSlider"
        />
      </Grid>
    );
  };

  const RightGridDesktop = () => {
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
              id="searchInput"
            />
          </Grid>
          <CornRow />
        </Grid>
        {pageButtons}
      </Grid>
    );
  };

  const DesktopView = () => {
    return status === "fetched" ? (
      <div className={classes.root}>
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
          <Grid className={classes.gridheader} container spacing={0}>
            <Container>
              <Grid container item xs={12} spacing={3}>
                <LeftGridDesktop></LeftGridDesktop>
                <RightGridDesktop></RightGridDesktop>
              </Grid>
            </Container>
          </Grid>
        </Slide>{" "}
      </div>
    ) : (
      <div className={classes.test}>
        <Avatar
          className={classes.pictureLogo}
          alt="logo"
          src="vestengveien1.jpg"
        />
      </div>
    );
  };

  const TopGridMobile = () => {
    return (
      <Grid className={classes.topGrid} item xs={12}>
        <p>Velg tilgjengelighet</p>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                //checked={}
                //onChange={}
                name="checkedB"
                color="primary"
                id="checkedTilSalgs"
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
                id="checkedTilLeie"
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
                id="checkedSnartLedig"
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
          title="rangeSlider"
        />
      </Grid>
    );
  };

  const BottomGridMobile = () => {
    return (
      <Grid item xs={12}>
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
              id="searchInput"
            />
          </Grid>
          <CornRow />
        </Grid>
        {pageButtons}
      </Grid>
    );
  };

  const MobileView = () => {
    return status === "fetched" ? (
      <div className={classes.root}>
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
          <Grid className={classes.gridheader} container spacing={0}>
            <Container>
              <Grid container item xs={12} spacing={3}>
                <TopGridMobile></TopGridMobile>
                <BottomGridMobile></BottomGridMobile>
              </Grid>
            </Container>
          </Grid>
        </Slide>{" "}
      </div>
    ) : (
      <div className={classes.test}>
        <Avatar
          className={classes.pictureLogo}
          alt="logo"
          src="vestengveien1.jpg"
        />
      </div>
    );
  };
  const matches1 = useMediaQuery(theme.breakpoints.down("xs"));
  const matches2 = useMediaQuery(theme.breakpoints.up("sm"));
  const matches3 = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      {matches3 ? (
        <DesktopView></DesktopView>
      ) : matches2 ? (
        <MobileView></MobileView>
      ) : matches1 ? (
        <MobileView></MobileView>
      ) : null}
    </>
  );
};

export default Home;
