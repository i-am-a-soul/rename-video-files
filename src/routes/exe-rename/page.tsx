import { FC } from 'react';
import { useModel } from '@modern-js/runtime/model';
import { Button } from '@douyinfe/semi-ui';
import taskListModel from '@/models/task-list';

const Index: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { executeAllTask }] = useModel(taskListModel);

  return <Button onClick={() => executeAllTask()}>完成重命名</Button>;
};

export default Index;
