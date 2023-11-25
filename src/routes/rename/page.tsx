import { FC, useRef, useEffect, useState } from 'react';
import { useModel } from '@modern-js/runtime/model';
import { Button, Input, Space, Typography } from '@douyinfe/semi-ui';
import Style from './index.module.scss';
import fileListModel from '@/models/file-list';

const Index: FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [curFileIndex, setCurFileIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [{ fileList }] = useModel(fileListModel);

  useEffect(() => {
    playVideo(curFileIndex);
  }, []);

  const playVideo = (fileIndex: number) => {
    const file = fileList[fileIndex];
    const fileReader = new FileReader();
    fileReader.onload = (e: ProgressEvent<FileReader>) => {
      if (e?.target?.result && videoRef.current) {
        const blob = new Blob(
          [new Uint8Array(e.target.result as ArrayBuffer)],
          { type: file.type },
        );
        videoRef.current.src = URL.createObjectURL(blob);
      }
    };
    fileReader.readAsArrayBuffer(file);
  };

  const handleConfirm = () => {
    playVideo(curFileIndex + 1);
    setCurFileIndex(curFileIndex + 1);
    setInputValue('');
  };

  return (
    <Space className={Style.page} vertical>
      <Typography.Title heading={2}>{`当前是第 ${
        curFileIndex + 1
      } 个视频`}</Typography.Title>
      <video ref={videoRef} controls className={Style.video}></video>
      <Space className={Style.renameArea}>
        <Typography.Text>新文件名：</Typography.Text>
        <Input value={inputValue} onChange={setInputValue} />
        <Button onClick={handleConfirm}>确认</Button>
      </Space>
    </Space>
  );
};

export default Index;
