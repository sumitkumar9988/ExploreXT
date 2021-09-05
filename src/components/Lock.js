import React from "react";
import docimage from "./../Asset/document.png";

const Lock = ({ onflipLockScreen }) => {
  return (
    <div>
      <div>
        <div className="">
          <div class="w-full overflow-hidden h-full fixed block top-0 left-0  backdrop-filter backdrop-blur-sm z-50">
            <div className=" pt-40">
              <div className="container mx-auto w-96 bg-dark-2 border-2 border-dark-3 border-solid  rounded-el">
                <div className="flex flex-row items-center justify-center mx-auto p-4 pt-20">
                  <div className="pt-4 pl-4 ">
                    <input className="w-12 px-4 py-2 bg-dark-2 text-dark-3 tex  border-2 border-dark-1 outline-dark-2 border-solid rounded active:outline-none"></input>
                  </div>
                  <div className="pt-4 pl-4 ">
                    <input className="w-12 px-4 py-2 bg-dark-2 text-dark-3 tex  border-2 border-dark-1 outline-dark-2 border-solid rounded active:outline-none"></input>
                  </div>
                  <div className="pt-4 pl-4 ">
                    <input className="w-12 px-4 py-2 bg-dark-2 text-dark-3 tex  border-2 border-dark-1 outline-dark-2 border-solid rounded active:outline-none"></input>
                  </div>
                  <div className="pt-4 pl-4 ">
                    <input className="w-12 px-4 py-2 bg-dark-2 text-dark-3 tex  border-2 border-dark-1 outline-dark-2 border-solid rounded active:outline-none"></input>
                  </div>
                </div>
                <div className="flex items-center justify-center pb-8 pt-8">
                  <button
                    onClick={onflipLockScreen}
                    className="inline-flex items-center w-6/12  justify-center h-12 px-12 py-0 text-base font-normal text-center text-white  border-2 border-dark-1 border-solid rounded-full cursor-pointer "
                  >
                    Unlock
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lock;
