import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/heroSection/HeroSection'
import CategoryCarousel from '../components/categoryCarousel/CategoryCarousel'
import FeaturedProducts from '../components/featuredProducts/FeaturedProducts'
import AnimalCarouesel from '../components/animalCarousel/AnimalCarousel'
import Footer from '../components/footer/Footer'

const Home = () => {
    return (
        <>
        <Navbar />
        <HeroSection tituloHero={'Bem-vindo ao Petshop do "Fulano"!'}/>
        <CategoryCarousel/>
        <FeaturedProducts/>
        <AnimalCarouesel/>
        <Footer/>
        </>
    );
}

export default Home;