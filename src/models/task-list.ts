import { model } from '@modern-js/runtime/model';

type State = {
  taskList: Array<() => void>;
};

export default model<State>('task-list').define({
  state: {
    taskList: [],
  },
  actions: {
    resetTaskList: (draft: State) => {
      draft.taskList = [];
    },
    addTask: (draft: State, payload: () => void) => {
      draft.taskList.push(payload);
    },
    executeAllTask: (draft: State) => {
      draft.taskList.forEach(task => task());
    },
  },
});
