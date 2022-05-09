import  { useState, useMemo } from 'react'
import classNames from 'classnames'

import Token from '../../components/Token'

import { tokens, categories } from '../../tokens'

import './styles.css'

const Tokens = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0])

  const getActiveCategoryClass = (category: { id: string, title: string}) => {
    return classNames('nav__btn', { 'nav__btn_isActive': category.id == activeCategory.id })
  }

  const handleChangeActiveCategory = (category: { id: string, title: string}) => () => {
    setActiveCategory(category)
  }

  const filteredTokens = useMemo(() => {
    if (activeCategory.id === 'all') return tokens
    return tokens.filter(token => token.categories.includes(activeCategory.id))
  }, [activeCategory])

  return (
    <div className="tokens">
      <div className="nav">
        <div className="nav__title">Токены Everscale</div>

        <div className="nav__categories">
          {categories.map((category) => (
            <div
              key={category.id} onClick={handleChangeActiveCategory(category)}
              className={getActiveCategoryClass(category)}
            >
              <span className='btn__text'>
                {category.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {filteredTokens.map((token) => (
        <Token token={token}/>
      ))}
      <p></p>
    </div>
  )
}

export default Tokens