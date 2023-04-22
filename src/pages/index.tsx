import React from "react";
import { Button, ColumnContainerCenter, ContainerRight, Container, Form, Input, ButtonRegister } from "./index.module";
import Logo from "../../public/assets/images/logo_eletriza_branco_curto.png"
import Image from "next/image";
import { getLogin } from '@/modules/services/users.services';
import { useRouter } from 'next/router';

export default function Login() {

    const router = useRouter();

    const [email, setEmail] = React.useState<string>(''),
        [password, setPassword] = React.useState<string>('');

    const handleSubmit = React.useCallback(async (e: any) => {
        e.preventDefault()

        if (!email) alert('Insira email')
        if (!password) alert('Insira sua senha')

        const response = await getLogin({ email, password })
        console.log(response)
    }, [email, password])

    return (
        <Container className="container">
            <ColumnContainerCenter className="column-container">
                <h1>Eletriza</h1>
                <Form onSubmit={handleSubmit} className="form">
                    <Input className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <Button className="button" type="submit">Enviar</Button>
                </Form>
            </ColumnContainerCenter>
            <ContainerRight className="column-container">
                    <Image src={Logo} alt="Logo" width={400} height={90} />
                    <h2>À todo o progresso, existe um caminho.</h2>
                    <h2>Nós somos o seu!</h2>
                    <ButtonRegister onClick={() => router.push('/register')} >Junte-se à nós</ButtonRegister>
            </ContainerRight>
        </Container>
    );
}
