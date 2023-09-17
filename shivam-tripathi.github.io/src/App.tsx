import TopNav from "./components/top-nav.tsx";
import SideNav from "./components/side-nav.tsx";
import Content from "./components/content.tsx";
import './App.css';

const App = ({ page }: { page: React.ComponentType }) => {
  return (
    <>
      <TopNav />
      <div className="app">
        <SideNav />
        <Content Page={page} />
      </div>
    </>
  );
};

export default App;
