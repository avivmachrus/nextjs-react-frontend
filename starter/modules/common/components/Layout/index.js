import React from "react";
import PropTypes from "prop-types";
import { makeStyle } from "@material-ui/core/styles";

const useStyle = makeStyle({
  content: {
    marginTop: 74,
  },
});

const Layout = ({ children }) => {
  const classes = useStyle();

  return (
    <React.Fragment>
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
