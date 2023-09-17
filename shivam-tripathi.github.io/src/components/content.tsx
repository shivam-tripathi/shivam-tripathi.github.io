import React from "react";

import './content.css';

const Content = ({ Page }: { Page: React.ComponentType }) => (
  <div className="content">
    <div className="content-body">
      <Page />
      <p style={{paddingTop: '100px'}}></p>
    </div>
  </div>
);

export default Content;
