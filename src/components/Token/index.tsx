import  { useState, useCallback } from 'react'
import { Link } from "react-router-dom"
import classNames from 'classnames'

import { IToken } from '../../types'

import usersIcon from '../../assets/users.svg'
import buttonIcon from '../../assets/arrow.png'

import './styles.css'

interface IProps {
  token: IToken
}

const Token = (props: IProps) => {
  const { token } = props

  const [active, setActive] = useState(false)

  const getPriceChangeClassname = (n: number): string => {
    return classNames(
      'price__change',
      {
        'price__change_positive' : n > 0,
        'price__change_negative': n < 0,
        'price__change_zero': n == 0
      })
  } 

  const getTogglerClassname = (): string => {
    return classNames(
      'token__toggler',
      {'token__toggler_isActive' : active }
    )
  }

  const formatDigitNumber = (num: number) => {
    const str: string = num.toLocaleString('ru');
    return str;
  }

  const handleToggleDescription = useCallback(() => {
    setActive(!active)
  }, [active])

  return (
    <div className="token" key={token.id}>
      <div className="token__container">
        <span className="token__id">
          #{token.id}
        </span>

        <div className="token__body">
          <div className="token__section meta">
            <img className="meta__logo" src={token.logoURI}/>
            <Link className="meta__badge" to={`/tokens/${token.id}`}>
              <div>{token.name}</div>
              <div className="symbol">{token.symbol}</div>
            </Link>
          </div>

          <div className="token__section price">
            <div className="price_value">{(token.price)}&nbsp;$</div>
            <div className="priceChanges">
              <div className={getPriceChangeClassname(token.priceChange.hours24)}>{token.priceChange.hours24 > 0 ? `+${token.priceChange.hours24}` : token.priceChange.hours24}%</div>
              <span className="point">•</span>
              <div className={getPriceChangeClassname(token.priceChange.days7)}>{token.priceChange.days7 > 0 ? `+${token.priceChange.days7}` : token.priceChange.days7}%</div> 
              <span className="point">•</span>
              <div className={getPriceChangeClassname(token.priceChange.days365)}>{token.priceChange.days365 > 0 ? `+${token.priceChange.days365}` : token.priceChange.days365}%</div>
            </div>
          </div>

          <div className="token__section volume">
            <div className="volume_value">{formatDigitNumber(token.volume)}&nbsp;$</div>
            <div className="volumeChangePercentage">{token.volumeChangePercentage}%</div> 
          </div>

          <div className="token__section tvl">
            <div className="tvl_value">{formatDigitNumber(token.tvl)}&nbsp;$</div>            
            <div className="tvlChangePercentage">{token.tvlChangePercentage}%</div>  
          </div>

          <div className="token__section users">
            <img className="users_icon" src={usersIcon} />
            <div className="users_count">{formatDigitNumber(token.users)}</div> 
          </div>   
        </div>

        <div className={getTogglerClassname()} onClick={handleToggleDescription}>
          <img src={buttonIcon}/>
        </div>
      </div>

    {active && (
      <div className="token__description">
        <span className="description__text">{token.description}</span>
      </div>
    )}
    </div>
  )
}

export default Token;