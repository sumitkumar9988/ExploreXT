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
            <div className="block navbar-menu pb-2  relative z-50 ">
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
                          <span>Home</span>
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
                          <span>Home</span>
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
                          <span>Home</span>
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
                          <span>Home</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center mt-40 pl-3 py-2 pr-4 rounded ">
                        <button className="inline-flex items-center w-full  justify-center h-12 px-10 py-0 text-base font-normal text-center text-white no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-dark-1 border-solid rounded-full cursor-pointer ">
                          Lock
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="mx-auto lg:ml-80 divide-y-l divide-white">
              <section className="py-6 px-6 bg-dark-1  ">
                <nav className="relative">
                  <div className="flex items-center ">
                    <div className="flex items-center mr-auto"> </div>

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
                      <li>
                        <p className="text-gray-200 hover:text-gray-300">
                          <svg
                            className="h-5 w-5"
                            viewbox="0 0 16 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </p>
                      </li>
                    </ul>
                    <div>
                      <button className="flex items-center w-10 h-10 rounded-full bg-primary-2 mr-2">
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
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
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
