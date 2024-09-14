import Sidebar from "./Sidebar";
// import Right from "./Right";
import Left from "./Left"

function  Bottom( {sidebaropen,setsidebaropen}:any){
    return(<div className="">
        
        <Sidebar sidebaropen={sidebaropen}></Sidebar>


{/* 
<div className={`${sidebaropen? ' md:ml-72':''}`}>

    <Left></Left>
    <Right></Right>
</div> */}

<div className="pt-20">
    <Left></Left >
    {/* <Right></Right> */}
</div>

    </div>)
}
export default Bottom;