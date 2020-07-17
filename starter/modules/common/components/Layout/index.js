import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import MobileHeader from "@mobile/components/Header";

const useStyle = makeStyles({
  content: {
    marginTop: 74,
  },
});

const Layout = ({ children }) => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <MobileHeader />
      <div className={classes.content}>{children}</div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Layout;
