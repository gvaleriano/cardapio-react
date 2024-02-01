/* eslint-disable react/prop-types */
export function ItemCardapio(props){
    return (
        <div className='container-item-cardapio' onClick={() => props.setPaginaSelecionada([props.paginaSelecionada[0], props.id])}>
            <div>
                <h2>{props.nome}</h2>
                <p>{props.descricao}</p>
            </div>
            <img src={props.imagem} alt="" />
        </div>
    )
}