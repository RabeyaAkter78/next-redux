import React from "react";

function Stats({ totalCount }) {
  return (
    <div className="container mx-auto my-20">
      <div className="text-2xl font-semibold text-center">Total Count:{totalCount}</div>
    </div>
  );
}

export default Stats;
