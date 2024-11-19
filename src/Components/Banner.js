import React, { useState } from "react";

export default function Banner() {
  let styleH1 = {
    textShadow: `
      1px 1px 2px #5A002C,  
      1px 1px 2px #5A002C,  
      2px 2px 4px rgba(90, 0, 44, 0.6) 
    `,
  };
  let styleH2 = {
    textShadow: `
      1px 1px 2px rgba(90, 0, 44, 0.5), 
      2px 2px 5px rgba(90, 0, 44, 0.4)
    `,
  };

  const [visability, setVisability] = useState(true);
  const [isRefreshed, setIsRefreshed] = useState(false);
  const toggleVisability = () => {
    setVisability(!visability);
    setIsRefreshed(true);
  };

  return (
    <>
      <header
        className="flex items-center justify-center top-0 opacity-0 animate-fadeInTop h-min w-full"
        style={{ animationDelay: "2500ms" }}
      >
        <button
          className={!visability?"inline-flex text-center flex-col items-center w-1/6 rounded-3xl  pb-6": "inline-flex text-center flex-col items-center w-1/6 rounded-3xl bg-teal-200 pb-6"}
          onClick={toggleVisability}
        >
          <span
            className="text-bordo drop-shadow-lg  text-6xl font-extrabold"
            style={styleH1}
          >
            DIO VELE
          </span>
          <span
            className="text-bordo/60 drop-shadow-lg text-2xl font-bold"
            style={styleH2}
          >
            PHOTOGRAPHER
          </span>
        </button>
      </header>

      <div
        className={
          visability
            ? "absolute top-2/4 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2"
            : "absolute top-2/4 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 hidden"
        }
      >
        <div className="space-y-10 rounded-3xl flex flex-col">
          <button
            className="w-72 py-6  font-bold text-6xl rounded-3xl  opacity-0 mt-20 text-bordo animate-fadeInLeft bg-teal-200 bg-opacity-10 hover:bg-opacity-100"
            style={{
              textShadow: `
                  1px 1px 2px rgba(90, 0, 44, 0.5), 
                  2px 2px 5px rgba(90, 0, 44, 0.4)`,
              animationDelay: `${isRefreshed ? "0s" : "3s"}`,
            }}
          >
            Couples
          </button>
          <button
            className="w-72 py-6 font-bold text-6xl rounded-3xl text-bordo opacity-0 animate-fadeInRight bg-teal-200 bg-opacity-10 hover:bg-opacity-100"
            style={{
              textShadow: `
        1px 1px 2px rgba(90, 0, 44, 0.5), 
        2px 2px 5px rgba(90, 0, 44, 0.4)
      `,
              animationDelay: `${isRefreshed ? "0s" : "3200ms"}`,
            }}
          >
            Potraits
          </button>
          <button
            className="w-72 py-6 font-bold text-6xl rounded-3xl text-bordo opacity-0 animate-fadeInLeft bg-teal-200 bg-opacity-10 hover:bg-opacity-100"
            style={{
              textShadow: `
        1px 1px 2px rgba(90, 0, 44, 0.5), 
        2px 2px 5px rgba(90, 0, 44, 0.4)
      `,
              animationDelay: `${isRefreshed ? "0s" : "3400ms"}`,
            }}
          >
            Shops
          </button>
          <button
            className="w-72 py-6 font-bold text-6xl rounded-3xl text-bordo opacity-0 animate-fadeInRight bg-teal-200 bg-opacity-10 hover:bg-opacity-100"
            style={{
              textShadow: `
        1px 1px 2px rgba(90, 0, 44, 0.5), 
        2px 2px 5px rgba(90, 0, 44, 0.4)
      `,
              animationDelay: `${isRefreshed ? "0s" : "3600ms"}`,
            }}
          >
            Studio Portraits
          </button>
          <button
            className="w-72 py-6 font-bold text-6xl rounded-3xl text-bordo opacity-0 animate-fadeInLeft bg-teal-200 bg-opacity-10 hover:bg-opacity-100"
            style={{
              textShadow: `
        1px 1px 2px rgba(90, 0, 44, 0.5), 
        2px 2px 5px rgba(90, 0, 44, 0.4)
      `,
              animationDelay: `${isRefreshed ? "0s" : "3900ms"}`,
            }}
          >
            Contact
          </button>
          <button
            className="w-72 py-6 font-bold text-6xl rounded-3xl text-bordo opacity-0 animate-fadeInRight bg-teal-200 bg-opacity-10 hover:bg-opacity-100"
            style={{
              textShadow: `
        1px 1px 2px rgba(90, 0, 44, 0.5), 
        2px 2px 5px rgba(90, 0, 44, 0.4)
      `,
              animationDelay: `${isRefreshed ? "0s" : "4s"}`,
            }}
          >
            About
          </button>
        </div>
      </div>
    </>
  );
}
