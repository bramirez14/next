import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { jwt } from "../../../utils";
import db from "../../../database/connection";
import users from "../../../database/models/users";

type Data = {
  message: string;
  user: {
    email: any;
    name: any;
    role: any;
    password: any;
  };
  token: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      return loginUser(req, res);

    default:
      res.status(400).json({
        message: "Bad request",
      });
  }
}

const loginUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email = "", password = "" } = req.body;

  let e = email.toLowerCase();
  //Verificamos que el user no este registrado en la DB

  const userw: any = await users.findOne({
    where: {
      email: e,
    },
  });

  if (!userw) {
    return res
      .status(400)
      .json({ message: "Correo o contraseña no válidos - EMAIL" });
  }
  // No olvidarme de ponerlo desp
  /*  if ( !bcrypt.compareSync( password, userw.password!) ) {
        return res.status(400).json({ message: 'Correo o contraseña no válidos - Password' })
    } */

  const { idUser, role, name } = userw;

  const token = jwt.signToken(idUser, email); //falta

  return res.status(200).json({
    token, //jwt
    user: {
      idUser,
      email,
      role,
      name,
    },
  });
};
