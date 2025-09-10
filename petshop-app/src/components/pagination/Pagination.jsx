import './Pagination.css';

const Pagination = ({totalDePaginas, paginaAtual, mudarPaginaAtual}) => {
    return (
        <div className='pagination'>
            {/*botão de paginação: a formula abaixo percorre a lista de páginas*/}
            {Array.from({length: totalDePaginas}, (_, i) => i + 1 ).map(numeroDaPagina => (
                <button key={numeroDaPagina} 
                /*active está dentro do css. Vai trazer estilo - cor no botão quando estiver na PaginaAtual*/
                className={`page-button ${paginaAtual === numeroDaPagina ? 'active' : ''}`}
                onClick={() => mudarPaginaAtual(numeroDaPagina)}
                >
                    {numeroDaPagina}
                </button>
            ))}

            {/*este button serve para passar para proxima página*/}
            <button className='page-button next'
            //&& boleano - significa o E (and)
            onClick={() => paginaAtual < totalDePaginas && mudarPaginaAtual(paginaAtual + 1)}
            disabled={paginaAtual === totalDePaginas}
            >
            {/*caracter especial &gt*/}
                Próximo &gt;    
            </button>
        </div>
    );
}

export default Pagination;