import Image from 'next/image';
import Link from 'next/link';


// Import intro image
import introSidePicLeftCharacter from '../../imgs/lookbook/edited/Lookbook clogs.png'

// Personal info
import designerNameAndShowName from '../../imgs/lookbook/edited/Lookbook clogs2.png'
import contactInformation from '../../imgs/lookbook/edited/Lookbook clogs3.png'

// Import product photos
import clog4 from '../../imgs/lookbook/Lookbook clogs4.jpg' // with model
import clog5 from '../../imgs/lookbook/Lookbook clogs5.jpg' // without model
import clog6 from '../../imgs/lookbook/Lookbook clogs6.jpg' // with model
import clog7 from '../../imgs/lookbook/Lookbook clogs7.jpg' // without model etc
import clog8 from '../../imgs/lookbook/Lookbook clogs8.jpg' // with model
import clog9 from '../../imgs/lookbook/Lookbook clogs9.jpg' // without model
import clog10 from '../../imgs/lookbook/Lookbook clogs10.jpg' // with model
import clog11 from '../../imgs/lookbook/Lookbook clogs11.jpg' // without model
import clog12 from '../../imgs/lookbook/Lookbook clogs12.jpg' // with model
import clog13 from '../../imgs/lookbook/Lookbook clogs13.jpg' // without model
import clog14 from '../../imgs/lookbook/Lookbook clogs14.jpg' // with model
import clog15 from '../../imgs/lookbook/Lookbook clogs15.jpg' // without model
import clog16 from '../../imgs/lookbook/Lookbook clogs16.jpg' // with model
import clog17 from '../../imgs/lookbook/Lookbook clogs17.jpg' // without model
import clog18 from '../../imgs/lookbook/Lookbook clogs18.jpg' // with model
import clog19 from '../../imgs/lookbook/Lookbook clogs19.jpg' // without model
import clog20 from '../../imgs/lookbook/Lookbook clogs20.jpg' // with model
import clog21 from '../../imgs/lookbook/Lookbook clogs21.jpg' // without model
import clog22 from '../../imgs/lookbook/Lookbook clogs22.jpg' // with model
import clog23 from '../../imgs/lookbook/Lookbook clogs23.jpg' // without model
import clog24 from '../../imgs/lookbook/Lookbook clogs24.jpg' // with model
import clog25 from '../../imgs/lookbook/Lookbook clogs25.jpg' // without model
import clog26 from '../../imgs/lookbook/Lookbook clogs26.jpg' // with model
import clog27 from '../../imgs/lookbook/Lookbook clogs27.jpg' // without model
import clog28 from '../../imgs/lookbook/Lookbook clogs28.jpg' // with model
import clog29 from '../../imgs/lookbook/Lookbook clogs29.jpg' // without model
import clog30 from '../../imgs/lookbook/Lookbook clogs30.jpg' // with model
import clog31 from '../../imgs/lookbook/Lookbook clogs31.jpg' // without model

// Others
import clothingImage from '../../imgs/lookbook/Lookbook clogs32.jpg'
import accessoriesImage from '../../imgs/lookbook/Lookbook clogs33.jpg'
import pricesImage from '../../imgs/lookbook/edited/Lookbook clogs34.png'
// import clog35 from '../../imgs/lookbook/Lookbook clogs35.jpg'
import specialThanksImage from '../../imgs/lookbook/edited/Lookbook clogs36.png'
import modelNames from '../../imgs/lookbook/edited/Lookbook clogs37.png'
import outroSideFigureRight from '../../imgs/lookbook/edited/Lookbook clogs38.png'

const productData = [
  { id: 1, image: clog4 },
  { id: 2, image: clog5 },
  { id: 3, image: clog6 },
  { id: 4, image: clog7 },
  { id: 5, image: clog8 },
  { id: 6, image: clog9 },
  { id: 7, image: clog10 },
  { id: 8, image: clog11 },
  { id: 9, image: clog12 },
  { id: 10, image: clog13 },
  { id: 11, image: clog14 },
  { id: 12, image: clog15 },
  { id: 13, image: clog16 },
  { id: 14, image: clog17 },
  { id: 15, image: clog18 },
  { id: 16, image: clog19 },
  { id: 17, image: clog20 },
  { id: 18, image: clog21 },
  { id: 19, image: clog22 },
  { id: 20, image: clog23 },
  { id: 21, image: clog24 },
  { id: 22, image: clog25 },
  { id: 23, image: clog26 },
  { id: 24, image: clog27 },
  { id: 25, image: clog28 },
  { id: 26, image: clog29 },
  { id: 27, image: clog30 },
  { id: 28, image: clog31 },
];

export default function Work() {
  return (
    <div className='max-w-3xl mx-auto font-lexendDeca items-center '>

      {/* Intro image, also brings the client back to home page when clicked */}
      <div className="lg:hidden inline-flex absolute left-0 z-10 hover:cursor-pointer mt-12">
        <Link href="/">
          <Image 
            src={introSidePicLeftCharacter} 
            alt="Intro image" 
            width={150}
            className=''
          />
        </Link>
      </div>
      <div className="hidden lg:inline-flex absolute left-0 z-10 hover:cursor-pointer mt-10">
        <Link href="/">
          <Image 
            src={introSidePicLeftCharacter} 
            alt="Intro image" 
            width={500}
            className=''
          />
        </Link>
      </div>

      {/* Designer name and show name, center */}
      <div className="justify-center ml-20 -mt-10">
        <Image 
          src={designerNameAndShowName} 
          alt="Designer name and show name" 
          width={500}
        />
      </div>

      {/* Products, that blurs out at the borders */}
      <div className="grid grid-cols-2 gap-4 mt-10">
        {productData.map((product) => (
          <div className="" key={product.id}>              
            <Image
              src={product.image}
              alt={`Product ${product.id}`}
              layout="responsive"
              width={1000}
              height={1000}
            />
          </div>
        ))}
      </div>

      {/* Clothing and Accessories, center */}
      <div className="">
        <div className="text-center mt-32 text-2xl">
          Other
        </div>

        <div className="">
          <Image src={clothingImage} alt="Clothing" className='mx-auto'/>
          <Image src={accessoriesImage} alt="Accessories" className='mx-auto ml-10'
          width={1000}/>
        </div>
        
      </div>

      {/* Prices and Special Thanks */}
      <div className="mt-32">
        <Image src={pricesImage} alt="Prices" className='mx-auto' width={500}/>

        <Image src={specialThanksImage} alt="Special Thanks" className='mx-auto'/>
        <Image src={modelNames} alt="Model Names" className='-mt-72 lg:-mt-96 mx-auto'/>
      </div>
    </div>
  );
}
