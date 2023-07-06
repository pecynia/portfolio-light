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
import Image from 'next/image';


export default function Contact() {
  // Array of business cards
  const businessCards = [businessCard1, businessCard2, businessCard3, businessCard4, businessCard5];

  // Function to select a random business card
  const randomBusinessCard = businessCards[Math.floor(Math.random() * businessCards.length)];

  return (
    <div className="relative md:items-center">

      {/* Home button */}
      <div className="inline-flex absolute left-0 z-20 hover:cursor-pointer mt-12">
        <Link href="/">
          <Image 
            src={introSidePicLeftCharacter} 
            alt="Home button" 
            width={150}
            className=''
          />
        </Link>
      </div>

      {/* Business card */}
      <div className="relative flex justify-center items-center min-h-screen">
        <Image
          src={randomBusinessCard}
          alt="Business Card"
          layout="responsive"
          className="max-w-3xl"
        />
      </div>
    </div>
  );
}
