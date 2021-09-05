import React from "react";
import Sidebar from "./../components/Sidebar";
import docImage from "./../Asset/document.png";
// import Newfile from "./../components/Lock";
import File from "./../components/File.js";
import data from "./../utils/file.json";

const Index = () => {
  const [openFile, setOpenFile] = React.useState(false);
  const togglefileScreen = () => {
    setOpenFile(!openFile);
  };
  React.useState(() => {}, [data]);
  return (
    <div>
      {/* <Newfile /> */}
      {openFile ? <File togglefileScreen={togglefileScreen} /> : null}
      <Sidebar>
        <div className="pt-4 bg-dark-1">
          <div class=" mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10  pt-6 gap-8 pl-8">
            {data
              ? data.map((item) => {
                  return (
                    <div onClick={togglefileScreen} className="cursor-pointer">
                      <img src={docImage} alt="document" />
                      <p className="text-white pt-2 text-center text-sm">
                        {item.name}
                      </p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default Index;
