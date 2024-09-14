


function VideoCardFull(props: any){
    return  <div className="pr-20 w-96 ">
    <div className="flex justify-between">
    <div className="p-3 flex">
        <div>
            <img className="rounded-md w-40 h-26" src='thumbnail2.png'></img>
        </div>
        <div className="flex flex-col ">
            <div className="font-semibold text-sm">
            CS50W project 1 wiki
            </div>
            <div className="text-xs text-grey">
            Haarshitaa
            </div>
            <div className="text-xs text-grey">
            232 | 1 months ago
            </div>
        </div>
        
    </div>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
    </svg>

    </div>
    </div>
    </div>
}

export default VideoCardFull;


{/* <img src='thumbnail2.png' className="rounded-xl"></img>
        <div className="grid grid-cols-12 pt-3">
            <div className="col-span-1">
                <img className="rounded-full w-12 h-10 pt-1 pr-2" src="thumbphoto.png"></img>
            </div>
            <div className="col-span-11">
                <div>
                    CS50W project 1 wiki
                </div>
                <div className="col-span-11 text-gray-400 text-base">
                    Haarshitaa
                </div>
                <div className="col-span-11 text-gray-400 text-base">
                232 | 1 months ago
                </div>
            </div>


        </div> */}