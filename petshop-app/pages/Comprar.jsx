import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/heroSection/HeroSection'
import ProductGrid from '../components/productGrid/ProductGrid'
import Footer from '../components/footer/Footer'

const Comprar = () => {
    return (
        <>
        <Navbar />
        <HeroSection tituloHero={'Bem-vindo!'}/>
        <ProductGrid/>
        <Footer/>
        </>
    );
}

export default Comprar;