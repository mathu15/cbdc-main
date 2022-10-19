import React from "react";
import "/node_modules/primeflex/primeflex.css";
import { NavLink } from "react-router-dom";

// import { IconName } from "react-icons/ri";
import Buttons from "../buttons/Buttons";

const Hero = () => {
  return (
    <>
      <div class="flex-column align-items-center border-bottom-1 surface-border w-full">
        <p class=" text-center line-height-2  ">
          Links below will take you to the sandbox!
        </p>
        <p class="line-height-2  text-center">
          *(if the build just finished it may take a few more moments fo the web
          api services to come online)
        </p>
      </div>
      <div class="card">
        <div class="flex justify-content-center flex-wrap card-container yellow-container">
          <div class="border-round bg-blue-100 w-12rem h-6rem p-3 m-3">
            <NavLink to="/central-bank">
              <div
                class="transition-colors transition-duration-500 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
     cursor-pointer text-center h-full w-auto border-round bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center"
              >
                Central Bank
              </div>
            </NavLink>
            <div icon="pi pi pencil"> </div>
          </div>
          <div class="border-round bg-blue-100 w-12rem h-6rem p-3 m-3">
            <div
              class="transition-colors transition-duration-500 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
     cursor-pointer text-center h-full w-auto border-round bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center"
            >
              Wholesale Bank One
            </div>
          </div>
          <div class="border-round bg-blue-100 w-12rem h-6rem p-3 m-3">
            <div
              class="transition-colors transition-duration-500 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
     cursor-pointer text-center h-full w-auto border-round bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center"
            >
              Wholesale Bank Two
            </div>
          </div>
          <div class="border-round bg-blue-200 w-12rem h-6rem p-3 m-3">
            <div
              class="transition-colors transition-duration-500 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
     cursor-pointer text-center h-full w-auto border-round bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center"
            >
              Wholesale Bank Three
            </div>
          </div>
        </div>
      </div>
      <div class="flex-column align-items-center border-bottom-1 surface-border w-full">
        <p class=" text-center line-height-2  ">
          Click 'Restart Build' below to restat deployment (this will erase all
          of the data on the current Sandbox deployment).
        </p>
        <p class="line-height-2  text-center">
          *Build takes around 15 minutes to complete.
        </p>
      </div>
      <Buttons />
      <div class="flex-column align-items-center border-top-1 ">
        <div class="flex align-items-center justify-content-center mc-1 text-center line-height-0">
          <p class="text-s text center mr-1 ">Build Status:</p>
          <p class=" text-center  text-blue-500 ">Finished and Deployed</p>
        </div>
        <div class="flex align-items-center justify-content-center mc-1 text-center line-height-0">
          <p class="text-s text center mr-1 ">Build Duration:</p>
          <p class=" text-center  text-blue-500 ">14m:25s</p>
        </div>
        <div class="flex align-items-center justify-content-center mc-1 text-center line-height-0">
          <p class="text-s text center mr-1 ">Build ID:</p>
          <p class=" text-center  text-blue-500 ">8adf_ef521f_g455s</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
