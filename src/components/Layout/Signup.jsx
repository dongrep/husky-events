import Link from 'next/link';

export default function Signup() {
  return (
    <div id="NewRootRoot" className="flex flex-row w-full items-start">
      <div className="bg-[rgba(19,_19,_21,_0.3)] flex flex-row w-full items-start">
        <div
          id="UnsplashUCbMZSw"
          className="bg-[url(https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center pl-24 gap-10 w-full h-[900px] items-start"
        >
          <div className="text-center text-4xl font-['Product_Sans'] font-bold text-white ml-16">
            Welcome back
          </div>
          <div className="text-center font-['Product_Sans'] text-white">
            To keep connected with us provide us with your information{" "}
          </div>
          <Link href="/login">
            <button id="Button1" className="bg-[#7848f4]  text-white font-bold py-2 px-4 rounded-full">
              Sign In
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-[#f8f8fa] flex flex-col justify-center gap-16 w-full items-start px-32 py-24">
        <div className="flex flex-col ml-[113px] gap-10 w-3/5 h-[113px] items-start">
          <div
            id="EventHive1"
            className="align-content: center; text-2xl font-['Product_Sans'] font-bold ml-[117px]"
          >
            Husky <span className="text-[#7848f4]"> Events</span>
          </div>
          <div className="align-content: center; text-3xl font-['Product_Sans'] font-bold">
            Sign Up for Husky Events
          </div>
        </div>
        <div className="flex flex-col justify-between gap-10 w-full items-start">
          <div className="flex flex-col gap-4 w-full items-start">
            <div className="font-['Product_Sans'] uppercase">YOUR NAME</div>
            <input
              type="text"
              id="Input"
              className="text-xs font-['Product_Sans'] text-[#687c94] bg-white w-full h-12 px-2 rounded"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-4 w-full items-start">
            <div className="font-['Product_Sans']">PASSWORD</div>
            <input
              type="password" 
              id="Input1"
              className="text-xs font-['Product_Sans'] text-[#687c94] bg-white w-full h-12 px-2 rounded"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col gap-4 w-full items-start">
            <div className="font-['Product_Sans']">CONFIRM PASSWORD</div>
            <input
              type="password"
              id="Input2"
              className="text-xs font-['Product_Sans'] text-[#687c94] bg-white w-full h-12 px-2 rounded"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col justify-between ml-24 w-2/3 h-[175px] items-start">
            <button
              id="Button1"
              className="text-center font-['Product_Sans'] text-white bg-[#7848f4] flex flex-row justify-center ml-16 pt-3 w-2/3 h-10 cursor-pointer items-start rounded"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
