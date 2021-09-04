import React from "react";
import Sidebar from "./../components/Sidebar";
import docImage from "./../Asset/document.png";
import Newfile from "./../components/Lock";
const Index = () => {
  return (
    <div>
      <Newfile />
      <Sidebar>
        <div className="pt-4 bg-dark-1">
          <div class=" mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10  pt-6 gap-8 pl-8">
            <div className="cursor-pointer">
              <img src={docImage} alt="document" />
              <p className="text-white pt-2 text-center text-sm">White</p>
            </div>
            <div className="cursor-pointer">
              <img src={docImage} alt="document" />
              <p className="text-white pt-2 text-center text-sm">Black</p>
            </div>{" "}
            <div className="cursor-pointer">
              <img src={docImage} alt="document" />
              <p className="text-white pt-2 text-center text-sm">Wooden</p>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default Index;
