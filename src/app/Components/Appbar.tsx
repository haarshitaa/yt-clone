"use client"

import SearchBar from "./SearchBar";
// import Sidebar from "./Sidebar";
import Image from "./Image";
import Signin from "./Signin";
import Bar from "../Components/Bar";
import { useState } from "react";

function Appbar(){
    const [sidebaropen,setsidebaropen] = useState(false);
    return <div >
    <div className="flex justify-between bg-black fixed w-full">

        <div>
            <Image setsidebaropen = {setsidebaropen}></Image>
        </div>
 
        <div>
            <SearchBar></SearchBar>
        </div>

        <div>
            <Signin></Signin>
        </div>
        
    </div>

    <div>
    <Bar setsidebaropen = {setsidebaropen} sidebaropen={sidebaropen}></Bar>
    </div>
    
    </div>
}

export default Appbar;