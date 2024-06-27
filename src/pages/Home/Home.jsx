import React from 'react'

const Home = ({entradas, despesas, total}) => {
  return (
    <div>

      <div>

        <h2>Total Entradas: {entradas}</h2>

        <h2>Total Saídas: {despesas}</h2>

        <h2>Saldo Atual: {total}</h2>

      </div>
      
    </div>
  )
}

export default Home
