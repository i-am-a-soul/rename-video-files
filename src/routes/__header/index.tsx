import { FC } from 'react';
import { useNavigate } from '@modern-js/runtime/router';
import { Typography } from '@douyinfe/semi-ui';
import Style from './index.module.scss';

const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <header className={Style.header}>
      <Typography.Title onClick={() => navigate('/')}>
        视频文件批量重命名工具
      </Typography.Title>
      <div />
    </header>
  );
};

export { Header };
