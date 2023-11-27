import { FC, useRef, useEffect, useState } from 'react';
import { useModel } from '@modern-js/runtime/model';
import { useNavigate } from '@modern-js/runtime/router';
import { Input, Space, Typography } from '@douyinfe/semi-ui';
import Style from './index.module.scss';
import fileListModel from '@/models/file-list';
import taskListModel from '@/models/task-list';
import { downloadFile } from '@/utils';

const Index: FC = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [{ fileList }] = useModel(fileListModel);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { addTask }] = useModel(taskListModel);
  const [curFileIndex, setCurFileIndex] = useState(0);
  const [newFileName, setNewFileName] = useState('');

  useEffect(() => {
    playVideo(curFileIndex);
  }, [curFileIndex]);

  const playVideo = (fileIndex: number) => {
    const file = fileList[fileIndex];
    if (videoRef.current) {
      videoRef.current.src = URL.createObjectURL(file);
    }
  };

  const handleConfirm = () => {
    const file = fileList[curFileIndex];
    // 因为传 () => void 会被执行，所以这里要传 () => () => void
    addTask(() => () => downloadFile(file, newFileName));

    if (curFileIndex === fileList.length - 1) {
      navigate('/exe-rename');
    } else {
      setCurFileIndex(curFileIndex + 1);
      setNewFileName('');
    }
  };

  return (
    <Space className={Style.page} vertical>
      <Typography.Title heading={2}>{`第 ${curFileIndex + 1} 个（共 ${
        fileList.length
      } 个）`}</Typography.Title>
      <video ref={videoRef} controls className={Style.video}></video>
      <Space className={Style.renameArea} vertical align="start">
        <Typography.Text>新文件名（按回车键确认）：</Typography.Text>
        <Input
          autoFocus
          value={newFileName}
          onChange={setNewFileName}
          onEnterPress={handleConfirm}
        />
      </Space>
    </Space>
  );
};

export default Index;
