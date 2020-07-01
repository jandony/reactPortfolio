import React from "react";

// Material UI Utilities
import Hidden from "@material-ui/core/hidden";

// Custom components
import HeaderLaptop from "./components/HeaderLaptop";
import HeaderTablet from "./components/HeaderTablet";
import HeaderMobile from "./components/HeaderMobile";

function App() {
  return (
    <React.Fragment>
      <Hidden mdDown>
        <HeaderLaptop />
      </Hidden>

      <Hidden only={['xs', 'lg', 'xl']}>
        <HeaderTablet />
      </Hidden>

      <Hidden smUp>
        <HeaderMobile />
      </Hidden>
    </React.Fragment>
  );
}

export default App;
