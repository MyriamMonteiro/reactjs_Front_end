// chamamos a shopSidebar

import { useEffect, useState } from 'react';
import ProductCard from '../productCard/ProductCard';
import ShopSidebar from '../shopSidebar/ShopSidebar';
import './ProductGrid.css';
import Pagination from '../pagination/Pagination';
import axios from 'axios';

const listaDeCategorias = [
    { nome: "Brinquedos", qtd: 32 },
    { nome: "Roupas", qtd: 30 },
    { nome: "Comidas", qtd: 100 },
];
 
const listaDeMarcas = [
    { nome: "Royal Canin", qtd: 30 },
    { nome: "K9 Spirit", qtd: 20 },
    { nome: "Premier", qtd: 10 },
];

const ProductGrid = () => {
    // chamamos useState para atualizar o estado da tela
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [loading, setLoading] = useState(false);
    const [pets, setPets] = useState([]);
    const [totalDePaginas, setTotalDePaginas] = useState(1);
    const maximoDeAnimais = 50;
    //variavel de quantos produtos mostrar na tela. Nesse caso é 6
    const produtosPorPagina = 6;

    /* Para puxar a chave acessamos petfinder.com/developers. 
    Para subir para o github, precisará apgar a chave */
    
    //const API_KEY = "BYETXGKSchIwAjmG6x5DRTnsoQHpirdfxNu2Wxo8p8sr1Tklph";
    //const API_SECRET = "oFeRSXdCIjSIwwXrNF4ctu2xWm4okGbxt8ZmJS4f";

    const API_KEY = "Axm8E8sDRGhlB5Cs8oIP1kAXHloES3rXeu9LSBJmb98S9Fl3zC";
    const API_SECRET = "s5WnxXNllYXzByJti1QH6VgbNDdX5DEyRcJT9R11";

    // obter o Token de acesso de acordo com a documentação do Petfinder
    // função acincrona - é uma função que executa em segundo plano - chamar async e await
    const obterToken = async () => {
        const response = await axios.post(
            "https://api.petfinder.com/v2/oauth2/token",
            `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`,
            {
                //headers faz a leitura da url acima "grant_type=client..."
                headers: {"Content-Type": "application/x-www-form-urlencoded"}
            }
        );
        return response.data.access_token;
    }

    const buscarPets = async (token, pagina, limite) => {
        const response = await axios.get(
            `/pf-api/animals?page=${pagina}&limite=${limite}&type=Dog`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        );

        return response.data;
    }
    
    // CHAMADA DE API
    useEffect(() => {
        const fetchTokenEPets = async () => {
            if (loading) return;
            setLoading(true);
        

            try {
                const meuToken = await obterToken();
                const data = await buscarPets(meuToken, paginaAtual, produtosPorPagina);
                
                //filtro para API, para que cada animal retorne somente se tiver foto
                const petsComImagem = data.animals.filter(
                    (pet) => pet.primary_photo_cropped || (pet.photos && pet.photos.length > 0)
                );

                const petsFormatados = petsComImagem.map((cachorro) => ({
                   id: cachorro.id,
                   name: cachorro.name,  
                   price: cachorro.breeds.primary,
                   image: cachorro.primary_photo_cropped?.medium || (cachorro.photos && photos[0]?.medium)
                }));

                setPets(petsFormatados);

                // Limitar a API para não vir todas as informações
                const totalConsiderado = Math.min(
                    maximoDeAnimais,
                    data.pagination.total_count
                );

                setTotalDePaginas(Math.ceil(totalConsiderado / produtosPorPagina));
                
                // tratamento de erro
            } catch (error) {
                console.error("Erro ao buscar os dados da PetFinder API:", error)
            } finally {
                setLoading(false);
            }
        }

        fetchTokenEPets();
    }, [paginaAtual]);

    //ceil serve para arredondar para cima
    // todosProdutos.length é o comprimento da lista de produtos
    // const totalDePaginas = Math.ceil(todosProdutos.length / produtosPorPagina)

    //indiceUltimoProduto é o resultado do ultimo produto da página + os novos da página, ex: 1pág: 12 prod. / 2pag: 12 + os prox 12.
    // const indiceUltimoProduto = paginaAtual * produtosPorPagina;
    // const indicePrimeiroProduto = indiceUltimoProduto - produtosPorPagina; 
    //slice é fatiar a quantidade de produtos mostrada na página
    // const produtosAtuais = todosProdutos.slice(indicePrimeiroProduto, indiceUltimoProduto);

    const mudarPaginaAtual = (numeroDaPagina) => {
        setPaginaAtual(numeroDaPagina)
    }

    return (
        <div className='product-grid-container'>
            <ShopSidebar listaDeCategorias={listaDeCategorias} listaDeMarcas={listaDeMarcas}/>
            <main className='product-list-section'>
                <header className='product-list-header'>
                    <p>Mostrando {pets.length} resultados</p>
                    
                    <div className='sort-by'>
                        <label htmlFor="sort">Ordenar por: </label>
                        <select name="sort" id="sort">
                            <option value="defaut">mais recente</option>
                            <option value="price-asc">Preço: menor ao maior</option>
                            <option value="price-desc">Preço: maior ao menor</option>
                            <option value="price-asc">name: A-Z</option>
                        </select>
                    </div>
                </header>

                <div className='products-grid'>
                    {pets.map(dog => (
                        <ProductCard key={dog.id} product={dog}/>
                    ))} 
                </div>

                <Pagination 
                totalDePaginas={totalDePaginas} 
                paginaAtual={paginaAtual} 
                mudarPaginaAtual={mudarPaginaAtual}/>
            </main>
        </div>
    );
}

export default ProductGrid;