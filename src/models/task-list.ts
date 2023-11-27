import { model } from '@modern-js/runtime/model';
import { sleep } from '@/utils';

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
      const f = async (taskList: State['taskList']) => {
        while (taskList.length > 0) {
          const task = taskList.shift();
          await sleep(1000);
          task?.();
        }
      };

      f([...draft.taskList]);
    },
  },
});
