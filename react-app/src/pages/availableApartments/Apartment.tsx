import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ApartmentCard from "../../components/cards/ApartmentCard";
import Fade from "@material-ui/core/Fade";
import Pagination from "@material-ui/lab/Pagination";
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

  const { status, data } = useFetch(url);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [realEstate, setData] = useState<IApartment[]>([]);

  const [filter, setFilter] = useState<IApartmentFilter>({
    apartment: true,
    incoming: true,
    house: true,
    commerce: true,
    newlyBuilt: true,
    city: "",
  });

  const predictedView = realEstate.filter((x) => {
    return ((filter.apartment && x.apartment === true) ||
      (filter.incoming && x.incoming === true) ||
      (filter.house && x.house === true) ||
      (filter.commerce && x.commerce === true) ||
      (filter.newlyBuilt && x.newlyBuilt === true)) &&
      filter.city === ""
      ? x
      : filter.city === x.city;
  });

  useEffect(() => {
    setData(data);
  }, [data]);

  const stateChange = (event: any) => {
    setSearchInput(event.target.value);
    //if (searchInput.length >= 0) setPage(1);
  };
  const handleChange = (event: any, value: number) => {
    setPage(value);
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
  const paginatedApartments = paginate(predictedView, page, 4);
  const classes = useStyles();

  const CornRow = () => {
    return (
      <>
        {paginatedApartments.map((data, index) => (
          <Fade
            in={true}
            style={{ transformOrigin: "0 0 0" }}
            {...(true ? { timeout: 2000 } : {})}
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
        <Button
          className={classes.menuButton}
          onClick={() => setFilter({ ...filter, city: "Sarpsborg" })}
        >
          Sarpsborg
        </Button>
        <Button
          className={classes.menuButton}
          onClick={() => setFilter({ ...filter, city: "Moss" })}
        >
          Moss
        </Button>
        <Button
          className={classes.menuButton}
          onClick={() => setFilter({ ...filter, city: "Fredrikstad" })}
        >
          Fredrikstad
        </Button>
      </Box>
    );
  };

  const LeftGridDesktop = () => {
    return (
      <Grid className={classes.leftGrid} item xs={2}>
        <Typography>Velg type bolig (Velg en eller flere)</Typography>
        <FormControlLabel
          control={
            <Checkbox
              onChange={() => setFilter({ ...filter, house: !filter.house })}
              name="checkedHouse"
              color="primary"
              value={filter.house}
              checked={filter.house}
            />
          }
          label="Hus"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={() =>
                setFilter({ ...filter, apartment: !filter.apartment })
              }
              name="checkedApartment"
              color="primary"
              value={filter.apartment}
              checked={filter.apartment}
            />
          }
          label="Leilighet"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={() =>
                setFilter({ ...filter, incoming: !filter.incoming })
              }
              name="checkedIncoming"
              color="primary"
              value={filter.incoming}
              checked={filter.incoming}
            />
          }
          label="Innkommende leilighet"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={() =>
                setFilter({ ...filter, commerce: !filter.commerce })
              }
              name="checkedCommerce"
              color="primary"
              value={filter.commerce}
              checked={filter.commerce}
            />
          }
          label="Næringsbygg"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={() =>
                setFilter({ ...filter, newlyBuilt: !filter.newlyBuilt })
              }
              name="checkedB"
              color="primary"
              value={filter.newlyBuilt}
              checked={filter.newlyBuilt}
            />
          }
          label="Nybygg"
        />
      </Grid>
    );
  };

  const RightGridDesktop = () => {
    return (
      <Grid key="RightGrid" item xs={10}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12}>
            <FilterButtons />
          </Grid>
          <Grid item xs={12}>
            <Pagination
              count={Math.ceil(predictedView.length / 4)}
              page={page}
              onChange={handleChange}
            />
          </Grid>
          <CornRow />
          <Grid item xs={12}>
            <Pagination
              count={Math.ceil(predictedView.length / 4)}
              page={page}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
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
      <Grid item xs={12}>
        <Typography>Velg type bolig (Velg en eller flere)</Typography>
        <FormControlLabel
          control={
            <Checkbox
              onChange={() => setFilter({ ...filter, house: !filter.house })}
              name="checkedHouse"
              color="primary"
              value={filter.house}
              checked={filter.house}
            />
          }
          label="Hus"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={() =>
                setFilter({ ...filter, apartment: !filter.apartment })
              }
              name="checkedApartment"
              color="primary"
              value={filter.apartment}
              checked={filter.apartment}
            />
          }
          label="Leilighet"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={() =>
                setFilter({ ...filter, incoming: !filter.incoming })
              }
              name="checkedIncoming"
              color="primary"
              value={filter.incoming}
              checked={filter.incoming}
            />
          }
          label="Innkommende leilighet"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={() =>
                setFilter({ ...filter, commerce: !filter.commerce })
              }
              name="checkedCommerce"
              color="primary"
              value={filter.commerce}
              checked={filter.commerce}
            />
          }
          label="Næringsbygg"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={() =>
                setFilter({ ...filter, newlyBuilt: !filter.newlyBuilt })
              }
              name="checkedB"
              color="primary"
              value={filter.newlyBuilt}
              checked={filter.newlyBuilt}
            />
          }
          label="Nybygg"
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
          <TopGridMobile></TopGridMobile>
          <Grid item xs={12}>
            <Pagination
              count={Math.ceil(predictedView.length / 4)}
              page={page}
              onChange={handleChange}
            />
          </Grid>
          <CornRow />
          <Grid item xs={12}>
            <Pagination
              count={Math.ceil(predictedView.length / 4)}
              page={page}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const MobileView = () => {
    return status === "fetched" ? (
      <div className={classes.root}>
        <Grid className={classes.gridheader} container spacing={0}>
          <Container>
            <Grid container item xs={12} spacing={3}>
              <BottomGridMobile></BottomGridMobile>
            </Grid>
          </Container>
        </Grid>
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
