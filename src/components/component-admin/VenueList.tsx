import Image from "next/image"

const VenueList = () => {
  return (
    <div className="mx-[100px]">
        <h2 className="text-4xl font-bold">List venue as provider</h2>
        <div className="grid grid-cols-3 gap-x-24 gap-y-16 mt-12">
            <Image src='/provider-allstay2.jpg' alt="venue" width={333} height={393} className="hover:scale-105"/>
            <Image src='/provider-allstay2.jpg' alt="venue" width={333} height={393} className="hover:scale-105"/>
            <Image src='/provider-allstay2.jpg' alt="venue" width={333} height={393} className="hover:scale-105"/>
            <Image src='/provider-allstay2.jpg' alt="venue" width={333} height={393} className="hover:scale-105"/>
            <Image src='/provider-allstay2.jpg' alt="venue" width={333} height={393} className="hover:scale-105"/>
            <Image src='/provider-allstay2.jpg' alt="venue" width={333} height={393} className="hover:scale-105"/>
        </div>
    </div>
  )
}

export default VenueList