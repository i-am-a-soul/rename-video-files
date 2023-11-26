import { FC, useRef, useEffect, useState } from 'react';
import { useModel } from '@modern-js/runtime/model';
import { Input, Space, Typography } from '@douyinfe/semi-ui';
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
        const blob = new Blob([e.target.result], { type: file.type });
        videoRef.current.src = URL.createObjectURL(blob);
      }
    };
    fileReader.readAsArrayBuffer(file);
  };

  const handleConfirm = () => {
    const file = fileList[curFileIndex];
    console.log('file.type', file.type);
    const renamedFile = new File([file], inputValue, { type: file.type });
    const blob = new Blob([renamedFile], { type: file.type });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = renamedFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    playVideo(curFileIndex + 1);
    setCurFileIndex(curFileIndex + 1);
    setInputValue('');
  };

  return (
    <Space className={Style.page} vertical>
      <Typography.Title heading={2}>{`第 ${curFileIndex + 1} 个，共${
        fileList.length
      }个`}</Typography.Title>
      <video ref={videoRef} controls className={Style.video}></video>
      <Space className={Style.renameArea}>
        <Typography.Text>新文件名：</Typography.Text>
        <Input
          autoFocus
          value={inputValue}
          onChange={setInputValue}
          onEnterPress={handleConfirm}
        />
      </Space>
    </Space>
  );
};

export default Index;
