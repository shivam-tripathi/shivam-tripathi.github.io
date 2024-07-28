import React, { useEffect } from "react";

import './content.css';
import { useLocation } from "react-router-dom";

const Content = ({ Page }: { Page: React.ComponentType }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const { pathname } = useLocation();
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      ref.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return <div className="content">
    <div ref={ref}></div>
    <div className="content-body">
      <Page />
      <p style={{paddingTop: '100px'}}></p>
    </div>
  </div>;
};

export default Content;
