import { deleteUser, getLogin } from '@/modules/services/users.services';
import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react'
import styles from './index.module.css'

export interface ILogin {
    email: string;
    password: string;
}


export default function ContactForm() {


    ///////////////////////////////////////////// FUNÇÃO PARA PEGAR OS DADOS DOS INPUTS
    const [login, setLogin] = React.useState<ILogin>({
        email: '',
        password: ''
    });

    const [user, setUser] = React.useState<Array<object>>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    ///////////////////////////////////////////// FUNÇÃO DE CRIAR USUARIO

    const handleSubmit = React.useCallback(async (e: any) => {
        e.preventDefault()
        if (!login.email && !login.password) alert('Cade os dados carai?')
        setLoading(true)
        console.log(login)
        const response = await getLogin(login)
        if (!response) return setLoading(false)
        if (response.token) {
            localStorage.setItem("token", response.token)
            return setLoading(false)
        }
        else {
            return setLoading(false)
        }
    }, [login])

    ///////////////////////////////////////////// FUNÇÃO DE TRAZER USUARIOS EM FORMA DE LISTA

    // const collectUsers = React.useCallback(async () => {
    //     const response = await getUsers()
    //     if (response) {
    //         setLoading(true)
    //         setUser(response)
    //         setLoading(false)
    //     } else {
    //         alert("Não foi possivel trazer os usuarios")
    //     }
    //     setLoading(false)
    // }, [])

    ///////////////////////////////////////////// FUNÇÃO PARA DELETAR USUARIO

    const handleDelete = React.useCallback(async (id: number) => {
        deleteUser(id)
    }, [])


    ///////////////////////////////////////////// FUNÇÃO DE TRAZER USUARIOS EM FORMA DE LISTA
    // const renderUser = () => {
    //     return (
    //         user.map((_r: any) => {
    //             return (
    //                 <ListItem key={_r?.id} className='list-item'>
    //                     <ListItemAvatar><Avatar>{_r?.name.slice(0, 1)}</Avatar></ListItemAvatar>
    //                     <ListItemText primary={_r?.name} secondary={_r?.email} />
    //                     <IconButton onClick={() => handleDelete(_r.id)}><p>delete</p></IconButton>
    //                 </ListItem>
    //             )
    //         })
    //     )
    // }

    ///////////////////////////////////////////// HTML
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Eletriza</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.container_input}>
                    <label className={styles.label} htmlFor="email">Email:</label>
                    <input className={styles.input} type="email" id="email" name="email" value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} />
                </div>
                <div className={styles.container_input}>
                    <label className={styles.label} htmlFor="password">Senha:</label>
                    <input className={styles.input} type="password" id="password" name="password" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} />
                </div>
                <LoadingButton loading={loading} loadingPosition="center" variant='outlined' color='success' className={styles.button} type='submit'>Cadastrar</LoadingButton>
            </form>
        </div>
    )
}

//how to use stylesheet in next ?
