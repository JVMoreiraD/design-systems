import * as CheckboxRadix from "@radix-ui/react-checkbox"
import { Check } from "phosphor-react"
export interface ICheckBoxProps extends CheckboxRadix.CheckboxProps {

}

export function CheckBox(props: ICheckBoxProps) {
    return (
        <CheckboxRadix.Root
            className="w-6 h-6 p-0.5 bg-gray-800 rounded"
            {...props}
        >
            <CheckboxRadix.CheckboxIndicator asChild>
                <Check weight="bold" className="h-5 w-5 text-cyan-500" />
            </CheckboxRadix.CheckboxIndicator>
        </CheckboxRadix.Root>
    )
}
