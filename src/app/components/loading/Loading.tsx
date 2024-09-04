import { memo } from "react";

export default memo(function Loading() {
  return (
    <div className="loader-container">
      <div className="content">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
      </div>
      <h2 className="text-white pt-80 text-4xl">Dgtaliza</h2>
    </div>
  );
});
