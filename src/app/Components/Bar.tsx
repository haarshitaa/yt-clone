"use client"

import VideoGrid from "../Components/VideoGrid";
import Sidebar from "./Sidebar";
import { useState } from "react";

function  Bar( {sidebaropen,setsidebaropen}:any){
    return(<div className="">
        
        <Sidebar sidebaropen={sidebaropen}></Sidebar>



<div className={`${sidebaropen? ' md:ml-72':''}`}>
    <div className="pt-20">
      <VideoGrid></VideoGrid>
      <VideoGrid></VideoGrid>
      <VideoGrid></VideoGrid>
      <VideoGrid></VideoGrid>
      <VideoGrid></VideoGrid>
      <VideoGrid></VideoGrid>
      <VideoGrid></VideoGrid>
      </div>
</div>

    </div>)
}
export default Bar;





