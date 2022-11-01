import Subtitle from '../subtitle/Subtitle'
import Title from '../title/Title'
import styles from './Header.module.css'
import Icon from '../icon/Icon'

function Header () {

    return(
        <div className={styles.header}>
            <Title>Jogo da velha</Title>
            <Subtitle>Criado por Estevão gesteira</Subtitle>
            <div className={styles.iconContent}>
            <Icon iconName={"github"} link="https://github.com/EstevaoGesteira/Tik-Tak-Toe"/>
            </div>

            
        </div>
    )

}


export default Header