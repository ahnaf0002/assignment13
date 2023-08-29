// my-nextjs-project/app/layout.js
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      {/* You can include a footer or other layout elements here */}
    </div>
  );
};

export default Layout;
