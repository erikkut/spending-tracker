import React from "react";
import { Box, Collapsible } from "grommet";
import PropTypes from "prop-types";

export default function CollapsibleMenu(props) {
  return (
    <Collapsible direction='horizontal' open={props.showSidebar}>
      <Box
        flex
        width={props.size !== "small" ? "medium" : "large"}
        background='backgroundContrast'
        elevation='small'
        align='center'
        justify='center'
      >
        side bar stuff
      </Box>
    </Collapsible>
  );
}

CollapsibleMenu.propTypes = {
  showSidebar: PropTypes.bool.isRequired,
  setShowSidebar: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
};
