import React from 'react'
import { TablePrecio } from './table-precio'

function SeleccionPrecios() {
  return (
    <section>
        <span className="text-4xl lg:text-5xl font-black text-balance text-center animate-background-shine bg-[linear-gradient(110deg,#000000,45%,#c4c4c4,55%,#000000)] dark:bg-[linear-gradient(110deg,#ffffff,45%,#c8c8c8,55%,#ffffff)] bg-[length:250%_100%] bg-clip-text text-transparent">
              Seleccion de Precios
          </span>
      <TablePrecio />

    </section>
  )
}

export default SeleccionPrecios