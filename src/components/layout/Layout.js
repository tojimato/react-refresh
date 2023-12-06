import MainNavigation from "./MainNavigation";
import classes from './Layout.module.css'
function Layout(params) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{params.children}</main>
    </div>
  );
}

export default Layout;
