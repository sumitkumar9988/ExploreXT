import React from "react";
import logo from "./../Asset/logo.png";
import folderOpen from "./../Asset/folder-open.png";
import folderClose from "./../Asset/folder-closed.png";
import Lock from "./../components/Lock";
import NewFile from "./../components/Newfile";

const Sidebar = (props) => {
  const [lockScreen, setLockScreen] = React.useState(true);
  const [openDrpDown, setopenDrpDown] = React.useState(false);
  const [openNewFile, setopenNewFile] = React.useState(false);

  const onflipDropDown = () => {
    setopenDrpDown(!openDrpDown);
  };
  const onflipLockScreen = () => {
    setLockScreen(!lockScreen);
  };
  const onOpenNewFile = () => {
    setopenNewFile(!openNewFile);
  };

  return (
    <div>
      {lockScreen && <Lock onflipLockScreen={onflipLockScreen} />}
      {openNewFile && <NewFile onOpenNewFile={onOpenNewFile} />}
      <body className="antialiased bg-body text-body font-body overflow ">
        <div>
          <div>
            <div className="block navbar-menu pb-2  relative z-10 ">
              <nav className="fixed top-0 left-0 bottom-0 m-6 overflow-y-hidden overflow-x-hidden rounded-large flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-dark-2  ">
                <div className="flex w-full items-center px-6 pb-6 mb-6">
                  <div className="flex item-center">
                    <img src={logo} alt="logo" width="45px" height="45px" />
                    <p className="text-2xl pt-1 pl-4 text-center font-bold tracking-tighter text-white">
                      ExploreXT
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-6">
                  <ul className="mb-8 text-sm font-medium">
                    <li>
                      <div className="flex items-center mt-2 pl-3 py-2 pr-4 rounded bg-dark-1">
                        <p className="flex items-center text-gray-500 ">
                          <span className="inline-block mr-3 ">
                            <img
                              src={folderOpen}
                              width="25px"
                              height="25px"
                              alt="logo"
                            />
                          </span>{" "}
                          <span>Instruments</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center mt-2 ml-6 pl-3 py-2 pr-4 rounded bg-dark-1">
                        <p className="flex items-center text-gray-500 ">
                          <span className="inline-block mr-3 ">
                            <img
                              src={folderOpen}
                              width="25px"
                              height="25px"
                              alt="logo"
                            />
                          </span>{" "}
                          <span>Fenders</span>
                        </p>
                      </div>
                    </li>{" "}
                    <li>
                      <div className="flex items-center mt-2 ml-12 pl-3 py-2 pr-4 rounded bg-dark-1">
                        <p className="flex items-center text-gray-500 ">
                          <span className="inline-block mr-3 ">
                            <img
                              src={folderOpen}
                              width="25px"
                              height="25px"
                              alt="logo"
                            />
                          </span>{" "}
                          <span>Acoustic guiter</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center mt-2 ml-12 pl-3 py-2 pr-4 rounded bg-black">
                        <p className="flex items-center text-gray-500 ">
                          <span className="inline-block mr-3 ">
                            <img
                              src={folderClose}
                              width="25px"
                              height="25px"
                              alt="logo"
                            />
                          </span>{" "}
                          <span>Electric guiter</span>
                        </p>
                      </div>
                    </li>{" "}
                    <li>
                      {/* <div className="border-l-2 border-gray-300 h-12"/> */}
                      <div className="flex items-center  mt-2 ml-6 pl-3 py-2 pr-4 rounded bg-dark-1">
                        {/* <div className="border-l-2 border-gray-300 h-8 "/> */}
                        <p className="flex items-center text-gray-500 ">
                          <span className="inline-block mr-3 ">
                            <img
                              src={folderClose}
                              width="25px"
                              height="25px"
                              alt="logo"
                            />
                          </span>{" "}
                          <span>Yamaha</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center mt-2 pl-3 py-2 pr-4 rounded bg-dark-1">
                        <p className="flex items-center text-gray-500 ">
                          <span className="inline-block mr-3 ">
                            <img
                              src={folderClose}
                              width="25px"
                              height="25px"
                              alt="logo"
                            />
                          </span>{" "}
                          <span>Songs</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center mt-40 pl-3 py-2 pr-4 rounded ">
                        <button
                          onClick={onflipLockScreen}
                          className="inline-flex items-center w-full  justify-center h-12 px-10 py-0 text-base font-normal text-center text-white  border-2 border-dark-1 border-solid rounded-full cursor-pointer "
                        >
                          Lock
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="mx-auto lg:ml-80 divide-y-l divide-dark-2 pl-16 pr-16">
              <section className="py-6 px-6 bg-dark-1  ">
                <nav className="relative">
                  <div className="flex items-center ">
                    <div className="flex items-center mr-auto">
                      {" "}
                      <div className="">
                        <p className="text-white text-sm font-medium">
                          Instruments / Fender / Electric guiter
                        </p>
                      </div>
                    </div>

                    <ul className="flex group lg:justify-end ml-auto mr-6">
                      <li className="mr-2">
                        <span>
                          {" "}
                          <input
                            className="w-full px-8 py-2 h-12 bg-dark-2 text-white focus:outline-none group-hover:scale-110 rounded-full  -pt-2  border-2 border-dark-1 outline-dark-2 border-solid  active:outline-none"
                            placeholder="Search"
                          ></input>
                        </span>
                        <span></span>
                      </li>
                      <li className="">
                        <button className="opacity-100 -ml-16 w-full px-4 py-2 h-12 bg-dark-2 group-hover:opacity-100 rounded-full text-dark-3 tex   border-solid  active:outline-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </button>
                      </li>
                    </ul>

                    <div>
                      <button
                        onClick={onflipDropDown}
                        className="flex items-center w-10 h-10 rounded-full bg-gradient-to-r from-primary-1 to-primary-2 mr-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 pl-2 "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#e9686a"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                      {openDrpDown && (
                        <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-dark-2 divide-y-2 divide-dark-1">
                          <button
                            onClick={onOpenNewFile}
                            class="block  px-4 py-2 text-md text-white  "
                          >
                            File
                          </button>
                          <div class="block  px-4 py-2 text-md text-white  ">
                            Folder
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </nav>
              </section>
              <div className="bg-gray-50 h-full ">{props.children}</div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Sidebar;
