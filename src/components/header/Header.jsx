import Subtitle from '../subtitle/Subtitle'
import Title from '../title/Title'
import styles from './Header.module.css'

function Header () {

    return(
        <div className={styles.header}>
            <Title>Tik Tak Toe</Title>
            <Subtitle>Criado por Estevão gesteira</Subtitle>
        </div>
    )

}


export default Header