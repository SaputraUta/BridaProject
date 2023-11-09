import Link from "next/link";
import Image from "next/image";

export default function customerlogin() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-signin">
      <div className="w-11/12 bg-white flex justify-between">
        <div className="flex flex-col items-center justify-center p-5 w-[35%]">
          <h1 className="font-bold text-4xl m-4">Hallo, User</h1>
          <p className="text-center mb-4">
            Nikmati layanan reservasi mudah dan terlengkap di pulau Lombok.
          </p>
          <input
            type="text"
            placeholder="Email"
            className="w-5/6 border-b overflow-hidden mb-5 bg-transparent focus:outline-none"
          />
          <input
            type="text"
            placeholder="Password"
            className="w-5/6 border-b overflow-hidden mb-5 bg-transparent focus:outline-none"
          />

          <Link
            href="/customer"
            className="bg-black p-3 text-white w-5/6 text-center rounded-xl m-2 hover:scale-105 hover:cursor-pointer"
          >
            Login
          </Link>

          <Link
            href="/auth/sign-up/customerSignUp"
            className="bg-krim p-3 text-black w-5/6 hover:scale-105 text-center rounded-xl mb-2 hover:cursor-pointer border-black border-2 m-2"
          >
            Sign up
          </Link>
        </div>

        <div className="w-[65%] flex justify-center">
          <Image
            src="/usersignin-illustration.svg"
            alt="signin"
            width={620}
            height={620}
          />
        </div>
      </div>
    </div>
  );
}
