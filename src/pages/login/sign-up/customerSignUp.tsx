import Link from "next/link";
import Image from "next/image";

export default function userSignUp() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center border-red-600 rounded-xl border-2">
        <h1 className="text-red-600 font-bold text-5xl m-5">Customer Sign Up</h1>
        <Image
            src="/user-illustration.svg"
            alt="user"
            width={314}
            height={227}
            className="m-2"
          />
        <input type="text" placeholder="Email" className="w-5/6 border-b overflow-hidden mb-5" />
        <input type="text" placeholder="Password" className="w-5/6 border-b overflow-hidden mb-5" />
        <Link href="/login/customerlogin" className="bg-red-600 p-3 text-white w-5/6 hover:bg-red-700 text-center rounded-xl m-2">Sign Up</Link>
      </div>
    </div>
  );
}