import { Footer } from "./Footer";
import { AppHeader } from "./common/AppHeader";

const Layout = ({ children }) => {
      return (
            <>
                  <AppHeader />
                  <main>{children}</main>
            </>
      );
};
export default Layout;
