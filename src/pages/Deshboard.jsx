import React from "react";
import Sidebar from "../components/Deshboard/Sidebar";
import DeshboardMain from "../components/Deshboard/DeshboardMain";

const Deshboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <DeshboardMain />
    </div>
  );
};

export default Deshboard;
