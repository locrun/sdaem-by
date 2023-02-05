import { FC } from 'react'

import { Detail } from './section-detail/Detail'
import { Nearby } from './section-nearby/Nearby'
import { Map } from './section-showmap/Map'


export const ProductDetail: FC = () => {

  return (
    <>
      <Detail />
      <Map />
      <Nearby />
    </>
  )
}
