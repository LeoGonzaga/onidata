import * as SC from './styles';
import Button from '@components/Button';
import useForm from './useForm';
import StepperCustom from '@components/StepperCustom';
import PersonalAccount from './components/PersonalAccount';
import BackButton from '@components/BackButton';
import Access from '@screens/Register/components/Form/components/Access';
import { useState } from 'react';
import Address from '@screens/Register/components/Form/components/Address';

const SHOW_STEP: Record<number, JSX.Element> = {
  0: <PersonalAccount />,
  1: <Access />,
  2: <Address />,
};

export const Form = (): JSX.Element => {
  const { handleSubmit } = useForm();
  const [index, setIndex] = useState<number>(0);

  const handleNextStep = () => {
    setIndex(index + 1);
  };

  const handlePreviousStep = () => {
    setIndex(index - 1);
  };

  return (
    <SC.Container onSubmit={handleSubmit}>
      <img
        src="https://avatars.githubusercontent.com/u/12630440?s=280&v=4"
        alt=""
      />
      {index > 0 && <BackButton onClick={handlePreviousStep} />}
      <StepperCustom activeStep={index} />

      {SHOW_STEP[index]}
      <Button onClick={handleNextStep}>Próximo passo</Button>
    </SC.Container>
  );
};
