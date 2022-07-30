import React, { useEffect } from 'react';

import { Controller, useFormContext } from 'react-hook-form';
import { NewOrderFormData } from '../..';
import { Input } from '../../../../components/Input';

import {
  ErrorMessage,
  GridInputs,
  Cep,
  Rua,
  Numero,
  Complemento,
  Bairro,
  Cidade,
  UF,
} from './styles';

function FormUser() {
  const {
    formState: { errors },
    register,
    control,
    watch,
    setValue,
  } = useFormContext<NewOrderFormData>();
  const cepValue = watch('cep');

  function handleValueCepEvent(e: React.ChangeEvent<HTMLInputElement>) {
    const actualValue = e.target.value.replace(/\D/g, '');
    const isValidNumber = Number(actualValue) >= 0;

    if (isValidNumber && actualValue.length === 8) {
      e.target.value = actualValue.replace(/(\d{5})(\d{3})/g, '$1-$2');
    } else {
      e.target.value = actualValue;
    }

    return e;
  }

  useEffect(() => {
    if (!cepValue || cepValue?.length !== 9) {
      return;
    }

    (async () => {
      const response = await fetch(
        `https://viacep.com.br/ws/${cepValue}/json/`
      ).then((res) => res.json());

      setValue('street', response.logradouro);
      setValue('district', response.bairro);
      setValue('city', response.localidade);
      setValue('uf', response.uf);
    })();
  }, [cepValue]);

  return (
    <GridInputs>
      <Cep>
        <Controller
          render={({ field }) => {
            return (
              <Input
                {...field}
                placeholder="CEP"
                maxLength={8}
                onChange={(e) => {
                  const valueHandled = handleValueCepEvent(e);
                  field.onChange(valueHandled);
                }}
              />
            );
          }}
          name="cep"
          control={control}
          defaultValue=""
        />
        {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
      </Cep>
      <Rua>
        <Input type="text" placeholder="Rua" {...register('street')} />
        {errors.street && <ErrorMessage>{errors.street.message}</ErrorMessage>}
      </Rua>

      <Numero>
        <Input type="text" placeholder="Número" {...register('number')} />
        {errors.number && <ErrorMessage>{errors.number.message}</ErrorMessage>}
      </Numero>

      <Complemento>
        <Input
          type="text"
          placeholder="Complemento"
          isOptional
          {...register('complement')}
        />
      </Complemento>

      <Bairro>
        <Input type="text" placeholder="Bairro" {...register('district')} />
        {errors.district && (
          <ErrorMessage>{errors.district.message}</ErrorMessage>
        )}
      </Bairro>

      <Cidade>
        <Input type="text" placeholder="Cidade" {...register('city')} />
        {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
      </Cidade>

      <UF>
        <Input type="text" placeholder="UF" {...register('uf')} />
        {errors.uf && <ErrorMessage>{errors.uf.message}</ErrorMessage>}
      </UF>
    </GridInputs>
  );
}

export { FormUser };
