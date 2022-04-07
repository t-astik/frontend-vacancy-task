import {  NavLink } from "react-router-dom"

import { menu } from '../../menu'

import everText from '../../assets/ever.png'
import boardText from '../../assets/board.png'

import './styles.css'

const Menu = () => {
  return (
      <div className="menu">
        <div className="menu__title menu-title">
          <div className="menu-title__head">
            <img src={everText} />
            <img src={boardText} />
          </div>
          <span className="menu-title__body">project subheading</span>
        </div>

        <div className="menu__body">
          {menu.map((item) => (
            <div className="menu__item" key={item.id}>
              <NavLink className="menu__button" activeClassName="menu__button_isActive" exact to={`/${item.id}`} >
                <div className="menu__buttonIcon">{item.icon}</div>
                <div className="menu__buttonText">{item.title}</div>
              </NavLink>
            </div>
          ))}
        </div>

        <span className="menu__footer">Русский</span>
      </div>
  )
}

export default Menu