import Link from 'next/link';

export default function Login() {
  return (
    <div
      id="SigninRoot"
      className="bg-[#f8f8fa] flex flex-row justify-between pl-32 w-full items-start rounded-[20px]"
    >
      <div className="flex flex-col mt-24 gap-24 w-2/5 items-start">
        <div className="flex flex-col ml-32 gap-20 w-3/5 h-40 items-start">
          <div
            id="EventHive1"
            className="text-center text-2xl font-['Product_Sans'] font-bold ml-[110px]"
          >
            Event<span className="text-[#7848f4]"> Hive</span>
          </div>
          <div className="text-center text-4xl font-['Product_Sans'] font-bold">
            Sign In to Event Hive
          </div>
        </div>
        <div className="flex flex-col justify-between w-full h-[455px] items-start">
          <div className="flex flex-col gap-10 w-full items-start">
            <div className="flex flex-col gap-4 w-full items-start">
              <div className="font-['Product_Sans']">YOUR EMAIL</div>
              <div
                id="Input"
                className="text-xs font-['Product_Sans'] text-[#687c94] bg-white flex flex-row w-full h-12 items-start pt-4 px-2 rounded"
              >
                Enter your mail
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full items-start">
              <div className="flex flex-row justify-between w-full items-start">
                <div className="font-['Product_Sans']">PASSWORD</div>
                <div className="font-['Product_Sans'] text-[#7e7e7e]">
                  Forgot your password?
                </div>
              </div>
              <div
                id="Input1"
                className="text-xs font-['Product_Sans'] text-[#687c94] bg-white flex flex-row w-full h-12 items-start pt-4 px-2 rounded"
              >
                Enter your password
              </div>
            </div>
          </div>
          <button
            id="Button1"
            className="text-center font-['Product_Sans'] text-white bg-[#7848f4] flex flex-row justify-center ml-40 pt-3 w-2/5 h-10 cursor-pointer items-start rounded"
          >
            Sign In
          </button>
          <div className="text-center font-['Product_Sans'] text-[#7e7e7e] ml-[280px]">
            Or
          </div>
          <button
            id="GoogleButton"
            className="border-solid border-[#e0e0e9] bg-white flex flex-row justify-center ml-24 pt-3 gap-4 w-2/3 h-12 cursor-pointer items-start border rounded"
          >
            <img
              src="https://file.rendit.io/n/gOUxP7kZoh3lsXl6VD8b.svg"
              alt="Logo"
              id="Logo"
              className="w-6"
            />
            <div
              id="ButtonText"
              className="font-['Product_Sans'] text-[#131315] mt-1"
            >
              Sign up with Google
            </div>
          </button>
        </div>
      </div>
      <div
        id="UnsplashEVgsAbLRk"
        className="bg-[url(https://file.rendit.io/n/rxcirV5nTS5Vr5ZqlkUR.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-1/2 items-start"
      >
        <div className="bg-[rgba(19,_19,_21,_0.3)] flex flex-col justify-center pl-24 gap-10 w-full h-[900px] items-start">
          <div className="text-center text-4xl font-['Product_Sans'] font-bold text-white ml-20">
            Hello Friend
          </div>
          <div className="text-center font-['Product_Sans'] text-white">
            To keep connected with us provide us with your information{" "}
          </div>
          <Link href="/">
            <button
              id="Button2"
              className="bg-[#7848f4]  text-white font-bold py-2 px-4 rounded-full"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
