import React, { FC } from "react";
import Link from "next/link";

interface Props {
  url: string;
  nameURL: string;
}
export const Datos: FC<Props> = ({ nameURL, url }) => {
  return (
    <>
      <Link href={url} passHref>
        <a target="_blank" style={{ color: "orange" }}>
          {nameURL}
        </a>
      </Link>
    </>
  );
};
