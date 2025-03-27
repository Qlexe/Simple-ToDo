import turnBack from "../assets/TurnBackPageButton.svg";

function Header({ title, setShowPage }) {
  return (
    <header className="flex flex-row items-center bg-[#9395d3] mx-auto px-[26px] py-[24px] w-full">
      <div className="flex text-[24px]">
        <button
          onClick={() => setShowPage("home")}
          className="flex items-center cursor-pointer"
        >
          <img src={turnBack} alt="Go back" />
        </button>
        <div className="ml-9">{title}</div>
      </div>
    </header>
  );
}
export default Header;
