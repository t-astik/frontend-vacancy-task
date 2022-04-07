import { useMemo } from 'react'
import {useParams } from "react-router-dom";

import { tokens } from '../../tokens'

import EmptyPage from '../Empty'

interface IParams {
  id: string
}

const Token = () => {
  const params = useParams<IParams>()

  const title = useMemo(() => {
    const token = tokens.find(token => token.id === Number(params.id))

    return token ? token.name : 'Неизвестный токен'
  }, [params.id])

  return (
    <EmptyPage title={title} />
  )
}

export default Token
