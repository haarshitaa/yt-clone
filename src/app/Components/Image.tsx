"use client"


function Image({setsidebaropen}:any){
    return(
        <div className="flex justify-around mt-1" >
            <button onClick={()=>{
                setsidebaropen((x:any)=>!x);
        
            }}>
            <div className="pt-2 pl-5 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            </div>
            </button>

            <div className="pl-3 ">
               <img  className="w-30 h-9 transform scale-110" src="yt.png"></img>
            </div>
        </div>
 
    )
}
export default Image;