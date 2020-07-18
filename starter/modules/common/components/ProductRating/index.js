import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import Typgraphy from "@material-ui/core/Typography";
import Star from "@material-ui/icons/Star";
import StarHalf from "@material-ui/icons/StarHalf";

import yellow from "@material-ui/core/colors/yellow";

const useStyles = makeStyles({
  root: {
    justifyContent: "flex-end",
  },
});

const ProductRating = ({ rating, sold, alignRight }) => {
  const classes = useStyles();

  // calculate rating into star
  const starsComponent = [];

  const modulus = rating % 1; // 4.6 => 0.6
  const ratingCountFloored = Math.floor(rating); // 4.6 => 4
  // transform and push rating number (decimal) into full stars
  for (let i = 0; i < ratingCountFloored; i++) {
    starsComponent.push(
      <Star key={i} style={{ fontSize: 12, color: yellow[800] }} />
    );
  }

  // transform and push modulus number into half star
  if (modulus >= 0.5) {
    starsComponent.push(
      <StarHalf
        key={"half-star"}
        style={{ fontSize: 12, color: yellow[800] }}
      />
    );
  }
  return (
    <Grid
      container
      alignItems="center"
      className={clsx({ [classes.root]: alignRight })}
    >
      {starsComponent}
      {`(${sold})`}
    </Grid>
  );
};

ProductRating.propTypes = {
  rating: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
  alignRight: PropTypes.bool,
};

export default ProductRating;
