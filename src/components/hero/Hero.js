import React from "react";
import "/node_modules/primeflex/primeflex.css";
import { NavLink } from "react-router-dom";

import Buttons from "../buttons/Buttons";

const Hero = () => {
  return (
    <>
      <div className="flex-column font-medium align-items-center border-bottom-1 surface-border w-full p-5 pt-8 pb-7">
        <p className=" text-center text-2xl line-height-2  ">
          Links below will take you to the sandbox!
        </p>
        {/* <p className="line-height-2  text-xl text-center">
          *(if the build just finished it may take a few more moments fo the web
          api services to come online)
        </p> */}
      </div>
      {/* <div className="card"> */}
      <div className="flex justify-content-center flex-wrap card-container yellow-container pt-8">
        {/* <div className="border-round bg-blue-100 w-12rem h-6rem p-3 m-3">
            <NavLink to="/central-bank">
              <div
                className="transition-colors transition-duration-500 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
     cursor-pointer text-center h-full w-auto border-round bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center"
              >
                Central Bank
              </div>
            </NavLink>
            <div icon="pi pi pencil"> </div>
          </div>
          <div className="border-round bg-blue-100 w-12rem h-6rem p-3 m-3">
            <NavLink to="/wholesale-bank-one">
              <div
                className="transition-colors transition-duration-500 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
     cursor-pointer text-center h-full w-auto border-round bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center"
              >
                Wholesale Bank One
              </div>
            </NavLink>
          </div>
          <div className="border-round bg-blue-100 w-12rem h-6rem p-3 m-3">
            <NavLink to="/wholesale-bank-two">
              <div
                className="transition-colors transition-duration-500 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
     cursor-pointer text-center h-full w-auto border-round bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center"
              >
                Wholesale Bank Two
              </div>
            </NavLink>
          </div>
          <div className="border-round bg-blue-200 w-12rem h-6rem p-3 m-3">
            <NavLink to="/wholesale-bank-three">
              <div
                className="transition-colors transition-duration-500 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
     cursor-pointer text-center h-full w-auto border-round bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center"
              >
                Wholesale Bank Three
              </div>
            </NavLink>
          </div> */}
        <div className="col-12 lg:col-6 xl:col-3">
          <NavLink to="/central-bank">
            <div className="card mb-0 transition-colors transition-duration-500   hover:bg-gray-900 text-white hover:text-gray-900">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-900 font-medium text-2xl mb-3">
                    Central Bank
                  </span>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-blue-100 border-round"
                  style={{ width: "2.8rem", height: "2.8rem" }}
                >
                  <i className="pi pi-home text-blue-500 text-2xl" />
                </div>
              </div>
              <span className="text-green-500 text-xl font-medium">New </span>
              <span className="text-500 text-xl">Updated</span>
            </div>
          </NavLink>
        </div>
        <div className="col-12 lg:col-6 xl:col-3">
          <NavLink to="/wholesale-bank-one">
            <div className="card mb-0 transition-colors transition-duration-500  hover:bg-gray-900 text-white hover:text-gray-900">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-900 font-medium text-2xl mb-3">
                    Wholesale Bank One
                  </span>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-orange-100 border-round"
                  style={{ width: "2.8rem", height: "2.8rem" }}
                >
                  <i className="pi pi-globe text-orange-500 text-2xl" />
                </div>
              </div>
              <span className="text-green-500 text-xl font-medium">New </span>
              <span className="text-500 text-xl">Updated</span>
            </div>
          </NavLink>
        </div>
        <div className="col-12 lg:col-6 xl:col-3">
          <NavLink to="/wholesale-bank-two">
            <div className="card mb-0 transition-colors transition-duration-500  hover:bg-gray-900 text-white hover:text-gray-900">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-900 font-medium text-2xl mb-3">
                    Wholesale Bank Two
                  </span>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                  style={{ width: "2.8rem", height: "2.8rem" }}
                >
                  <i className="pi pi-globe text-cyan-500 text-2xl" />
                </div>
              </div>
              <span className="text-green-500 text-xl font-medium">New </span>
              <span className="text-500 text-xl">Updated</span>
            </div>
          </NavLink>
        </div>

        <div className="col-12 lg:col-6 xl:col-3">
          <NavLink to="/wholesale-bank-three">
            <div className="card mb-0 transition-colors transition-duration-500  hover:bg-gray-900 text-white hover:text-gray-900">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-900  font-medium text-2xl mb-3">
                    Wholesale Bank Three
                  </span>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-purple-100 border-round"
                  style={{ width: "2.8rem", height: "2.8rem" }}
                >
                  <i className="pi pi-globe text-purple-500 text-2xl" />
                </div>
              </div>
              <span className="text-green-500 text-xl font-medium">New </span>
              <span className="text-500 text-xl">Updated</span>
            </div>
          </NavLink>
        </div>
      </div>
      {/* </div> */}
      <div className="flex-column align-items-center border-bottom-1 p-5 pt-8 surface-border w-full">
        <p className=" text-center  text-2xl line-height-2  ">
          Click 'Restart Build' below to restat deployment (this will erase all
          of the data on the current Sandbox deployment).
        </p>
        <p className="line-height-2  text-2xl text-center">
          *Build takes around 15 minutes to complete.
        </p>
      </div>
      <Buttons />
      <div className="flex-column align-items-center border-top-1 surface-border p-5 pt-8">
        <div className="flex  justify-content-center  text-center ">
          <p className="text-2xl text center mr-1 ">Build Status:</p>
          <p className=" text-center text-2xl mr-1 text-blue-500 ">
            Finished and Deployed
          </p>
        </div>
        <div className="flex  justify-content-center  text-center ">
          <p className="text-2xl text center mr-1 ">Build Duration:</p>
          <p className=" text-center text-2xl text-blue-500 ">14m:25s</p>
        </div>
        <div className="flex  justify-content-center  text-center ">
          <p className="text-2xl text center mr-1 ">Build ID:</p>
          <p className=" text-center text-2xl text-blue-500 ">
            8adf_ef521f_g455s
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
