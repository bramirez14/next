import React from 'react'
import { Datos } from './Datos'

const text = "Lorem ipsum dolor sit amet consectetur https://www.bancogalicia.com/ sadipisicing elit. Voluptatem molestias laudantium sit sunt? Molestias delectus, minima in exercitationem qui distinctio? Alias ipsa praesentium ullam maiores provident unde earum voluptatibus nemo?"


export const Try = () => {


    const findLink = (parrafo: string,) => {
        const palabras: any[] = text.split(' ');
        const palabra2: any[] = text.split(':');
console.log(palabra2);

        /* const palabrasCambiada= palabras.join(' ');
        console.log(palabrasCambiada); */

        let a = palabras.map((p,i) => {
            
            let pp = p.split(':')[0];


            if (pp === parrafo) {
              
                p = <Datos />
            }
            return p
        })
      let t = (a.join(' '));
      console.log(t.split('[]'));
      
      
        return a

    }
    console.log(findLink('https'));

    return (
        <p > {findLink('https').map(f=>(
            <span>{f} </span>

        ))} </p>
    )
}
