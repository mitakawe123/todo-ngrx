import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/interfaces/ActionTypes';
import { AddTask } from 'src/app/interfaces/AddTask';

export const getTasks = () =>
  createAction(ActionTypes.GET_TASK, props<{ get_tasks: any }>());

export const createTask = () =>
  createAction(ActionTypes.ADD_TASK, props<{ add_task: AddTask }>());

export const deleteTask = () =>
  createAction(ActionTypes.REMOVE_TASK, props<{ remove_task: any }>());

export const editTask = () =>
  createAction(ActionTypes.EDIT_TASK, props<{ edit_task: any }>());
