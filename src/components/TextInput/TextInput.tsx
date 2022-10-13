import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";


export interface ITextInputRootProps {
    children: ReactNode
}
function TextInputRoot({ children }: ITextInputRootProps) {
    return (
        <div className='flex items-center gap-3 h-12 py-3 px-4 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-200'
        >
            {children}
        </div>
    )
}

export interface ITextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export interface ITextInputIconProps {
    children: ReactNode
}
function TextInputIcon({ children }: ITextInputIconProps) {
    return (
        <Slot className="w-6 h-6 text-gray-400">
            {children}
        </Slot>
    )
}

function TextInputInput(props: ITextInputInputProps) {
    return (
        <input className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
            {...props}
        />

    )
}

TextInputInput.displayName = "TextInput.Input"
TextInputRoot.displayName = "TextInput.Root"
TextInputIcon.displayName = "TextInput.Icon"


export const TextInput = {
    root: TextInputRoot,
    input: TextInputInput,
    icon: TextInputIcon
}