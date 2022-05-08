import React from "react";
import { Datos } from "./Datos";

const text =
  "Lorem ipsum dolor sit amet consectetur https://www.bancogalicia.com/ sadipisicing elit. Voluptatem molestias laudantium sit sunt? Molestias delectus, minima in exercitationem qui distinctio? Alias ipsa praesentium ullam maiores provident unde earum voluptatibus nemo https://www.google.com/ lorem ipsum dolor https://www.google.com/ https://www.google.com/https://www.google.com/  lorem ipsum dolor https://www.google.com/ https lorem  exercitationem qui distinctio? Alias ipsa praesentium ullam maiores provident" ;

export const Try = () => {
  const findLink = (parrafo: string) => {
    const palabras: any[] = text.split(" ");

    let array: number[] = [0];
    let a = palabras.map((p, i) => {
      let pp = p.split(":")[0];

      if (pp === parrafo) {
        array.push(i);
        p = <Datos nameURL={p} url={p} />;
      }
      return p;
    });
    let vacio: any = [];
    let contador= 0
    for (let i = 0; i < array.length; i++) {
        console.log(vacio);
        console.log(array[i], array[i + 1]);
        
      vacio.push(a.slice(array[i]+contador++, array[i + 1]).join(" "));
      vacio.push(...a.slice(array[i + 1], array[i + 1] + 1));
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
        <span>{f} </span>
      ))}
    </p>
  );
};
