import { FC } from 'react';
import ContentLoader from 'react-content-loader'

interface IPropsPreloader {
  count?: number
}
export const MyLoader: FC<IPropsPreloader> = ({ count }) => (
  <ContentLoader
    width={725}
    height={61}
    viewBox="0 0 725 45"
    backgroundColor="#d9d9d9"
    foregroundColor="#ecebeb">
    {count === 4 ?
      <>
        <rect x="200" y="20" rx="3" ry="3" width="120" height="6" />
        <rect x="400" y="20" rx="3" ry="3" width="120" height="6" />
        <rect x="600" y="20" rx="3" ry="3" width="120" height="6" />
        <rect x="0" y="20" rx="3" ry="3" width="120" height="6" />
      </>
      :
      <>
        <rect x="155" y="20" rx="3" ry="3" width="85" height="6" />
        <rect x="320" y="20" rx="3" ry="3" width="85" height="6" />
        <rect x="480" y="20" rx="3" ry="3" width="85" height="6" />
        <rect x="640" y="20" rx="3" ry="3" width="85" height="6" />
        <rect x="0" y="20" rx="3" ry="3" width="85" height="6" />
      </>


    }

  </ContentLoader>
);
