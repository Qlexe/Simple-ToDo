import playlist from "../assets/Playlist.svg";
import tick from "../assets/Tick.svg";

function Footer() {
  return (
    <>
      <div className="h-[90px]"></div>
      <footer className="bottom-0 z-10 fixed flex justify-center items-center bg-white mx-auto w-full h-[68px]">
        <button className="flex flex-col flex-1/2 items-center cursor-pointer">
          <img src={playlist} alt="All tasks" />
          <span className="font-normal text-[#9395d3] text-[10px]">All</span>
        </button>
        <button className="flex flex-col flex-1/2 items-center cursor-pointer">
          <img src={tick} alt="Completed" />
          <span className="font-normal text-[#8b8787] text-[10px]">
            Completed
          </span>
        </button>
      </footer>
    </>
  );
}

export default Footer;
