import { Meta, StoryObj } from "@storybook/react"
import { Envelope, Lock } from 'phosphor-react'
import { TextInput, ITextInputRootProps } from './TextInput'

export default {
    title: 'Components/TextInput',
    component: TextInput.root,
    args: {
        children: [
            <TextInput.icon>
                <Envelope />
            </TextInput.icon>,
            <TextInput.input placeholder='email' type='email' ></TextInput.input>
        ]

    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }

} as Meta<ITextInputRootProps>

export const Default: StoryObj<ITextInputRootProps> = {}

export const Password: StoryObj<ITextInputRootProps> = {
    args: {
        children: [
            <TextInput.icon>
                <Lock />
            </TextInput.icon>,
            <TextInput.input placeholder='password' type='password' ></TextInput.input>
        ]

    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
}

export const WithoutIcon: StoryObj<ITextInputRootProps> = {
    args: {
        children: [
            <TextInput.input placeholder='email' type='email' ></TextInput.input>
        ]

    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
}