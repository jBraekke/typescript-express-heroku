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
  Card,
  Checkbox,
  Container,
  FormControlLabel,
  useMediaQuery,
} from "@material-ui/core";

import theme from "../../themes/theme";
import { useFetch } from "../../hooks/useFetch";
import { IApartment, IApartmentFilter } from "../../interfaces/IApartment";
import LoadingScreen from "../../components/loading/LoadingScreen";
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
  leftGrid: {},
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
  formLabel: {},
  checkboxCard: {
    display: "flex",
    //justifyContent: "space-between",
    flexDirection: "column",
    margin: "0",
    backgroundColor: "rgba(0, 0, 0, 0.1);",
  },
  checkboxCardDesktop: {
    display: "flex",
    justifyContent: "space-between",
    //flexDirection: "row",
    margin: "0",
    backgroundColor: "rgba(255,255,255, 0.1);",
  },
  leftCheckBox: {
    display: "flex",
    flexDirection: "column",
    minWidth: theme.spacing(20),
  },
});

const Home = () => {
  const url2 = "api/apartments/getlist";
  const { status, data } = useFetch(url2);
  const [page, setPage] = useState(1);
  const [realEstate, setData] = useState<IApartment[]>([]);
  const [filter, setFilter] = useState<IApartmentFilter>({
    apartment: true,
    incoming: true,
    house: true,
    commerce: true,
    newlyBuilt: true,
    city: "",
  });
  const predictedView1 = realEstate.filter((x) => {
    return filter.city === "" ? x : filter.city === x.city;
  });

  const predictedView = predictedView1.filter((x) => {
    return (
      (filter.apartment && x.apartment === true) ||
      (filter.incoming && x.incoming === true) ||
      (filter.house && x.house === true) ||
      (filter.commerce && x.commerce === true) ||
      (filter.newlyBuilt && x.newlyBuilt === true)
    );
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setData(data);
  }, [data]);

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
      <Box mt={6} className={classes.toolbar}>
        <Button
          className={classes.menuButton}
          onClick={() => {
            setFilter({ ...filter, city: "Sarpsborg" });
            setPage(1);
          }}
        >
          Sarpsborg
        </Button>
        <Button
          className={classes.menuButton}
          onClick={() => {
            setFilter({ ...filter, city: "Moss" });
            setPage(1);
          }}
        >
          Moss
        </Button>
        <Button
          className={classes.menuButton}
          onClick={() => {
            setFilter({ ...filter, city: "Fredrikstad" });
            setPage(1);
          }}
        >
          Fredrikstad
        </Button>
      </Box>
    );
  };

  const RightGridDesktop = () => {
    return (
      <Grid key="RightGrid" item xs={12}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12}>
            <FilterButtons />
          </Grid>
          <Grid item xs={12}>
            <TopGridDesktop></TopGridDesktop>
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
        <Grid className={classes.gridheader} container spacing={0}>
          <Container>
            <Grid container item xs={12}>
              <RightGridDesktop></RightGridDesktop>
            </Grid>
          </Container>
        </Grid>
      </div>
    ) : (
      <LoadingScreen></LoadingScreen>
    );
  };

  const TopGridMobile = () => {
    return (
      <Grid item xs={12}>
        <Card className={classes.checkboxCard}>
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
            className={classes.formLabel}
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
            className={classes.formLabel}
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
            label="Innkommende"
            className={classes.formLabel}
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
            className={classes.formLabel}
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
            className={classes.formLabel}
          />
        </Card>
      </Grid>
    );
  };

  const TopGridDesktop = () => {
    return (
      <Grid item xs={12}>
        <Card className={classes.checkboxCardDesktop}>
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
            className={classes.formLabel}
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
            className={classes.formLabel}
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
            label="Innkommende"
            className={classes.formLabel}
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
            className={classes.formLabel}
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
            className={classes.formLabel}
          />
        </Card>
      </Grid>
    );
  };

  const BottomGridMobile = () => {
    return (
      <Grid item xs={12}>
        <Grid container item xs={12}>
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
            <Grid container item xs={12}>
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
        <DesktopView></DesktopView>
      ) : matches1 ? (
        <MobileView></MobileView>
      ) : null}
    </>
  );
};

export default Home;
