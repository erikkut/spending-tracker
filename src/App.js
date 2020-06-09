import React, { useState } from "react";
import { Box, Grommet, ResponsiveContext } from "grommet";
import { CollapsibleMenu, NavigationBar, MainBody } from "./components";

const theme = {
  global: {
    colors: {
      brand: "#bd5757",
      control: "#bd5757",
      text: "white",
      background: "#181818",
      backgroundContrast: "#212121",
      focus: "#ffffff",
    },
    focus: {
      border: {
        color: "#ffffff",
      },
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
  select: {
    options: {
      container: {
        background: {
          color: "#212121",
        },
      },
    },
  },
};

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <NavigationBar
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
            />
            <Box direction='row' flex overflow={{ horizontal: "hidden" }}>
              <MainBody />

              {/* Only shows if showSideBar flag is set */}
              <CollapsibleMenu
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
                size={size}
              />
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
