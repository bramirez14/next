import React from "react";
import { Datos } from "./Datos";

const text = `Un libro (del latín liber, libri) es una obra impresa, manuscrita o pintada en una serie de hojas de papel, pergamino, vitela u otro material, https://www.bancogalicia.com/ unidas por un lado (es decir, encuadernadas) y protegidas con tapas, también llamadas cubiertas. Un libro puede tratar sobre cualquier tema. Según la definición de la Unesco,1​2​ un libro debe poseer veinticinco hojas mínimo (49 páginas), pues de veinticuatro hojas o menos sería un folleto; y de una hasta cuatro páginas se consideran hojas sueltas (en una o dos hojas)​También se https://www.bancogalicia.com  llama «libro» a una obra de gran extensión publicada en varias unidades independientes, llamados tomos o volúmenes. Otras veces En tiempo de la república las personas acomodadas tenían en sus casas muchos copistas o secretarios, la mayor parte esclavos o libertos, para copiar los manuscritos nuevos. Pero en tiempo de Augusto los vendedores de libros, bibliopolæ, se introdujeron en Roma y comenzaron a verse tiendas de  https://www.bancogalicia.com   libros, que solían estar cerca de la entrada de los templos y de los edificios públicos, y en particular en el foro romano. Los libreros fijaban en sus puertas los títulos de las obras que tenían en venta para que con un golpe de vista pudiese cualquiera enterarse de lo que había en ellas.En la Roma imperial los escritos podían encontrarse en todas partes. La administración cotidiana produjo un flujo constante de documentos, la alfabetización rudimentario era habitual, incluso en las clases bajas, lo que provocó que en el siglo I d. C. hubiera un crecimiento del público lector, ya no se bold:escribíaparaundddddírculodeamigoíntimos,sino   para un público anónimo, pero la clase alta siguió conservando la cultura literaria oral tradicional`


export const Try = () => {
  const findLink = (parrafo: string) => {
    const palabras: any[] = text.split(" ");

    let array: number[] = [0];
    let a = palabras.map((p, i) => {

      let pp = p.split(":")[0];
      let pp2 = p.split(":")[0];


      if (pp === parrafo) {
        array.push(i);
        //console.log(p.split('//')[1]);
        
        p = <Datos nameURL={p} url={p} />;
      }

      if(pp2 ==='bold'){
         console.log(p.split(':')[1]);
        array.push(i);
          p= <span style={{fontWeight: 'bold'}}> {p.split(':')[1]} </span>
      }
      return p;
    });
    
    let vacio: any = [];
    let contador= 0
    for (let i = 0; i < array.length; i++) {
        console.log(vacio);
       // console.log(array[i], array[i + 1]);
        
      vacio.push(a.slice(array[i]+contador++, array[i + 1]).join(" "));
      vacio.push(...a.slice(array[i + 1], array[i + 1] + 1 ));
    }
/* 
    const data1 = a.slice(0, 6).join(" ");
    const data2 = a.slice(6, 7);

    const data3 = a.slice(7, 31).join(" ");
    const data4 = a.slice(31, 32);
    const data5 = a.slice(32).join(" ");

    const datafinal = [data1, ...data2]; */

    return vacio;
  };

  return (
    <p>
      {findLink("https").map((f: any) => (
        <span>{f}</span>
      ))}
    </p>
  );
};
