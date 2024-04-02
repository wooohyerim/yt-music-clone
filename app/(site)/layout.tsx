import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      (site)/layout이 먼저 렌더 되고
      {children}
    </div>
  );
};

export default layout;
