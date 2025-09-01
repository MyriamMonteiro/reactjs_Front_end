import ilustracao from '../assets/cachorro.svg'
function Header() {
    return (
        <header>
            <h1>Bem-vindo ao Petshop do Pedro!</h1>
            <img src={ilustracao} alt="Ilustração de Petshop" />
        </header>
    )
}

export default Header;