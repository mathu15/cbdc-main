import React from "react";
import "/node_modules/primeflex/primeflex.css";
import { NavLink } from "react-router-dom";

import Buttons from "../buttons/Buttons";
import { BsBank2, BsGlobe2 } from "react-icons/bs";
import { BsBank } from "react-icons/bs";
import { IconName } from "react-icons/ai";
// import { BankOutlined, GlobalOutlined } from "@ant-design/icons";
const Hero = () => {
  return (
    <>
      <div className="flex-column font-medium align-items-center border-bottom-1 surface-border w-full p-5 pt-2 pb-7">
        <p className=" text-center text-2xl line-height-2  ">
          Links below will take you to the sandbox!
        </p>

        {/* <p className="line-height-2  text-xl text-center">
        *(if the build just finished it may take a few more moments fo the web
        api services to come online)
      </p> */}
      </div>
      {/* <div className="card"> */}
      <div className="flex justify-content-center flex-wrap card-container pt-8 gap-3">
        <div className="col-12 lg:col-6 xl:col-3 w-2 ">
          <NavLink to="/central-bank">
            <div className="card mb-0 border-1 border-100 bg-gray-800   transition-colors transition-duration-500   hover:bg-gray-900 text-white hover:text-gray-900 ">
              <div className=" flex flex-column align-items-center mb-3">
                <div>
                  <span className="block text-900 font-medium text-2xl mb-3">
                    Central Bank
                  </span>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-gray-900 border-round "
                  style={{ width: "8rem", height: "7rem" }}
                >
                  <BsGlobe2 className="text-7xl text-blue-500" />
                </div>
              </div>
              <div className="text-center">
                <span className="text-green-500 text-xl font-medium">New </span>
                <span className="text-500 text-xl">Updated</span>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col-12 lg:col-6 xl:col-3 w-2">
          <NavLink to="/wholesale-bank-one">
            <div className="card mb-0 border-1 border-100 bg-gray-800 bg-gray-800  transition-colors transition-duration-500  hover:bg-gray-900 text-white hover:text-gray-900">
              <div className="flex flex-column align-items-center mb-3">
                <div>
                  <span className="block text-900 font-medium text-2xl mb-3">
                    Wholesale Bank One
                  </span>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-gray-900 border-round"
                  style={{ width: "8rem", height: "7rem" }}
                >
                  <BsBank className="text-7xl text-yellow-600" />
                </div>
              </div>
              <div className="text-center">
                <span className="text-green-500 text-xl font-medium">New </span>
                <span className="text-500 text-xl">Updated</span>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col-12 lg:col-6 xl:col-3 w-2">
          <NavLink to="/wholesale-bank-two">
            <div className="card mb-0 border-1 border-100 bg-gray-800 bg-gray-800  transition-colors transition-duration-500  hover:bg-gray-900 text-white hover:text-gray-900">
              <div className="flex flex-column align-items-center mb-3">
                <div>
                  <span className="block text-900 font-medium text-2xl mb-3">
                    Wholesale Bank Two
                  </span>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-gray-900 border-round"
                  style={{ width: "8rem", height: "7rem" }}
                >
                  <BsBank className="text-7xl text-yellow-600" />
                </div>
              </div>
              <div className="text-center">
                <span className="text-green-500 text-xl font-medium">New </span>
                <span className="text-500 text-xl">Updated</span>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="col-12 lg:col-6 xl:col-3 w-2">
          <NavLink to="/wholesale-bank-three">
            <div className="card mb-0 border-1 border-100 bg-gray-800 bg-gray-800  transition-colors transition-duration-500  hover:bg-gray-900 text-white hover:text-gray-900">
              <div className="flex flex-column align-items-center mb-3">
                <div>
                  <span className="block text-900 font-medium text-2xl mb-3">
                    Wholesale Bank Three
                  </span>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-gray-900 border-round"
                  style={{ width: "8rem", height: "7rem" }}
                >
                  <BsBank className="text-7xl text-yellow-600" />
                </div>
              </div>
              <div className="text-center">
                <span className="text-green-500 text-xl font-medium">New </span>
                <span className="text-500 text-xl">Updated</span>
              </div>
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
      {/* <div className="flex-column align-items-center border-top-1 surface-border p-5 pt-8">
      <div className="flex  justify-content-center  text-center ">
        <p className="text-2xl text center mr-1 ">Build Status:</p>
        <p className=" text-center text-2xl mr-1 text-yellow-600 ">
          Finished and Deployed
        </p>
      </div>
      <div className="flex  justify-content-center  text-center ">
        <p className="text-2xl text center mr-1 ">Build Duration:</p>
        <p className=" text-center text-2xl text-yellow-600 ">14m:25s</p>
      </div>
      <div className="flex  justify-content-center  text-center ">
        <p className="text-2xl text center mr-1 ">Build ID:</p>
        <p className=" text-center text-2xl text-yellow-600 ">
          8adf_ef521f_g455s
        </p>
      </div>
    </div> */}
    </>
  );
};

export default Hero;
