import Cookies from 'js-cookie';
import { useSession } from 'next-auth/react';
import { FC,useReducer } from 'react';
import bellezzaApi from '../../api/bellezzaApi';
import { IUser } from '../../interfaces';
import { AuthContext,authReducer } from './' 

export interface AuthState { 
isLoggedIn:boolean;
user?:IUser;
}
const AUTH_INITIAL_STATE:AuthState ={
    isLoggedIn: false,
    user: undefined,
}
interface Props{ 
    children:JSX.Element | JSX.Element[]
}
export const AuthProvider:FC<Props> =({children}) => {


const [state, dispatch] = useReducer( authReducer, AUTH_INITIAL_STATE);
const loginUser = async(email:string, password:string):Promise<boolean> => {
try {
    const {data} = await bellezzaApi.post('./user/login',{email:email, password:password});
    console.log(data);
    
    const {token,user}= data;
    Cookies.set('token',token);
    dispatch({type:'[Auth] - Login',payload:user})
    return true
} catch (error) {
    return false
}
}


return (
< AuthContext.Provider value={{
...state,

//Methods
loginUser,


}}>
{ children }
</AuthContext.Provider>
)
};