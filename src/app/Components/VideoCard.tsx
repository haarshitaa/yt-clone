import { useRouter } from "next/navigation";


function VideoCard(props: any){
    const router  = useRouter();
    return <div onClick={()=>{
        router.push("/video")
    }} className="p-3">
        <img src={props.image} className="rounded-xl"></img>
        <div className="grid grid-cols-12 pt-3">
            <div className="col-span-1">
                <img className={"rounded-full w-12 h-10 pt-1 pr-2"} src={props.thumbImage}></img>
            </div>
            <div className="col-span-11">
                <div>
                    {props.title}
                </div>
                <div className="col-span-11 text-gray-400 text-base">
                    {props.author}
                </div>
                <div className="col-span-11 text-gray-400 text-base">
                    {props.views} | {props.timestamp}
                </div>
            </div>


        </div>
    </div>
}

export default VideoCard;