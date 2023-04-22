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

export const ContainerRight = styles.section`
    width:100%;
    display:flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #111;
    color:#fff;
    font-family: 'Rubik', serif;
    font-size: 0.8rem;

`

export const ContainerText = styles.div`
    text-align:center;
    display:block;
`

export const Button = styles.button`
    border:none;
    width: 250px;
    height: 50px;
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

export const HeaderContainer = styles.header`
    display: flex;
    flex-direction:column;
`

export const Header = styles.ul`
    position:absolute;
`
export const List = styles.li`
    list-style: none;
    font-size: 1.2rem;
    font-weight:bolder;
    font-family: 'Rubik', serif;
    margin: 10px;
    display:flex;
    flex-direction: row;
    align-item:center;
    gap: 5px;
    cursor: pointer;
`