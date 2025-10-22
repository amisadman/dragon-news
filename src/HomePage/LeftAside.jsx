import React, { Suspense } from "react";
import Category from "../components/Category";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-spinner loading-sm"></span>}
      >
        <Category></Category>
      </Suspense>
    </div>
  );
};

export default LeftAside;
