import PropTypes from "prop-types";
import LogoText from "./Logo.jsx";

function MainLayout(props) {
  const { children } = props;
  
  return (
    <>
	    <div className="flex min-h-screen">
			<aside className="bg-defaultBlack w-16 sm:w-56 text-special-bg2 flex flex-col justify-between px-1 sm:px-10 py-12"
      >
    	<div>
			<div className="mb-8 flex justify-center sm:justify-start">
        <LogoText variant="secondary" />
      </div>
			<nav>
        <div className="flex w-full rounded-md px-4 py-3 hover:bg-special-bg3 hover:text-white">
       <div className="mx-auto sm:mx-0">O</div>
       <div className="ms-3 hidden sm:block">Overview</div>
      </div>
      <div className="flex w-full rounded-md px-4 py-3 hover:bg-special-bg3 hover:text-white">
     <div className="mx-auto sm:mx-0">B</div>
     <div className="ms-3 hidden sm:block">Balances</div>
    </div>
    <div className="flex w-full rounded-md bg-special-bg3 px-4 py-3 text-white">
    <div className="mx-auto sm:mx-0">T</div>
   <div className="ms-3 hidden sm:block">Transactions</div>
   </div>
      </nav>
		</div>
		<div>
		<div className="flex w-full rounded-md bg-special-bg3 px-4 py-3 text-white">
   <div className="mx-auto sm:mx-0">L</div>
  <div className="ms-3 hidden sm:block">Logout</div>
  </div>
  <div className="border my-10 border-b-special-bg"></div>
    	<div>
       						<div className="flex items-center justify-between sm:-mx-7 sm:grid sm:grid-cols-[36px_minmax(0,1fr)_24px] sm:gap-2">
              <div>Avatar</div>
              <div className="hidden sm:block">
                Username
                <br />
                View Profile
              </div>
              <div className="hidden sm:block">icon</div>
            </div>
      </div>
		</div>

      </aside>
			<div className=" bg-special-mainBg flex-1 flex flex-col">
      <header className="flex items-center justify-between gap-3 border-b border-gray-05 bg-white px-4 py-3 sm:px-6">
        <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
          <div className="text-base font-bold text-defaultBlack sm:text-lg">
            Username
          </div>
          <div className="hidden text-xs text-gray-03 sm:block sm:text-sm">
            May 19, 2023
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3 text-xs text-defaultBlack sm:gap-8 sm:text-sm">
          <div>icon</div>
          <input
            type="search"
            aria-label="Search"
            className="h-8 w-20 rounded border border-gray-05 bg-white px-2 sm:w-32"
          />
        </div>
      </header>
			<div className="flex-1">{children}</div>
		</div>
    </div>
    </>
  );
  
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;