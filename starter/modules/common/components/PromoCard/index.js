import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)",
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const PromoCard = ({ promo }) => {
  const classes = useStyles();

  const capitalizePromoLabel = (prm) => {
    let res;
    switch (prm) {
      case "CASHBACK":
        res = "Cashback";
        break;
      case "FREESHIPPING":
        res = "Free Shipping";
        break;

      default:
        res = "invalid Promo Label";
        break;
    }
    return res;
  };

  const breakPoints = promo.length > 1 ? 6 : 12;

  if (promo.length > 0) {
    return (
      <Grid container spacing={1}>
        {promo.map((prm, index) => {
          return (
            <Grid item key={index} xs={breakPoints} sm={breakPoints}>
              <Paper variant="outlined" classes={{ root: classes.root }}>
                <Typography>{capitalizePromoLabel(prm)}</Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    );
  } else {
    return null;
  }
};

PromoCard.propTypes = {
  promo: PropTypes.array.isRequired,
};

export default PromoCard;
