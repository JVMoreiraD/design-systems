import { Meta, StoryObj } from "@storybook/react"
import { Button, IButtonProps } from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    args: { children: 'Lorem Ipsun' },
    argTypes: {

    }
} as Meta<IButtonProps>

export const Default: StoryObj<IButtonProps> = {}
