import {ChatTeardropDots} from 'phosphor-react';
import { useState } from 'react';
import { Popover } from '@headlessui/react'

function Widget(){
    
    return(
        <Popover className='absolute bottom-5 right-4'>
            <Popover.Panel>Hello World</Popover.Panel>
            <Popover.Button className='bg-brand-500 border-1 rounded-full px-3 h-12 text-white flex items-center group overflow-hidden'>
                <ChatTeardropDots className='w-6 h-6'/>
                <span className='invisible max-w-0 pl-0  group-hover:p-2 group-hover:visible group-hover:max-w-xs transition-all duration-300 ease-linear'>Feedback</span>
            </Popover.Button>
        </Popover>
    )
}

export default Widget;