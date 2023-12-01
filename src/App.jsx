import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Servicio } from './components/Servicio'
import servicios from '../src/data/data'
import { Cliente } from './components/Cliente'

function App() {

  return (
    <>
    <Header />
    <Hero />
    <main className='container'>
      <section className='servicios'>
      {servicios.map(servicio => (
        <Servicio {...servicio}  key={servicio.name}/>
        ))}
        </section>
      <section className='clientes'>
        <Cliente />
      </section>
    </main>
    </>
  )
}

export default App
