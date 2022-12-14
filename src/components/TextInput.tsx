import {Slot} from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react';


export interface TextInputRootPropos {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootPropos) {
    return (
        <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full  focus-within:ring-2 ring-cyan-300">
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) { 
    return (
        <Slot className="w-6 h-6 text-gray-400">
{props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputPropos extends InputHTMLAttributes<HTMLInputElement> { }


function TextInputInput(props: TextInputInputPropos) {
    return (
        <input
            className="bg-transparent flex-1  text-gray-100 text-xs placeholder:text-gray-400 outline-none"
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}