import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Accordion } from "@material-ui/core";
import { AccordionDetails } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const ProductInfoPanel = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* panel1a content */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-control="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Product Info 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est
            dolor, ultrices id blandit et, dignissim eget mauris. Fusce sit amet
            consequat risus, ut volutpat quam. Ut feugiat commodo felis, sit
            amet commodo lacus scelerisque non. Donec vel diam in eros aliquet
            mattis in sed urna.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* panel2a content */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-control="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Product Info 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est
            dolor, ultrices id blandit et, dignissim eget mauris. Fusce sit amet
            consequat risus, ut volutpat quam. Ut feugiat commodo felis, sit
            amet commodo lacus scelerisque non. Donec vel diam in eros aliquet
            mattis in sed urna.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* panel3a content */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-control="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Product Info 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est
            dolor, ultrices id blandit et, dignissim eget mauris. Fusce sit amet
            consequat risus, ut volutpat quam. Ut feugiat commodo felis, sit
            amet commodo lacus scelerisque non. Donec vel diam in eros aliquet
            mattis in sed urna.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ProductInfoPanel;
