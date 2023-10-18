import React from "react";

function Page({ pageType }) {
  let component; // blank component that gets filled in the switch statements
  let hero;

  switch (pageType) {
    case "Home":
      component = <Home />; //example of filled in switch statement
      break;

    case "About":
      component = <About />;
      break;

    case "Team":
      component = <Team />;
      break;

    case "Portfolio":
      component = <Portfolio />;
      break;

    case "Contact":
      component = <Contact />;
      break;

      return (
        <>
          <div>Page</div>
        </>
      );
  }
}

export default Page;
