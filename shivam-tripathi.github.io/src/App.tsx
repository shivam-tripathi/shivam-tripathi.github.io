import { useState } from "react";
import TopNav from "./components/top-nav.tsx";
import { MinimalSideNav } from "./components/side-nav.tsx";
import Content from "./components/content.tsx";
import './App.css';

const App = ({ page }: { page: React.ComponentType }) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const [showSideNav, setShowSideNav] = useState(!isMobile);

  const toggleSideNav = () => {
    const nextShowSideNav = !showSideNav;
    setShowSideNav(nextShowSideNav);
  }

  return (
    <>
      <TopNav toggleSideNav={toggleSideNav} />
      <div className="app">
        {showSideNav ? <MinimalSideNav /> : null}
        <Content Page={page} />
      </div>
    </>
  );
};

export default App;
