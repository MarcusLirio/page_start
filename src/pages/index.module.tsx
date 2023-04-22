import styles from 'styled-components'

export const Container = styles.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
`

export const Form = styles.form`
    margin-left: 30rem;
    display:flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-left: 30rem;
`

export const Input = styles.input`
    border: 1px solid #111;
    border-radius: 5px;
    width: 300px;   
    height: 30px;
    padding: 5px 10px; 
`

export const ColumnContainerCenter = styles.section`
    width:100%;
    display:flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    h1 {
        font-size: 2.5rem;
        margin-left: 30rem; 
    }
`

export const ColumnContainerLeft = styles.section`
    width:100%;
    display:flex; 
    flex-direction: column;
    align-items: left;
    justify-content: center;
    background: #111;
    color:#fff;
`

export const ContainerRight = styles.div`
    width:100%;
    display:flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #111;
    color:#fff;
    font-family: 'Rubik', serif;
    font-size: 0.8rem;
    gap: 5px;
`

export const Button = styles.button`
    border:none;
    width: 250px;
    height: 40px;
    border-radius: 10px;
    cursor:pointer;
    background: #1034A6;
    color: #fff;
    padding: 5px;
    font-size: 1rem;
    font-family: 'Rubik', serif;

    :hover {
        background: #111;
        color: #fff;
    }
`

export const ButtonRegister = styles.button`
    border: 1px solid #fff;
    width: 250px;
    height: 40px;
    border-radius: 10px;
    cursor:pointer;
    background: none;
    color: #fff;
    padding: 5px;
    font-size: 1.2rem;
    font-family: 'Rubik', serif;
    margin: 10px 0;

    :hover {
        background: #fff;
        color: #111;
    }
`