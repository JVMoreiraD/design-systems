import * as CheckboxRadix from "@radix-ui/react-checkbox"
import { Check } from "phosphor-react"
export interface ICheckBoxProps {

}

export function CheckBox({}: ICheckBoxProps) {
    return (
        <CheckboxRadix.Root
            className="w-6 h-6 p-0.5 bg-gray-800 rounded"
        >
            <CheckboxRadix.CheckboxIndicator asChild>
                <Check weight="bold" className="h-5 w-5 text-cyan-500" />
            </CheckboxRadix.CheckboxIndicator>
        </CheckboxRadix.Root>
    )
}
