// Business cards
import businessCard1 from '../../imgs/contact/business-1.jpg'
import businessCard2 from '../../imgs/contact/business-2.jpg'
import businessCard3 from '../../imgs/contact/business-3.jpg'
import businessCard4 from '../../imgs/contact/business-4.jpg'
import businessCard5 from '../../imgs/contact/business-5.jpg'
const businesscards = [businessCard1, businessCard2, businessCard3, businessCard4, businessCard5];

// Back button
import introSidePicLeftCharacter from '../../imgs/lookbook/edited/Lookbook clogs.png'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image';


export default function Contact() {
  // Array of business cards
  const businessCards = [businessCard1, businessCard2, businessCard3, businessCard4, businessCard5];

  // Function to select 3 random business cards for small screens
  const randomBusinessCards: StaticImageData[] = [];
  while(randomBusinessCards.length < 3){
    let randomCard = businessCards[Math.floor(Math.random() * businessCards.length)];
    if(!randomBusinessCards.includes(randomCard)){
      randomBusinessCards.push(randomCard);
    }
  }

  return (
    <div className="relative md:items-center">

      {/* Intro image, also brings the client back to home page when clicked */}
      <div className="lg:hidden inline-flex absolute left-0 z-10 hover:cursor-pointer -mt-20">
        <Link href="/">
          <Image 
            src={introSidePicLeftCharacter} 
            alt="Intro image" 
            width={80}
            className=''
          />
        </Link>
      </div>
      <div className="hidden lg:inline-flex absolute left-0 z-10 hover:cursor-pointer mt-10">
        <Link href="/">
          <Image 
            src={introSidePicLeftCharacter} 
            alt="Intro image" 
            width={200}
            className=''
          />
        </Link>
      </div>

      {/* Business card for larger screens */}
      <div className="hidden md:flex relative justify-center items-center min-h-screen">
        <Image
          src={businessCards[Math.floor(Math.random() * businessCards.length)]}
          alt="Business Card"
          layout="responsive"
          className="max-w-3xl"
        />
      </div>

      {/* Business cards for small screens */}
      <div className="md:hidden flex flex-col mt-20 justify-center items-center">
        {randomBusinessCards.map((card, index) => (
          <div key={index} className="my-2">
            <Image
              src={card}
              alt="Business Card"
              layout="responsive"
              className="max-w-3xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

