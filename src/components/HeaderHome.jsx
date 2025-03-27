function HeaderHome() {
  return (
    <header className="top-0 z-10 fixed flex flex-row justify-between items-center bg-[#9395d3] mx-auto px-[19px] py-[24px] w-full">
      <div className="font-jost font-semibold text-[24px] text-white uppercase">
        todo app
      </div>
      <div className="relative flex items-center w-[32px] h-[32px]">
        <span className="top top-1/2 left-1/2 absolute !font-baloo text-[15px] text-white -translate-x-1/2 -translate-y-3/10">
          {new Date().getDate()}
        </span>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 0C8.44772 0 8 0.447715 8 1V2H4C1.79086 2 0 3.79086 0 6V28C0 30.2091 1.79086 32 4 32H28C30.2091 32 32 30.2091 32 28V6C32 3.79086 30.2091 2 28 2H24V1C24 0.447715 23.5523 0 23 0C22.4477 0 22 0.447715 22 1V2H10V1C10 0.447715 9.55228 0 9 0ZM28 4C29.1046 4 30 4.89543 30 6V7H2V6C2 4.89543 2.89543 4 4 4H28ZM30 28V8.5H2V28C2 29.1046 2.89543 30 4 30H28C29.1046 30 30 29.1046 30 28Z"
            fill="white"
          />
        </svg>
      </div>
    </header>
  );
}
export default HeaderHome;
