import { model } from '@modern-js/runtime/model';

type State = {
  fileList: File[];
};

export default model<State>('file-list').define({
  state: {
    fileList: [],
  },
  actions: {
    setFileList: (draft: State, payload: File[]) => {
      draft.fileList = payload;
    },
  },
});
