import { FC, useRef, useEffect, useState } from 'react';
import { useModel } from '@modern-js/runtime/model';
import { useNavigate } from '@modern-js/runtime/router';
import { Input, Space, Typography } from '@douyinfe/semi-ui';
import Style from './index.module.scss';
import fileListModel from '@/models/file-list';
import { downloadFile } from '@/utils';

const Index: FC = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [{ fileList }] = useModel(fileListModel);
  const [curFileIndex, setCurFileIndex] = useState(0);
  const [newFileName, setNewFileName] = useState('');

  useEffect(() => {
    if (fileList.length === 0) {
      navigate('/');
    }
  }, []);

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
    downloadFile(file, newFileName);

    setCurFileIndex(curFileIndex + 1);
    setNewFileName('');
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
