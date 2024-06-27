import { useState, useEffect } from 'react'

import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';



//componentes
import NavBar from './componentes/NavBar/NavBar';


//pages
import Home from './pages/Home/Home';
import Transacoes from './pages/Transacoes/Transacoes';
import Footer from './componentes/Footer/Footer';

function App() {




  const [entradas, setEntradas] = useState() 

  const [despesas, setDespesas] = useState()
  
  const [total, setTotal] = useState()

  const list = [
      { codigo: 1, descricao: 'Salário', entrada: 5000.00, saida: 0.00, total: 5000.00 },
      { codigo: 2, descricao: 'Aluguel', entrada: 0.00, saida: 1500.00, total: -1500.00 },
      { codigo: 3, descricao: 'Supermercado', entrada: 0.00, saida: 300.00, total: -300.00 },
      { codigo: 4, descricao: 'Internet', entrada: 0.00, saida: 100.00, total: -100.00 },
      { codigo: 5, descricao: 'Transporte', entrada: 0.00, saida: 150.00, total: -150.00 },
      { codigo: 6, descricao: 'Venda de produto', entrada: 200.00, saida: 0.00, total: 200.00 },
      { codigo: 7, descricao: 'Cinema', entrada: 0.00, saida: 50.00, total: -50.00 },
      { codigo: 8, descricao: 'Manutenção do carro', entrada: 0.00, saida: 400.00, total: -400.00 },
      { codigo: 9, descricao: 'Academia', entrada: 0.00, saida: 70.00, total: -70.00 },
      { codigo: 10, descricao: 'Rendimento de investimentos', entrada: 300.00, saida: 0.00, total: 300.00 },
      { codigo: 11, descricao: 'Gasolina', entrada: 0.00, saida: 200.00, total: -200.00 },
      { codigo: 12, descricao: 'Refeição', entrada: 0.00, saida: 120.00, total: -120.00 },
      { codigo: 13, descricao: 'Consultas médicas', entrada: 0.00, saida: 200.00, total: -200.00 },
      { codigo: 14, descricao: 'Rendimentos de poupança', entrada: 50.00, saida: 0.00, total: 50.00 },
      { codigo: 15, descricao: 'Compras online', entrada: 0.00, saida: 500.00, total: -500.00 },
      { codigo: 16, descricao: 'Serviços domésticos', entrada: 0.00, saida: 150.00, total: -150.00 },
      { codigo: 17, descricao: 'Presente de aniversário', entrada: 0.00, saida: 100.00, total: -100.00 },
      { codigo: 18, descricao: 'Freelance', entrada: 800.00, saida: 0.00, total: 800.00 },
      { codigo: 19, descricao: 'Curso online', entrada: 0.00, saida: 250.00, total: -250.00 },
      { codigo: 20, descricao: 'Doação', entrada: 0.00, saida: 50.00, total: -50.00 },
      ];
      
      useEffect(() => {
          const somaEntradas = list.reduce((acc, item) => acc + item.entrada, 0);
          setEntradas(somaEntradas)

          const somasDespesas = list.reduce((acc, item) => acc + item.saida, 0);
          setDespesas(somasDespesas)

          const total = list.reduce((acc, item) => acc + item.total, 0);
          setTotal(total)
      })

 

  return (
    <>

    <BrowserRouter>
    
    <NavBar />
    <Routes>

    <Route path='/' element={<Home entradas={entradas} despesas={despesas} total={total} />} />
    <Route path='/transacoes' element={<Transacoes list={list} />} />

    </Routes>

    <Footer />
    
    </BrowserRouter>
      
    </>
  )
}

export default App
