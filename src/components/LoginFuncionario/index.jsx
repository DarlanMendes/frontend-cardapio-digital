import {useContext, useState} from 'react'
import axios from 'axios'
import { AuthContext } from '../../App'
import styles from './styles.module.scss';
import logo from '../../assets/img/logo restaurante.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';

export default function LoginFuncionario(){
    const[email, setEmail] = useState()
    const[password, setPassword]= useState()
    const[isLoading,setIsLoading]=useState(false)
    const usuarioLogado = useContext(AuthContext)
    const Loading = () => (
        <ReactLoading type={'spin'} color={'#E2AB46'} height={100} width={50} delay={700} className={styles.reactLoading}/>
    );
    

    function fazerLogin(){
        console.log(email, 'email', password, 'password')
        if(email&&password){
            setIsLoading(true)
            axios.post('https://cardapio.onrender.com/login',
            {
                email:email,
                password:password
            }
            ).then((result)=>{
                let usuario= result.data
                usuarioLogado.setUsuario(
                    { 
                        id: usuario.id, nome: usuario.nome, email: usuario.email, 
                        role: usuario.role, token: usuario.token
                     }
                )
                setIsLoading(false)
            })
        }else{
            toast.error("Todos os campos devem estar preenchidos !", {
                position: toast.POSITION.TOP_LEFT
              });
            
        }
    }
    return(
        <div className={styles.LoginFuncionario}>
            {isLoading&&Loading()}
            <img alt='imagem logo restaurante' src={logo}/>

            <input type='email'
             onChange={(e)=>{setEmail(e.target.value)}} 
             className={styles.email}
             placeholder='E-mail'
             />
            <input type='password'
             onChange={(e)=>{setPassword(e.target.value)}}
              className={styles.password}
              placeholder='Senha'
              />
            <button onClick={()=>{fazerLogin()}} className={styles.botaoLogin}>Fazer login</button>
            


        </div>
    )
}