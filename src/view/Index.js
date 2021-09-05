import React from "react";
import axios from "axios";
import Sidebar from "./../components/Sidebar";
import docImage from "./../Asset/document.png";
// import Newfile from "./../components/Lock";
import File from "./../components/File.js";
import data from "./../utils/file.json";

const Index = () => {
  const [openFile, setOpenFile] = React.useState(false);
  const [file, setfile] = React.useState(false);
  const togglefileScreen = () => {
    setOpenFile(!openFile);
  };
  React.useEffect(() => {
    axios
      .get(
        "https://modest-ardinghelli-327ca1.netlify.app/.netlify/functions/api/file"
      )
      .then((data) => {
        setfile(data.data.file);
      });
  }, [file]);
  return (
    <div>
      {/* <Newfile /> */}
      {openFile ? <File togglefileScreen={togglefileScreen} /> : null}
      <Sidebar>
        <div className="pt-4 bg-dark-1">
          <div class=" mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10  pt-6 gap-8 pl-8">
            {file &&
              file.map((item) => {
                return (
                  <div onClick={togglefileScreen} className="cursor-pointer">
                    <img src={docImage} alt="document" />
                    <p className="text-white pt-2 text-center text-sm">
                      {item.name}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default Index;
