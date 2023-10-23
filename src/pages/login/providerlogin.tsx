import Link from "next/link";
import Image from "next/image";

export default function customerlogin() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-signin">
      <div className="flex w-11/12 items-center justify-center bg-monza">
        <div className="h-[540px] w-[430px] flex flex-col items-center justify-center p-5">
          <h1 className="font-bold text-4xl m-4">Hallo, Provider</h1>
          <p className="text-center mb-4">
            Daftarkan akun anda untuk menikmati layanan kami.
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
          <div className="bg-black p-3 text-white w-5/6 text-center rounded-xl m-2 hover:scale-105 hover:cursor-pointer">
            <Link href="/provideruser">Login</Link>
          </div>
          <div className="bg-krim p-3 text-black w-5/6 hover:scale-105 text-center rounded-xl mb-2 hover:cursor-pointer border-black border-2 m-2">
            <Link href="/auth/sign-up/customerSignUp">Sign up</Link>
          </div>
        </div>
        <Image src="/providersign.svg" alt="signin" width={670} height={600} />
      </div>
    </div>
  );
}
