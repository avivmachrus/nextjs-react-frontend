import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ProductRating from "@common/components/ProductRating";
import { currencyFormatter } from "@utils/currency";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(8),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", //16:9 image ratio
  },
  productInfo: {
    marginTop: theme.spacing(2),
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const ProductDetailCard = ({
  img,
  title,
  price,
  rating,
  sold,
  description,
  quantity,
  condition,
  weight,
  promo,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => setExpanded(!expanded);

  return (
    <div className={classes.container}>
      <Card>
        <CardMedia className={classes.media} image={img} title={title} />
        <CardContent>
          {/* title item */}
          <Typography variant="h5" component="h1" gutterBottom>
            {title}
          </Typography>

          {/* product rating & price container */}
          <Grid container spacing={1}>
            {/* price item */}
            <Grid item xs={6} sm={6}>
              <Typography variant="button" color="secondary">
                {currencyFormatter(price)}
              </Typography>
            </Grid>

            {/* rating and sold item */}
            <Grid item xs={6} sm={6}>
              <ProductRating rating={rating} sold={sold} alignRight />
            </Grid>
          </Grid>

          {/* product info container */}
          <Grid container spacing={1} className={classes.productInfo}>
            {/* weight item */}
            <Grid
              container
              direction="column"
              justify="center"
              item
              xs={3}
              sm={3}
            >
              <Typography align="center" variant="overline">
                Berat
              </Typography>
              <Typography align="center" variant="button">
                {weight}
              </Typography>
            </Grid>

            {/* condition item */}
            <Grid
              container
              direction="column"
              justify="center"
              item
              xs={3}
              sm={3}
            >
              <Typography align="center" variant="overline">
                Kondisi
              </Typography>
              <Typography align="center" variant="button">
                {condition}
              </Typography>
            </Grid>

            {/* stock item */}
            <Grid
              container
              direction="column"
              justify="center"
              item
              xs={3}
              sm={3}
            >
              <Typography align="center" variant="overline">
                Stock
              </Typography>
              <Typography align="center" variant="button">
                {quantity}
              </Typography>
            </Grid>

            {/* sold item */}
            <Grid
              container
              direction="column"
              justify="center"
              item
              xs={3}
              sm={3}
            >
              <Typography align="center" variant="overline">
                Terjual
              </Typography>
              <Typography align="center" variant="button">
                {sold}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>

        {/* description show hide handler */}
        <CardActions>
          <Grid container justify="center" alignItems="center">
            <IconButton
              onClick={handleExpandClick}
              // clsx default class classes.expand
              // when expanded = true, class become classes.expandOpen
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Grid>
        </CardActions>

        {/* product description info */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="subtitle2">
              Deskripsi
            </Typography>
            <Typography paragraph variant="body2">
              {description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

ProductDetailCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  promo: PropTypes.array.isRequired,
};

export default ProductDetailCard;
