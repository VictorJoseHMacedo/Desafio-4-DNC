import React from 'react'
import './index.scss';
import DncLogo from '../../assets/logo-dnc.png'

const Header = () => {
  return (
    <div className="header">
      <div className="logo-dnc">
        <img src={DncLogo} alt="" />
      </div>
      <div className="itens">
      <h3>Organização</h3>
        <div className="item-marcado">
          <h3>Tarefas</h3>
        </div>
      <h3>Concluidas</h3>
      </div>
    </div>
  )
}

export default Header