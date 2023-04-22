import React from "react";
import { Button, ColumnContainerCenter, ContainerRight, Container, Form, Input, HeaderContainer, Header, List } from "./index.module";
import Logo from "../../../public/assets/images/logo_eletriza_branco_curto.png"
import Image from "next/image";
import { postUsers } from '@/modules/services/users.services';
import { useRouter } from 'next/router';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
export default function Register() {

    const router = useRouter();

    const [email, setEmail] = React.useState<string>(''),
        [name, setName] = React.useState<string>(''),
        [password, setPassword] = React.useState<string>(''),
        [confirmPassword, setConfirmPassword] = React.useState<string>('');

    const handleSubmit = React.useCallback(async (e: any) => {
        e.preventDefault()

        if (password !== confirmPassword) alert('Senhas não conferem')

        if (!email) alert('Insira email')
        if (!password) alert('Insira sua senha')

        const response = await postUsers({ email, password, name, confirmPassword })
    }, [confirmPassword, email, name, password])

    return (
        <HeaderContainer>
            <Header>
                <List onClick={() => router.push('/')}><ArrowBackIosNewIcon/>Login</List>
            </Header>
            <Container className="container">
                <ColumnContainerCenter className="column-container">
                    <h1>Eletriza</h1>
                    <Form onSubmit={handleSubmit} className="form">
                        <Input className="input" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        <Input type="email" className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <Input type="password" className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <Input type="password" className="input" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
                        <Button className="button" type="submit">Cadastre-se</Button>
                    </Form>
                </ColumnContainerCenter>
                <ContainerRight className="column-container">
                    <Image src={Logo} alt="Logo" width={400} height={90} />
                    <h2>À todo o progresso, existe um caminho.</h2>
                    <h2>Nós somos o seu!</h2>
                </ContainerRight>
            </Container>
        </HeaderContainer>
    );
}