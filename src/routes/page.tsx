import { FC } from 'react';
import { Space, Upload, Button } from '@douyinfe/semi-ui';
import { useNavigate } from '@modern-js/runtime/router';
import { useModel } from '@modern-js/runtime/model';
import Style from './index.module.scss';
import fileListModel from '@/models/file-list';

const Index: FC = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { setFileList }] = useModel(fileListModel);

  const handleFileChange = (fileList: File[]) => {
    setFileList(fileList);
  };

  const handleClick = () => {
    navigate('/rename');
  };

  return (
    <Space className={Style.page} vertical>
      <Upload
        action=""
        accept="video/*"
        multiple
        draggable
        dragMainText={'点击上传或拖拽上传'}
        dragSubText="仅支持视频文件"
        onFileChange={handleFileChange}
      />
      <Button onClick={handleClick}>开始重命名</Button>
    </Space>
  );
};

export default Index;
