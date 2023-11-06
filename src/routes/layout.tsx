import { Helmet } from '@modern-js/runtime/head';
import { Outlet } from '@modern-js/runtime/router';
import 'normalize.css';

export default function Layout() {
  return (
    <>
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
        />
      </Helmet>
      <Outlet />
    </>
  );
}
