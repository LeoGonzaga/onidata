import * as SC from './styles';
import Button from '@components/Button';
import StepperCustom from '@components/StepperCustom';
import PersonalAccount from './components/PersonalAccount';
import BackButton from '@components/BackButton';
import Access from '@screens/Register/components/Form/components/Access';
import { useMemo, useState } from 'react';
import Address from '@screens/Register/components/Form/components/Address';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useFormRegister from './useForm';
import SteepForm from './components/SteepForm';

export const Form = (): JSX.Element => {
  // const { handleSubmit } = useFormRegister();
  const [index, setIndex] = useState<number>(0);

  const handleNextStep = () => {
    setIndex(index + 1);
  };

  const handlePreviousStep = () => {
    setIndex(index - 1);
  };

  return (
    <SC.Container>
      <img
        src="https://avatars.githubusercontent.com/u/12630440?s=280&v=4"
        alt=""
      />
      {index > 0 && <BackButton onClick={handlePreviousStep} />}
      <StepperCustom activeStep={index} />

      <SteepForm index={index} />

      {index < 2 && <Button onClick={handleNextStep}>Próximo passo</Button>}
    </SC.Container>
  );
};
