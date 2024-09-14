"use client"

import SearchBar from "./SearchBar";
import Bottom from "./Bottom";
import Image from "./Image";
import Signin from "./Signin";

import { useState } from "react";

function Section(){
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
    <div className="bg-bgbg">
    <Bottom setsidebaropen = {setsidebaropen} sidebaropen={sidebaropen}></Bottom>
    </div>
    </div>
}

export default Section;