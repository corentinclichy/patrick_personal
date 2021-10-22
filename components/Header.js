import Image from "next/image";
import Link from "next/link";

// Components
import Navbar from "./Navbar";

// Icon
import facebookIcon from "../public/icon/facebook-icon.svg";
import instagramIcon from "../public/icon/instagram-icon.svg";

function Header() {
  return (
    <header className="flex justify-between p-5 pl-0 header-wrapper">
      <div className="flex-1 left">
        <Link href="/home">
          <a>
            <h1 className="pl-3 mb-2 text-2xl">Patrick Clichy</h1>
          </a>
        </Link>

        <div className="flex items-center gap-3 pl-2 social-icon-container">
          <Image
            src={facebookIcon}
            alt="Logo Facebook"
            width={20}
            height={20}
            className="mr-5"
          />
          <Image
            src={instagramIcon}
            alt="Logo Facebook"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="relative ">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
