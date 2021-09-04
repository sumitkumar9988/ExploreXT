import React from "react";
import logo from "./../Asset/logo.png";
import folderOpen from "./../Asset/folder-open.png";
import folderClose from "./../Asset/folder-closed.png";
const Sidebar = (props) => {
  const [open, setOpen] = React.useState(false);

  const onflipSide = () => {
    setOpen(!open);
  };

  return (
    <div>
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
                        <button className="inline-flex items-center w-full  justify-center h-12 px-10 py-0 text-base font-normal text-center text-white  border-2 border-dark-1 border-solid rounded-full cursor-pointer ">
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

                    <ul className="flex lg:justify-end ml-auto mr-6">
                      <li className="mr-6">
                        <p className="text-gray-200 hover:text-gray-300">
                          <svg
                            className="h-5 w-5"
                            viewbox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V14C0 14.7956 0.316071 15.5587 0.87868 16.1213C1.44129 16.6839 2.20435 17 3 17H5.59L8.29 19.71C8.38344 19.8027 8.49426 19.876 8.61609 19.9258C8.73793 19.9755 8.86839 20.0008 9 20C9.23834 20 9.46886 19.9149 9.65 19.76L12.87 17H15C15.7956 17 16.5587 16.6839 17.1213 16.1213C17.6839 15.5587 18 14.7956 18 14V3C18 2.20435 17.6839 1.44129 17.1213 0.87868C16.5587 0.316071 15.7956 0 15 0ZM16 14C16 14.2652 15.8946 14.5196 15.7071 14.7071C15.5196 14.8946 15.2652 15 15 15H12.5C12.2617 15 12.0311 15.0851 11.85 15.24L9.05 17.64L6.71 15.29C6.61656 15.1973 6.50574 15.124 6.38391 15.0742C6.26207 15.0245 6.13161 14.9992 6 15H3C2.73478 15 2.48043 14.8946 2.29289 14.7071C2.10536 14.5196 2 14.2652 2 14V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H15C15.2652 2 15.5196 2.10536 15.7071 2.29289C15.8946 2.48043 16 2.73478 16 3V14Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </p>
                      </li>
                    </ul>
                    <div>
                      <button className="flex items-center w-10 h-10 rounded-full bg-gradient-to-r from-primary-1 to-primary-2 mr-2">
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
                      <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-dark-2 divide-y-2 divide-dark-1">
                        <div class="block  px-4 py-2 text-md text-white  ">
                          File
                        </div>
                        <div class="block  px-4 py-2 text-md text-white  ">
                          Folder
                        </div>
                      </div>
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
