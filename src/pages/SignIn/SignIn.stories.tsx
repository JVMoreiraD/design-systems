import { Meta, StoryObj } from "@storybook/react"
import { within, userEvent, waitFor } from "@storybook/testing-library"
import { expect } from "@storybook/jest"
import { SignIn } from "./SignIn"
import { rest } from "msw"

export default {
    title: 'Pages/SigIn',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Logado com sucesso'
                    }))
                })
            ]
        }
    }
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite seu Email'), 'meuEmail@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('*******'), 'umaSenhaForte1234@')
        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            return expect(canvas.getByText('Login Realizado')).toBeInTheDocument()
        })
    }
}
