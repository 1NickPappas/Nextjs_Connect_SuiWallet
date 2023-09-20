import Image from 'next/image'

export default function Home() {
  //generate 3 buttons for drivers, riders, and admins
  //each button will have a link to the respective page
  //without immage 
  // i want 3 big squares with text in the middle
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className="text-4xl">Connect Wallet As</h1>
      <div className="flex flex-row">
        <div className="flex flex-col items-center justify-between p-24">
          <a href="./Driver">
            <Image
              src="/images/driver.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </a>
          <h1 className="text-4xl">Driver</h1>
        </div>
        <div className="flex flex-col items-center justify-between p-24">
          <a href="./Rider">
            <Image
              src="/images/rider.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </a>
          <h1 className="text-4xl">Rider</h1>
        </div>
        <div className="flex flex-col items-center justify-between p-24">
          <a href="./Admin">
            <Image
              src="/images/admin.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </a>
          <h1 className="text-4xl">Admin</h1>
        </div>
      </div>

    </main>
  )
}
