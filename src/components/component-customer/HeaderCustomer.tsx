import CustomButtons from '../component-dashboard/CustomButton'
import Link from 'next/link'
import Image from 'next/image'


const HeaderCustomer = () => {
  return (
    <header className="w-full z-10 border-b-2 border-black">
      <nav className="max-w-[1440px] ml-[80px] mr-[72px] flex justify-between items-center px-6 py-4 max-h-[182px]">
        <div className="flex items-center gap-9">
          <Link href="/" className="flex justify-center items-center">
            <Image src="/logo.svg" alt="edoroli" width={90} height={90} />
          </Link>
          <h2 className="text-red-700 font-bold text-7xl">EdoRoli</h2>
        </div>
        <div className="flex items-center gap-12">
          <Link href='/login'>
            <CustomButtons
              title="Logout"
              containerStyles="bg-red-700 text-white rounded-full px-6 py-[10px] text-[18px] hover:bg-red-800"
            />
          </Link>
          <Image src='/userlogo.svg' alt='user' width={60} height={60} />
        </div>
      </nav>
    </header>
  )
}

export default HeaderCustomer