import React from "react";
import { Button } from "./ui/button";
import { DialogPagos } from "./dialog-pagos";

function Resumen() {
  return (
    <section>
      <span className="text-4xl w-full block text-center lg:text-5xl font-black text-balance animate-background-shine bg-[linear-gradient(110deg,#000000,45%,#c4c4c4,55%,#000000)] dark:bg-[linear-gradient(110deg,#ffffff,45%,#c8c8c8,55%,#ffffff)] bg-[length:250%_100%] bg-clip-text text-transparent">
        Resumen
      </span>
      <h6 className="my-5">
        Usted está comprando 2 entradas en el Cine Showcase Haedo, ubicado en
        Av. Dr. Luis Güemes 393 - Haedo. Buenos Aires, para ver Bad Boys: hasta
        la muerte 2D-Doblada en formato 2D-Doblada el martes, 2 de julio de 2024
        a las 17:00. Total entradas $ 8.000,00 y el cargo por servicio es $
        400,00.Total de la transacción es $ 8.400,00.
      </h6>

      <DialogPagos />
    </section>
  );
}

export default Resumen;
