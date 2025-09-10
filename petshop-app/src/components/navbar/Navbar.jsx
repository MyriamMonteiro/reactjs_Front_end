/*importar todas as informações da Navbar.css*/
import './Navbar.css';
import { Search, Heart, Cart } from 'akar-icons'
import Logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom';

/*criar uma arrow fuction*/
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='container'>
                <a href='#'>
                    <img src={Logo} alt="Logo do Petshop" />
                </a>
                {/*Menu*/}
                <ul className='nav-links'>
                    <li><Link to='/'>Início</Link></li>
                    <li>Comprar</li>
                    <li>Sobre Nós</li>
                    <li>Contato</li>
                </ul>
                {/*barra de pesquisa - placeholder (texto de dentro da barra de pesq.)*/}
                <div>
                    <div className='nav-actions'>
                        <div className='search-bar'>
                            <input type="text" placeholder='Pesquise aqui'/>
                            <button className='search-icon'>
                                <Search className='icon' size={20}/>
                            </button>
                        </div>
                        {/* icones */}
                        <button className='icon-btn'>
                            <Heart/>
                            {/*Elemento Inline: Span - deixa o elemento na mesma "linha"
                            já a (elemento Block) div deixa uma linha embaixo do outra*/}
                            <span className='badge'>0</span>
                        </button>
                        <button className='icon-btn'>
                            <Cart/>
                            <span className='badge'>0</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;