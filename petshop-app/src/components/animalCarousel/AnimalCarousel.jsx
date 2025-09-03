import GatoImg from '../../assets/Gato.svg'
import HamsterImg from '../../assets/Hamster.svg'
import CachorroImg from '../../assets/Cachorro.svg'
import PapagaioImg from '../../assets/Papagaio.svg'
import CoelhoImg from '../../assets/Coelho.svg'
import TartarugaImg from '../../assets/Tartaruga.svg'
import Carousel from '../carousel/Carousel.jsx'
import AnimalCard from "../animalCard/AnimalCard.jsx"

/*Lista de animais - carrossel*/
const animais = [
    {name: 'Gato', image: GatoImg}, //index 0
    {name: 'Hamster', image: HamsterImg}, //index 1
    {name: 'Cachorro', image: CachorroImg}, //index 2
    {name: 'Papagaio', image: PapagaioImg}, //index 3
    {name: 'Coelho', image: CoelhoImg}, //index 4
    {name: 'Tartaruga', image: TartarugaImg}, //index 5
]

const AnimalCarousel = () => {
    return (
        <Carousel
            title = {"Compre a partir do seu Pet"}
            items = {animais}
            /*Renderiza um animal/item da lista por vez*/
            RenderComponent={({item}) => <AnimalCard animal={item}/>}
        />
    )
}

export default AnimalCarousel;