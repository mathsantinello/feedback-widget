import CloseButton from "../../CloseButton"
import successImageUrl from "../../../assets/success.svg"

interface FeedbackSuccessProps{
    feedbackRestartRequest: ()=>void;
}

function FeedbackSuccessStep({feedbackRestartRequest}:FeedbackSuccessProps){
    return(
        <>
            <header>
                <CloseButton/>
            </header>

            <div className="flex flex-col py-10 items-center w-[304]">
                <img src={successImageUrl}></img>
                <span className="mt-2 text-xl">Agradecemos o feedback!</span>
            </div>

            <button
            onClick={feedbackRestartRequest}
            className="py-2 px-6 my-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500">
                Quero enviar outro. 
            </button>
        </>
    )
}

export default FeedbackSuccessStep