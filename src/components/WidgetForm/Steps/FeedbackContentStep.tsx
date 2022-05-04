import { ArrowLeft, Camera } from "phosphor-react";
import { useState } from "react";
import { FeedbackType, feedBackTypes } from ".."
import CloseButton from "../../CloseButton";
import ScreenshotButton from "../ScreenshotButton";

interface FeedbackContentStepProps{
    feedBackTypePassed: FeedbackType;
    feedbackRestartRequest:()=>void;
}

function FeedbackContentStep({feedBackTypePassed, 
    feedbackRestartRequest
}:FeedbackContentStepProps){
    const [screenshot,setScreenshot]=useState<string|null>(null)
    
    const FeedbackTypeInfo = feedBackTypes[feedBackTypePassed];

    return(
        <>
            <header>
                <button 
                type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                onClick={feedbackRestartRequest}
                >
                
                    <ArrowLeft weight="bold" className="w-4 h-4"/>
                </button> 
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={FeedbackTypeInfo.image.source} alt={FeedbackTypeInfo.image.alt} className="w-6 h-6"></img>
                    {FeedbackTypeInfo.title}
                </span> 
                <CloseButton/>
            </header>

            <form className="my-2 w-full">
                <textarea 
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 border-1 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que está acontecendo..."
                >

                </textarea>
                <footer className="flex gap-2 mt-2">
                    
                    <ScreenshotButton onScreenshotTook={setScreenshot}/>
                    <button
                        type="submit"
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
                    >
                       Enviar feedback 

                    </button>
                </footer>
            </form>
        </>
    )
}

export default FeedbackContentStep