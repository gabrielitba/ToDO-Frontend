import React from 'react';
import { waitFor } from 'utils/test-utils';
import { renderHook } from '@testing-library/react-hooks';

import { useTodos } from 'hooks';
import { TodoProvider } from '.';

const todoMock = [
  {
    id: 'f6d1fa61-4feb-4548-a793-74f5cb61e18e',
    user_id: '0ffb1214-a627-4afa-9125-22bd21b9a6db',
    completed: false,
    title: 'Iniciar teste 1',
    description: '',
    created_at: '2021-10-10T07:15:32.776Z',
    updated_at: '2021-11-06T11:31:23.630Z',
  },
  {
    id: 'b20b3f8b-c96a-47cb-a288-6035dea06741',
    user_id: '0ffb1214-a627-4afa-9125-22bd21b9a6db',
    completed: false,
    title: 'Finalizar teste 1',
    description: '',
    created_at: '2021-10-10T07:12:12.068Z',
    updated_at: '2021-11-06T11:31:41.925Z',
  },
];

import { ActionType } from './actions';

describe('<TodoProvider />', () => {
  it('should create two Todos and add a whole to the state', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <TodoProvider>{children}</TodoProvider>
    );

    const { result } = renderHook(() => useTodos(), {
      wrapper,
    });

    await waitFor(() => {
      result.current.todoDispatch({
        type: ActionType.CreateTodo,
        payload: todoMock[0],
      });

      result.current.todoDispatch({
        type: ActionType.CreateTodo,
        payload: todoMock[1],
      });
    });

    await waitFor(() => {
      expect(result.current.todos).toStrictEqual(todoMock);
    });
  });

  it('should change the completed property of the first whole to true', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <TodoProvider>{children}</TodoProvider>
    );

    const { result } = renderHook(() => useTodos(), {
      wrapper,
    });

    // Create todos
    await waitFor(() => {
      result.current.todoDispatch({
        type: ActionType.CreateTodo,
        payload: todoMock[0],
      });

      result.current.todoDispatch({
        type: ActionType.CreateTodo,
        payload: todoMock[1],
      });
    });

    // Update second todo
    await waitFor(() => {
      result.current.todoDispatch({
        type: ActionType.UpdateTodo,
        payload: { ...todoMock[1], completed: true },
      });
    });

    await waitFor(() => {
      expect(result.current.todos[1].completed).toStrictEqual(true);
    });
  });

  it('should remove the second whole and update the state', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <TodoProvider>{children}</TodoProvider>
    );

    const { result } = renderHook(() => useTodos(), {
      wrapper,
    });

    // Create todos
    await waitFor(() => {
      result.current.todoDispatch({
        type: ActionType.CreateTodo,
        payload: todoMock[0],
      });

      result.current.todoDispatch({
        type: ActionType.CreateTodo,
        payload: todoMock[1],
      });
    });

    // Update second todo
    await waitFor(() => {
      result.current.todoDispatch({
        type: ActionType.DeleteTodo,
        payload: todoMock[1],
      });
    });

    await waitFor(() => {
      expect(result.current.todos).toStrictEqual([todoMock[0]]);
    });
  });

  it('should run the getSearchTerm function correctly', async () => {
    const setSearchTerm = jest.spyOn(React, 'useState');

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <TodoProvider>{children}</TodoProvider>
    );

    const { result } = renderHook(() => useTodos(), {
      wrapper,
    });

    // Create todos
    await waitFor(() => {
      result.current.todoDispatch({
        type: ActionType.CreateTodo,
        payload: todoMock[0],
      });

      result.current.todoDispatch({
        type: ActionType.CreateTodo,
        payload: todoMock[1],
      });
    });

    await waitFor(() => {
      result.current.getSearchTerm('teste');
    });

    await waitFor(() => {
      expect(setSearchTerm).toBeCalled();
    });
  });
});
