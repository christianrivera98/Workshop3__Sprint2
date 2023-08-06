import logo from "../../../public/logo.svg";
import rectangle from "../../assets/rectangle.png";

const Cabecera = () => {
  const links = [
    { id: "00", name: "home" },
    { id: "01", name: "destination" },
    { id: "02", name: "crew" },
    { id: "03", name: "technology" },
  ];

  return (
    <nav className="sm:mx-auto">
      <div className="flex sm:items-center sm:justify-center sm:content-center sm:mx-auto lg:flex-wrap md:flex-nowrap lg:items-center items-end justify-stretch mx-auto mt-[40px] lg:ml-[65px]">
        <a
          href="/"
          className="md:flex-1 sm:ml-[25px] sm:mx-auto sm:relative sm:flex md:absolute sm:h-[40px] sm:w-[40px] h-[48px] w-[48px]"
        >
          <img
            src={logo}
            className=""
            alt="space Logo"
          />
        </a>
        <img
          src={rectangle}
          className="w-[450px] ml-[64px] md:hidden sm:hidden"
          alt="space Logo"
        />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="lg:hidden hidden tems-center mx-auto items-center content-center md:flex w-10 h-10 justify-center text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
          >
            <rect width="24" height="3" fill="#D0D6F9" />
            <rect y="9" width="24" height="3" fill="#D0D6F9" />
            <rect y="18" width="24" height="3" fill="#D0D6F9" />
          </svg>
        </button>
        <div
          className="sm:hidden flex-1 h-[96px] lg:w-[830px] items-center lg:pl-[93px] md:pl-[153px] flex !bg-black-trans"
          id="navbar-default"
        >
          <ul className="flex lg:items-center md:items-end  lg:space-x-[48px] lg:w-[542px] lg:h-[19px]">
            {links.map((link) => (
              <li key={link.id} className="lg:h-[19px] lg:justify-stretch">
                <a
                  href={"/" + link.name}
                  className="text-white text-[16px] rounded uppercase"
                >
                  <span className="md:hidden">{link.id}</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Cabecera;
