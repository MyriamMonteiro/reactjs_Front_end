/*criar uma função*/
import heroImg from '../../assets/heroImg.svg'
import './HeroSection.css'
import CTAButton from '../ctaBtn/CTAButton'

const HeroSection = ({tituloHero}) => {
    return (
    <section className="hero">
        <div className="hero-content">
            <span className="subtitle">Pet Shop</span>
            {/* <h1>Bem-vindo ao Petshop do "Fulano"!</h1> */}
            <h1>{tituloHero}</h1>
            <p>Aqui você encontra tudo para seu animal de estimação ficar no estilo sempre!</p>
            <CTAButton text='Comprar Agora'></CTAButton>
        </div>
        <div className="hero-image-container">
        <img className='img' src={heroImg} alt="Imagem da seção Hero" />
        </div>
    </section>
    )
}

export default HeroSection;