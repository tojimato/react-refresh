import MainNavigation from "./MainNavigation";

function Layout(params) {
  return (
    <div>
      <MainNavigation />
      <main>{params.children}</main>
    </div>
  );
}

export default Layout;
