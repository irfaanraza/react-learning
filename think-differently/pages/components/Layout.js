import Navbar from "./Navbar";
import Main from "./Main";
import { Footer } from "./Footer";
import { AppHeader } from "./common/AppHeader";
import { Herosection } from "./common/Herosection";
const Layout = ({ children }) => {
      return (
            <>
                  <AppHeader />
                  {/* <Herosection /> */}
                  <main>{children}</main>
            </>
      );
};
export default Layout;
