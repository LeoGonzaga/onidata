import { SlArrowDown } from 'react-icons/sl';
import * as SC from './styles';
import { useState } from 'react';

export const Dropdown = (): JSX.Element => {
  const [isShow, setIsShow] = useState(false);

  const handleToggle = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <SC.Container>
      <button>
        <SlArrowDown onClick={handleToggle} />
      </button>
      {isShow && <div>Sair</div>}
    </SC.Container>
  );
};
