import Image from 'next/image';
import Link from 'next/link';
import maximaxim from '../../imgs/me/maximaxim.jpg';
import introSidePicLeftCharacter from '../../imgs/lookbook/edited/Lookbook clogs.png'

export default function Me() {
  return (
    <div className=" md:items-center">

      {/* Intro image, also brings the client back to home page when clicked */}
      <div className="lg:hidden inline-flex absolute left-0 z-20 hover:cursor-pointer mt-12">
        <Link href="/">
          <Image 
            src={introSidePicLeftCharacter} 
            alt="Intro image" 
            width={150}
            className=''
          />
        </Link>
      </div>
      <div className="hidden lg:inline-flex absolute left-0 z-20 hover:cursor-pointer mt-10">
        <Link href="/">
          <Image 
            src={introSidePicLeftCharacter} 
            alt="Intro image" 
            width={200}
            className=''
          />
        </Link>
      </div>

      <div className="hidden relative lg:inline-flex z-0 md:w-3/4">
        <Image
          src={maximaxim}
          alt="maximaxim"
          layout="responsive"
        />
      </div>
      <div className="hidden items-center lg:inline-flex right-96 top-72 absolute w-1/3 z-10  h-auto p-4 font-lexendDeca">
        <h1 className="text-6xl ">Maxim Verheul</h1>
        <p className="text-xl mt-6">
          Hi.
          <br />
          I'm a 22 year old product designer from ArteZ University of the Arts.
          <br />

          This is for big screen
        </p>
      </div>
      <div className="md:hidden inline-flex absolute z-10  h-full w-full p-4 font-lexendDeca">
        <h1 className="text-4xl font-bold ml-32 mt-16">Maxim Verheul</h1>
      </div>
      <div className="md:hidden inline-flex absolute z-10  h-full w-full p-4 font-lexendDeca">
        <p className="text-xl mt-56 mx-auto">
            Hi.
            <br />
            I'm a 22 year old product designer from ArteZ University of the Arts.
            <br />

            This is for small screen
        </p>
      </div>
      <div className="md:hidden inline-flex bottom-0 absolute z-0 w-full">
        <Image
          src={maximaxim}
          alt="maximaxim"
          layout="responsive"
        />
      </div>
      
    </div>
  );
}

