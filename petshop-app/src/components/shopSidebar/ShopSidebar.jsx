/*useState redenriza o componente caso o estado, valor mude. Analisa e atualiza somente o que foi selecionado*/
/*useState sempre terá uma Variável e um retorno */

import './ShopSidebar.css'
import Slider from 'rc-slider';
import { useState } from 'react';

const ShopSidebar = ({ listaDeCategorias, listaDeMarcas }) => {
    const [priceRange, setPriceRange] = useState ([0, 500])
    //priceRange armazena as variáveis dos valores na barra de valor
    //setPriceRange - muda os dados conforme a gente puxa na barra de valor

const aplicarFiltroPreco = () => {
    // console do inspencionar - colocar acento agudo ao contrário
    //para chamar uma variavel no js precisa do cifrão. Já a barra invertida "R\$" significa que este cifrão vira string
    console.log(`Filtro de preço aplicado: R\$ ${priceRange[0]} - R\$ ${priceRange[1]}`)
}

    return (
        /* aside = ao lado */
        <aside className='sidebar'>
            <div className='filter-group'>
                <h4>Filtrar por Categoria</h4>
                <ul>
                   {/* map retorna somente uma categoria após definir entre parenteses*/}
                    {listaDeCategorias.map((categoria) => (
                        <li key={categoria.nome} className='checkbox-item'>
                            <input type="checkbox" id={categoria}/>
                            <label >{categoria.nome}</label>
                            <span className='qtd-categoria'>{categoria.qtd}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
                {/* nomeando com o mesmo className pois as estruturas são parecidas. Facilita no css*/}
                <div className='filter-group'>
                    <div className='price-filter-container'> 
                        <h4>Filtrar por Preço</h4>
                        
                        {/*slider: componente instalado para criar uma barra de varlores */}
                        <Slider
                        range
                        min={0}
                        max={500}
                        defaultValue={priceRange}
                        onChange={(newRange) => (setPriceRange(newRange))}
                        />

                        <div className='price-info'>
                            <span>
                                preço: R${priceRange[0]} - R${priceRange[1]}
                            </span>
                            {/*onclick serve para chamar uma função e aplicar o filtro preço*/}
                            <button onClick={aplicarFiltroPreco}>Aplicar</button>
                        </div>
                    </div>

                    <div className='filter-group'>
                        <h4>Filtrar por Marca</h4>
                        <ul>
                        {listaDeMarcas.map((marca) => (
                            <li key={marca.nome} className='checkbox-item'>
                                <input type="checkbox" id={marca.nome}/>
                                <label htmlFor={marca.nome}>  {marca.nome}  </label>
                                <span className='qtd-categoria'>{marca.qtd}</span>
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>
        </aside>
    )
}

export default ShopSidebar;