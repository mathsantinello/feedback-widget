import CloseButton from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideiaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useState } from "react";
import FeedbackTypeStep from "./Steps/FeedbackTypeStep";
import FeedbackContentStep from "./Steps/FeedbackContentStep";

export const feedBackTypes = {
    BUG:{
        title:"Problema",
        image:{
            source: bugImageUrl,
            alt:'Imagem de um inseto'
        }
    }, 
    IDEA:{
        title:"Ideia",
        image:{
            source: ideiaImageUrl,
            alt:'Imagem de uma lâmpada'
        }
    }, 
    OTHER:{
        title:"Outro",
        image:{
            source: thoughtImageUrl,
            alt:'Imagem de um balão de pensamento'
        }
    } 
}


/*Object.entries(feedBackTypes)=>
    [
     ['BUG',{conteudo de BUG}],
      ['IDEIA',{conteudo de IDEIA}],
       ['OUTRO',{conteudo de OUTRO}]      
    ]
*/

export type FeedbackType = keyof typeof feedBackTypes

function WidgetForm(){
    const [feedbackType,setFeedbackType] = useState<FeedbackType|null>(null);

    const handleRestartFeedback = ()=>{
        setFeedbackType(null);
    }
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg text-white w-[calc(100vw-2rem)] md:w-auto">
            
           {!feedbackType? ( <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>):(
                <FeedbackContentStep feedBackTypePassed={feedbackType} feedbackRestartRequest={handleRestartFeedback}/>
            )
            }
            <h1 className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br" target="_blank">Rocketseat</a>
            </h1>
        </div>
    )
}

export default WidgetForm;