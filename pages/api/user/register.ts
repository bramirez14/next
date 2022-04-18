import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { jwt, validations } from '../../../utils';
import db from '../../../database/connection';
import users from '../../../database/models/users';
type Data = 
| { message: string }
| {
    token: string;
    user: {
        idUser:number;
        email: string;
        name: string;
        role: string;
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch( req.method ) {
        case 'POST':
            return registerUser(req, res)

        default:
            res.status(400).json({
                message: 'Bad request'
            })
    }
}

const registerUser = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { email= '', password = '', name = '' } = req.body 

   if ( password.length < 6 ) {
        return res.status(400).json({
            message: 'La contraseña debe de ser de 6 caracteres'
        });
    }
 
    if ( name.length < 2 ) {
        return res.status(400).json({
            message: 'El nombre debe de ser de 2 caracteres'
        });
    }
    
    if ( !validations.isValidEmail( email ) ) {
        return res.status(400).json({
            message: 'El correo no tiene formato de correo'
        });
    } /* */
    
    const usuario:any = ({
        email: email.toLocaleLowerCase(),
        password: bcrypt.hashSync( password ),
        role: 'client',
        name
    });
    
    const user = await users.findOne({ where:{email:usuario.email} });

     if ( user ) {
        return res.status(400).json({
            message:'No puede usar ese correo'
        })
    } 


 try {
     const newUser:any = await users.create(usuario);
     const { idUser, role } = newUser;

     const token = jwt.signToken( idUser, email );
 
     return res.status(200).json({
         token, //jwt
         user: {
             idUser,
             email, 
             role, 
             name,
         }
     }) 
    } catch (error) {
        return res.status(500).json({
            message: 'Revisar logs del servidor'
        })
    } 
   
    

}
