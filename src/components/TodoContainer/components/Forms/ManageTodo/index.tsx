import { useState, useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { ValidationError } from 'yup';

import * as S from './styles';

import Input from '../../../../Input';
import TextArea from '../../../../TextArea';
import Loading from '../../../../Loading';

import { useToast } from '../../../../../hooks/toast';
import { useTodos } from '../../../../../hooks/todos';

import getValidationErros from '../../../../../utils/getValidationErros';

import api from '../../../../../services/api';

import { schema } from './schema';

import { IFormData, IManageTodo } from '../../../interfaces';

const ManageTodo = ({
  showTodo,
  editTodo,
  todo,
  handleCloseModal,
}: IManageTodo) => {
  const { addToast } = useToast();
  const { updateTodos } = useTodos();

  const formRef = useRef({} as FormHandles);

  const [buttonLoading, setButtonLoading] = useState(false);

  const handleSubmit = useCallback(
    async (formData: IFormData) => {
      setButtonLoading(true);

      try {
        formRef.current.setErrors({});

        await schema.validate(formData, {
          abortEarly: false,
        });

        const { data } = await api.patch('/todos', {
          id: todo.id,
          title: formData.title,
          description: formData.description,
        });

        updateTodos(data);

        addToast({
          type: 'success',
          title: 'Atualizado com sucesso!',
          secondsDuration: 3,
        });
      } catch (error) {
        if (error instanceof ValidationError) {
          const errors = getValidationErros(error);

          formRef.current.setErrors(errors);

          setButtonLoading(false);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao tentar atualizar!',
          description:
            'Um erro inesperado aconteceu... Tente novamente mais tarde.',
          secondsDuration: 5,
        });
      }

      setButtonLoading(false);
      handleCloseModal();
    },
    [addToast, handleCloseModal, todo.id, updateTodos],
  );

  return (
    <S.Wrapper>
      <Form
        initialData={{ title: todo.title, description: todo.description }}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <label htmlFor="title">Título</label>
        <Input name="title" type="text" />

        <label htmlFor="description">Descrição</label>
        <TextArea rows={4} name="description" />
        <S.Footer>
          {showTodo ? (
            <button
              type="button"
              style={{
                backgroundColor: '#007bff',
                width: '100px',
                marginLeft: '355px',
              }}
              onClick={handleCloseModal}
            >
              {buttonLoading ? <Loading typeLoading="roller" /> : 'Voltar'}
            </button>
          ) : editTodo ? (
            <button style={{ backgroundColor: '#007bff' }} type="submit">
              {buttonLoading ? (
                <Loading typeLoading="roller" />
              ) : (
                'Salvar alterações'
              )}
            </button>
          ) : (
            <button style={{ backgroundColor: '#dc3545' }} type="submit">
              {buttonLoading ? (
                <Loading typeLoading="roller" />
              ) : (
                'Excluir tarefa'
              )}
            </button>
          )}
        </S.Footer>
      </Form>
    </S.Wrapper>
  );
};

export default ManageTodo;
