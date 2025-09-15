// criar a estrutura carrossel sem os cards - pesquise por categoria
/* Criar componente*/
/* Propriedade {title}*/
import './Carousel.css';
import { ArrowLeft, ArrowRight } from "akar-icons"
import { useRef } from 'react';


const Carousel = ({ title, items, RenderComponent }) => {
    /* Criar uma varável para chamar o useRef - visualizar somente o que está sendo renderizado na tela*/
    const carouselRef = useRef(null)

    const scrollLeft = () => {
        /*para redenrizar os proximos cards no carrosel*/
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -300, 
                /*transição da tela*/
                behavior: 'smooth'
            })
        }
    }

            const scrollRight = () => {
        /*para redenrizar os proximos cards no carrosel*/
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 300, 
                /*transição da tela*/
                behavior: 'smooth'
            })
        }

    }

    return (
        <section className="carousel-section">
            {/*titulo e botão do carrossel*/}
            <div className="carousel-header">
                <h2>{title}</h2>
                <div className="carousel-nav"> 
                    <button className="nav-btn">
                        <ArrowLeft className='nav-icon' onClick={scrollLeft}/>
                    </button>

                    <button className="nav-btn">
                        <ArrowRight className='nav-icon' onClick={scrollRight}/>
                    </button>
                </div>
            </div>
        
            {/*container para os cards do carrossel*/}
            <div className='cards-container' ref={carouselRef}>
                {/* mapear os itens da lista - a lista está no componentes AnimalCarousel*/}
                {items.map((item, index) => 
                    <RenderComponent key={index} item={item}/>
                )}
            </div>
        </section>
        
    )
}

export default Carousel;