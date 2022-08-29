import { FC } from 'react';

import { Checkbox } from '../../../ui-kit/Checkbox/Checkbox';
import { kitchen, games } from "../../../../data/checkbox";

export const CheckboxGroup: FC = () => {
  return (
    <>
      <Checkbox
        data={kitchen}
      />
      <Checkbox
        data={games}
      />
    </>
  )
}
