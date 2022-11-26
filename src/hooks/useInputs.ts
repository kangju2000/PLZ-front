import { useState } from 'react';

const useInputs = <T = Record<string, any>>(
  initialForm: T,
): [
  T,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<T>>,
] => {
  const [form, setForm] = useState<T>(initialForm);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm(form => ({ ...form, [name]: value }));
  };
  return [form, onChange, setForm];
};

export default useInputs;