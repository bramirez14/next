import type { NextApiRequest, NextApiResponse } from 'next'
import articles from '../../database/models/articles';
import { IArticulos } from '../../interfaces/articulos';



/* type Data = 
| { message: string }
| IArticulos[] */

export default async function handler(  
  req: NextApiRequest,
  res: NextApiResponse) {
  try { 
    const resp = await articles.findAll();
    return res.status(200).json( resp );
  } catch (e) {
   res.status(400).json({ message: 'Bad request'});
  }
}