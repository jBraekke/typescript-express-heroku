import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CarCard from "../../components/cards/CarCard";
import { Button, Input } from "@material-ui/core";

const useStyles = makeStyles({
  root: { flexGrow: 1 },
});

const Welcome = () => {
  const [data, setData] = useState([] as any);
  const [page, setPage] = useState(0);
  const [searchInput, setSearchInput] = useState("");

  const stateChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchInput(event.target.value);
    if (searchInput.length >= 0) setPage(1);
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
  }, []);

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

  const carFilter =
    searchInput.length > 0
      ? data.filter((d: any) =>
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

  return (
    <div className={classes.root}>
      <Input
        placeholder="Search for cars here.."
        type="text"
        value={searchInput}
        onChange={stateChange}
      />

      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <CornRow />
        </Grid>
      </Grid>
      {pageButtons}
    </div>
  );
};

export default Welcome;
