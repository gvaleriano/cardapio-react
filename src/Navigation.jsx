/* eslint-disable react/prop-types */
export function Navigation (props){
    return (
        <div className="navegacao">
            <input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked onClick={() => props.setPaginaSelecionada([0, -1])}/>
            <label htmlFor="pagina-0">Pratos Principais</label>            
            <input type="radio" name="opcao-pagina" id="pagina-1" onClick={() => props.setPaginaSelecionada([1, -1])}/>
            <label htmlFor="pagina-1">Sobremesas</label>
            <input type="radio" name="opcao-pagina" id="pagina-2" onClick={() => props.setPaginaSelecionada([2, -1])}/>
            <label htmlFor="pagina-2">Bebidas</label>
        </div>
    )
}