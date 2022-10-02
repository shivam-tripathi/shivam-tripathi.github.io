import React from "react";

export default ({ Article }: { Article: React.ComponentType }) => (
  <div className="content">
    <div className="content-body">
      <Article />
    </div>
  </div>
);
