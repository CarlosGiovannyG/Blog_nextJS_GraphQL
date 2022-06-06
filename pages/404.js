import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        unoptimized
        src={"/404-not-found.svg"}
        alt="error-404"
        height="600px"
        width="600px"
        className="rounded-full"
      />
      <h2> No hay algo para mostrar</h2>
      <h2>
        <Link href="/">
          <a style={{ color: "blue" }}>Volver al inicio</a>
        </Link>
      </h2>
    </div>
  );
};

export default NotFoundPage;
