import { Outlet } from '@modern-js/runtime/router';
import 'normalize.css';

export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
