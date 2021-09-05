import React, { useState, useEffect } from "react";
import axios from "axios";
const Lock = ({ onflipLockScreen }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    const code = input1 + input2 + input3 + input4;
    console.log(code);

    axios
      .post(
        "https://modest-ardinghelli-327ca1.netlify.app/.netlify/functions/api/unlock",
        {
          code: code,
        }
      )
      .then((data) => {
        console.log(data.data);
        if (data.data.succuss) {
          onflipLockScreen();
        }
      })
      .catch((err) => {});
  };

  return (
    <div>
      <div>
        <div className="">
          <div class="w-full overflow-hidden h-full fixed block top-0 left-0  backdrop-filter backdrop-blur-sm z-50">
            <div className=" pt-40">
              <div className="container mx-auto w-96 bg-dark-2 border-2 border-dark-3 border-solid  rounded-el">
                <div className="flex flex-row items-center justify-center mx-auto p-4 pt-20">
                  <div className="pt-4 pl-4 ">
                    <input
                      value={input1}
                      onChange={(e) => setInput1(e.target.value)}
                      maxLength="1"
                      className="w-12 px-4 py-2 bg-dark-2 text-dark-3 tex focus:outline-none border-2 border-dark-1 outline-dark-2 border-solid rounded active:outline-none"
                    ></input>
                  </div>
                  <div className="pt-4 pl-4 ">
                    <input
                      value={input2}
                      onChange={(e) => setInput2(e.target.value)}
                      maxLength="1"
                      className="w-12 px-4 py-2 bg-dark-2 focus:outline-none text-dark-3 tex  border-2 border-dark-1 outline-dark-2 border-solid rounded active:outline-none"
                    ></input>
                  </div>
                  <div className="pt-4 pl-4 ">
                    <input
                      value={input3}
                      onChange={(e) => setInput3(e.target.value)}
                      maxLength="1"
                      className="w-12 px-4 py-2 bg-dark-2 text-dark-3 tex focus:outline-none border-2 border-dark-1 outline-dark-2 border-solid rounded active:outline-none"
                    ></input>
                  </div>
                  <div className="pt-4 pl-4 ">
                    <input
                      value={input4}
                      onChange={(e) => setInput4(e.target.value)}
                      maxLength="1"
                      className="w-12 px-4 py-2 bg-dark-2 text-dark-3 tex focus:outline-none border-2 border-dark-1 outline-dark-2 border-solid rounded active:outline-none"
                    ></input>
                  </div>
                </div>
                <div className="flex items-center justify-center pb-8 pt-8">
                  <button
                    onClick={submithandler}
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
