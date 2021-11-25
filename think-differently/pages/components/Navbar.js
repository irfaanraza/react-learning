import Link from "next/link";
const Navbar = () => {
      return (
            <>
                  <div>
                        <nav>
                              <ul>
                                    <li>
                                          <Link href='/home'>
                                                <a>Home</a>
                                          </Link>
                                    </li>
                              </ul>
                        </nav>
                  </div>
            </>
      );
};

export default Navbar;
