import react from "react";
import Link from "next/link";
import { makeStyle } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyle = makeStyle((theme) => {
  root: {
    flex: 1;
  }
  menuButton: {
    marginRight: theme.spacing(2);
  }
});

const Header = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <ToolBar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Link href="/">
            <Typography variant="h6">Ecommerce Frontend</Typography>
          </Link>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default Header;