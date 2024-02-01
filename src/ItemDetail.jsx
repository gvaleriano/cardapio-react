/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot, faPepperHot, faAppleWhole } from "@fortawesome/free-solid-svg-icons";
export function ItemDetail(props){
    return(
        <div className="detail-container">
            <h1 className="title-detail">{props.nome}</h1>
            <h2 className="price-detail">{props.preco}</h2>
            <p className="description-detail">{props.descricao}</p>
            <div className='icon-details'>
                <div className='icon-item-detail'>
                    <FontAwesomeIcon icon={faCarrot} />
                    <label htmlFor="">Cenoura</label>
                </div>
                <div className='icon-item-detail'>
                    <FontAwesomeIcon icon={faPepperHot} />
                    <label htmlFor="">Pimenta</label>
                </div>
                <div className='icon-item-detail'>
                    <FontAwesomeIcon icon={faAppleWhole} />
                    <label htmlFor="">Frutas</label>
                </div>
            </div>
        </div>
    )
}