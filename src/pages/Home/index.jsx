import styles from './styles.module.scss'
import logo from '../../assets/img/logo restaurante.png'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home(){
    const navigator = useNavigate()
    const[toggleBotao, setToggleBotao]=useState(false)
    return(
       
        <div className={styles.homeContainer}>
            <img alt='imagem logo restaurante' src={logo}/>
            {!toggleBotao&&
            <button className={styles.untoggledBotao}
            onClick={()=>setToggleBotao(true)}>Vamos lá</button>
            }
            

            {toggleBotao&&toggleBotao&&
            
            <div className={styles.secaoLoginEscolha}>
                <h5>Como desejar acessar?</h5>
                <button onClick={()=>navigator('/login/funcionario')}
                    className={styles.toggledBotao}>Sou funcionário</button>
                <button onClick={()=>navigator('/login/cliente')}
                className={styles.toggledBotao}>Sou cliente</button>
            </div>
            }
            
          
        </div>
    )
}