import React from 'react'
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const NavBar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <div>
          <h1>
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              width="100px"
              alt="logo"
            />
          </h1>
        </div>
        <div>
          <Button
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuRoundedIcon />
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            PaperProps={{
              style: {
                marginTop: "50px",
                padding: "25px",
              },
            }}
          >
            <MenuItem
              onClick={handleClose}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#ffaaee")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffffff")}
            >
              Clients
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#ffaaee")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffffff")}
            >
              Work
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#ffaaee")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffffff")}
            >
              About
            </MenuItem>
          </Menu>
        </div>
      </Grid>
    </div>
  );
}

export default NavBar
