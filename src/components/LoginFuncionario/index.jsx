import {useContext, useState} from 'react'
import axios from 'axios'
import { AuthContext } from '../../App'
export default function LoginFuncionario(){
    const[email, setEmail] = useState()
    const[password, setPassword]= useState()
    const usuarioLogado = useContext(AuthContext)
    function fazerLogin(){
            axios.post('http://localhost:10000/login',
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
                console.log(usuarioLogado)
            })
    }
    return(
        <div>
            <input type='email' onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type='password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <button onClick={()=>{fazerLogin()}}>Fazer login</button>
            {usuarioLogado&&usuarioLogado.nome}
        </div>
    )
}