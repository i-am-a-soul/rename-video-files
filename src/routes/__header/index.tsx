import { FC } from 'react';
import { Typography } from '@douyinfe/semi-ui';
import Style from './index.module.scss';

const Header: FC = () => (
  <header className={Style.header}>
    <Typography.Title>视频文件批量重命名工具</Typography.Title>
    <div />
  </header>
);

export { Header };
