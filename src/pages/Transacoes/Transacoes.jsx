import React from 'react'

import { useState } from 'react'

import styles from './Transacoes.module.css'

import ListaDeItem from '../../componentes/listaDeItem'

const Transacoes = ({list}) => {


  

  return (
    <div className={styles.transacao}>
      <h2>Transações</h2>

      <table>

        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th>Entrada</th>
            <th>Saída</th>
            <th>Total</th>
          </tr>
        </thead>




        <tbody>
          {list.map(item => (
            <ListaDeItem item={item} />
            ))}
        </tbody>




      </table>
    </div>
  )
}

export default Transacoes
