import { Space, Upload, Button } from '@douyinfe/semi-ui';
import { useModel } from '@modern-js/runtime/model';
import Style from './index.module.scss';
import fileListModel from '@/models/file-list';

const Index = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { setFileList }] = useModel(fileListModel);

  const handleFileChange = (fileList: File[]) => {
    setFileList(fileList);
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
      <Button>开始重命名</Button>
    </Space>
  );
};

export default Index;
