import { Heading } from "../../components/Heading/Heading";
import { Logo } from "../../components/Logo";
import { TextInput } from "../../components/TextInput/TextInput";
import { Text } from "../../components/Text/Text";
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../../components/Button/Button";
import { CheckBox } from "../../components/CheckBox/CheckBox";
import { FormEvent, useState } from "react";
import axios from "axios"

export function SignIn() {
    const [isUserSignedIn, setUserSignedIn] = useState(false)
    async function handleSignIn(event: FormEvent) {
        event.preventDefault()

        await axios.post('/sessions', {
            email: 'umEmail@gmail.com',
            password: '123456789'
        })

        setUserSignedIn(true)
    }
    return (
        <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
            <header className='flex flex-col items-center'>
                <Logo />
                <Heading size='lg' className='mt-4'>
                    Ignite Lab
                </Heading>
                <Text size='lg' className='text-gray-400 mt-2'>
                    Faça login e comece a usar!
                </Text>
            </header>
            <form onSubmit={handleSignIn} className='flex flex-col items-stretch w-full max-w-[25rem] mt-10 gap-4'>
                {isUserSignedIn && <Text>Login Realizado</Text>}
                <label htmlFor='email' className='flex flex-col gap-3'>
                    <Text className='font-semibold'>
                        Endereço de Email:
                    </Text>
                    <TextInput.root>
                        <TextInput.icon>
                            <Envelope />
                        </TextInput.icon>
                        <TextInput.input id='email' placeholder='Digite seu Email' type={'email'} />
                    </TextInput.root>
                </label>
                <label htmlFor='password' className='flex flex-col gap-3'>
                    <Text className='font-semibold'>
                        Insira sua senha:
                    </Text>
                    <TextInput.root>
                        <TextInput.icon>
                            <Lock />
                        </TextInput.icon>
                        <TextInput.input id='password' placeholder='*******' type={'password'} />
                    </TextInput.root>
                </label>
                <label htmlFor='remember' className='flex items-center gap-2'>
                    <CheckBox id='remember'></CheckBox>
                    <Text size='sm' className='text-gray-200'>Lembrar por 30 dias</Text>
                </label>

                <Button type='submit' className='mt-4'>
                    Logar
                </Button>
            </form>

            <footer className='flex flex-col items-center gap-4 mt-8'>
                <Text asChild size='sm'>
                    <a className='text-gray-400 underline hover:text-gray-200 cursor-pointer '>Esqueceu a senha ?</a>
                </Text>
                <Text asChild size='sm'>
                    <a className='text-gray-400 underline hover:text-gray-200 cursor-pointer '>Não possui conta ? Crie agora!</a>
                </Text>
            </footer>
        </div>
    )
}