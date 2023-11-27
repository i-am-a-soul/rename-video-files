import { FC } from 'react';
import { useNavigate } from '@modern-js/runtime/router';
import { Typography } from '@douyinfe/semi-ui';
import { IconGithubLogo } from '@douyinfe/semi-icons';
import Style from './index.module.scss';

const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <header className={Style.header}>
      <Typography.Title className={Style.title} onClick={() => navigate('/')}>
        视频文件批量重命名
      </Typography.Title>
      <a
        href="https://github.com/i-am-a-soul/rename-video-files"
        target="_blank"
      >
        <IconGithubLogo size="extra-large" />
      </a>
    </header>
  );
};

export { Header };
