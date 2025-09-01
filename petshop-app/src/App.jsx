import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Carousel from './components/carousel/Carousel'
import CategoryCard from './components/categoryCard/CategoryCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Carousel title={"Título 1"} />
      <Carousel title={"Título 2"} />
      <CategoryCard title={'Brinquedos'}
      productCount={'84 itens'}
      image={'https://images.tcdn.com.br/img/img_prod/771572/brinquedo_vinil_bolinha_cravo_mix_color_medio_34625_1_20230502121013.jpg'} />
    </>
  )
}

export default App
