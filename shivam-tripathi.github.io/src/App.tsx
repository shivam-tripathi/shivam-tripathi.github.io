import { MinimalSideNav } from "./components/side-nav.tsx";
import Content from "./components/content.tsx";
import './App.css';

const App = ({ page }: { page: React.ComponentType }) => {
  return (
    <>
      <div className="app">
        <MinimalSideNav />
        <Content Page={page} />
      </div>
    </>
  );
};

export default App;
