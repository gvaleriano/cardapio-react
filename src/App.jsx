/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import './App.css'
import './global.css'
import logoImage from './assets/burguer-logo.png'
import {Navigation} from './Navigation'
import { ItemCardapio } from './ItemCardapio'
import { pratosPrincipais, sobremesas, bebidas } from './cardapio'
import { useState } from 'react'
import { ItemDetail } from './ItemDetail'


export function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, setPaginaSelecionada] = useState([0, -1]);

  const [itemSelecionado, setItemSelecionado] = useState([-1, -1]);
  
  return (
    <>
    { paginaSelecionada[0] !== -1 && paginaSelecionada[1] !== -1 ? 
      <img className='bg-main' src={paginasMenu[paginaSelecionada[0]][paginaSelecionada[1]].imagem} alt="background" />
      :
      null
    }
      <div className='container-main'>
          <Navigation setPaginaSelecionada={setPaginaSelecionada}/>
          <div className='container-menu'>
            <div className='menu-detail'>
            { paginaSelecionada[0] !== -1 && paginaSelecionada[1] !== -1 ? 
              
              <ItemDetail nome={paginasMenu[paginaSelecionada[0]][paginaSelecionada[1]].nome} preco={paginasMenu[paginaSelecionada[0]][paginaSelecionada[1]].preco} descricao={paginasMenu[paginaSelecionada[0]][paginaSelecionada[1]].descricao}/>
              : 
              <>
                <img src={logoImage} alt="Burguer" /> 
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur eveniet ad soluta illo enim nemo quod autem assumenda praesentium! Odit accusantium, earum eum rem pariatur excepturi suscipit incidunt alias in.</p> 
              </> 
            }
            {paginaSelecionada[0] !== -1 && paginaSelecionada[1] !== -1? 
                <div className='btn-back-container'>
                  <button className='btn-back' onClick={()=> setPaginaSelecionada([paginaSelecionada[0], -1])}>Voltar</button>
                </div> 
                :
                null
            }          
            </div>
            <div className='menu'>
              {paginaSelecionada[0] !== -1 && paginaSelecionada[1] !== -1 ? 
              <div className='image-detail'>
                <img src={paginasMenu[paginaSelecionada[0]][paginaSelecionada[1]].imagem} alt="Burguer" />
              </div> 
              :
              paginasMenu[paginaSelecionada[0]].map((prato, idx) => <ItemCardapio key={prato.id} id={idx} nome={prato.nome} descricao={prato.descricao} imagem={prato.imagem} paginaSelecionada={paginaSelecionada} setPaginaSelecionada={setPaginaSelecionada}/>)}
              
            </div>
          </div>
      </div>
    </>
  )
}

