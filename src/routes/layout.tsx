import { Helmet } from '@modern-js/runtime/head';
import { Outlet } from '@modern-js/runtime/router';
import Style from './index.module.scss';
import 'normalize.css';
import { Header } from './__header';

export default function Layout() {
  return (
    <>
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://lf9-static.semi.design/obj/semi-tos/images/favicon.ico"
        />
        <title>视频文件批量重命名</title>
      </Helmet>
      <Header />
      <main className={Style.pageWrapper}>
        <Outlet />
      </main>
    </>
  );
}
