import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas'
import { useState } from "react";
import Loading from "./Loading";
import { backgroundSize } from "html2canvas/dist/types/css/property-descriptors/background-size";

interface ScreenshotButtonProps {
    setScreenshotTook:(screenshot:string|null)=>void;
    screenshot:string|null;
}

function ScreenshotButton({setScreenshotTook,screenshot}:ScreenshotButtonProps){
    const [isTakingScreenshot,setIsTakingScreenshot]=useState(false)
    async function handleTakeScreenshot(){
        setIsTakingScreenshot(true)
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');

        console.log(base64image)
        setScreenshotTook(base64image);
        setIsTakingScreenshot(false);
    }

    if(screenshot){
        return(
            <button
                type="button"
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400"
                onClick={()=>setScreenshotTook(null)}
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 180
                }}
            >
                <Trash/>
            </button>
        )
    }
    return(
        
        <button
            type="button"
            onClick={handleTakeScreenshot}
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
            {isTakingScreenshot?<Loading/>:<Camera className="w-6 h-6"/>}
        </button>
    )
}

export default ScreenshotButton