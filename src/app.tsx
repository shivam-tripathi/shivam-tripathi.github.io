import React from "react";
import SideNav from "./components/side.nav.tsx";
import Content from "./components/content.tsx";

const App = ({ Article }: { Article: React.ComponentType }) => {
  return (
    <>
      <SideNav />
      <Content Article={Article} />
    </>
  );
};

export default App;
