import { Box, Button, Heading } from "grommet";
import { Menu } from "grommet-icons";
import React from "react";
import PropTypes from "prop-types";
import "./NavigationBar.css";

export default function NavigationBar(props) {
  var logo = require("../../resources/logo.png");
  return (
    <Box className='navigation-bar'
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: "none", right: "small", vertical: "small" }}
      elevation='medium'
      style={{ zIndex: "1" }}
      {...props}
    >
      <Box className='logo-image-container'>
        <img className='logo-image' src={logo} alt='logo' />
      </Box>
      <Heading level='3' margin='none' alignSelf='center'>
        Eric's Handy Dandy Spending Tracker
      </Heading>
      <Button
        icon={<Menu />}
        onClick={() => {document.activeElement.blur(); props.setShowSidebar(!props.showSidebar)}}
        alignSelf='end'
        hoverIndicator={true}
        focusIndicator={true}
      />
    </Box>
  );
}

NavigationBar.propTypes = {
  showSidebar: PropTypes.bool.isRequired,
  setShowSidebar: PropTypes.func.isRequired,
};
