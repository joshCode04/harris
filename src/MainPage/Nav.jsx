import { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigateCart = () => {};

  const handleNavigateHome = () => {
    window.location.reload();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="pt-6 md:pt-[20px] xl:px-[112px] max-sm:px-4 md:px-7 flex justify-between items-center pb-1 md:pb-5 py-10">
        <div className="flex gap-5">
          <span
            className="lg:hidden pt-2 text-2xl cursor-pointer max-sm:pt-0"
            onClick={toggleMenu}
          >
            <ion-icon name={isMenuOpen ? "close" : "menu"}></ion-icon>
          </span>
          <img
            src="../public/fund.png"
            className="max-sm:w-[106px] md:h-[42px] h-8 cursor-pointer"
            alt="fund"
            onClick={handleNavigateHome}
          />
        </div>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row items-start lg:items-center absolute lg:relative left-0 top-[70px] lg:top-auto lg:left-auto w-full lg:w-auto h-[100vh] lg:h-auto bg-black lg:bg-transparent text-white lg:text-black p-4 lg:p-0 z-50`}
        >
          <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-6 w-full lg:w-auto">
            <li
              className="hover:underline text-base font-semibold cursor-pointer"
              style={{
                textUnderlineOffset: "12px",
                textDecorationThickness: "3px",
              }}
            >
              Who we are
            </li>
            <li
              className="hover:underline text-base font-semibold cursor-pointer"
              style={{
                textUnderlineOffset: "12px",
                textDecorationThickness: "3px",
              }}
            >
              What we do
            </li>
            <li
              className="hover:underline text-base font-semibold cursor-pointer"
              style={{
                textUnderlineOffset: "12px",
                textDecorationThickness: "3px",
              }}
            >
              What we fund
            </li>
            <li
              className="hover:underline text-base font-semibold cursor-pointer"
              style={{
                textUnderlineOffset: "12px",
                textDecorationThickness: "3px",
              }}
            >
              What you can do
            </li>
            <li
              className="hover:underline text-base font-semibold cursor-pointer"
              style={{
                textUnderlineOffset: "12px",
                textDecorationThickness: "3px",
              }}
            >
              Blog
            </li>
          </ul>
        </div>

        <div className="flex gap-5 items-center">
          <div
            className="flex gap-2 cursor-pointer"
            onClick={handleNavigateCart}
          >
            <button className="border-2 border-black items-center text-center flex gap-2 py-1 px-2 hover:bg-black hover:text-white group">
              <span className="hover:scale-105 pt-1 group-hover:text-red-500">
                <ion-icon name="heart"></ion-icon>
              </span>
              <p className="text-xl font-semibold">Donate</p>
            </button>
          </div>
        </div>
      </nav>
      <div className="h-[1px] w-[98%] bg-[#afb1b9] mb-4 mx-4"></div>
    </>
  );
}

export default Nav;
