import React from "react";
import SingleNote from "./components/SingleNote";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-800 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        <SingleNote />
      </div>
    </div>
  );
};

export default App;
