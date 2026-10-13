import hero1 from './hero1.jpg'
import hero2 from './hero2.png'
import hero3 from './hero3.png'
import logo from './logo.png'
import whyCargoBanner from './whyCargoBanner.jpg'
import { TbWorld } from "react-icons/tb";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import service1 from './service1.jpeg'
import service2 from './service2.jpg'
import service3 from './service3.jpg'
import service4 from './service4.webp'

const assets = {
    hero1,
    hero2,
    hero3,
    logo,
    whyCargoBanner,
    service1,
    service2,
    service3,
    service4
}

export const slides = [
  {
    image: hero1,
    title: "Connect Global Trade By Sea",
    description: "Reliable and cost-effective ocean freight solutions for your cargo, wherever it needs to go"
  },
  {
    image: hero2,
    title: "Connect Global Trade By Air",
    description: "Reliable and cost-effective air freight solutions for your cargo, wherever it needs to go."
  },
  {
    image: hero3,
    title: "Seamless Custom Clearance",
    description: "Expert handling, faster documentation, and smooth cargo movement across every border.."
  }
];

export const advantages =[
   {
    image: TbWorld ,
    title: "Worldwide Coverage",
    description: "Connecting ports and cities across the globe with reliable, far-reaching routes."
  },
  {
    image: MdOutlinePeopleAlt ,
    title: "Customer-Focused Service",
    description: "Dedicated support that puts your shipment and your goals first, always."
  },
  {
    image: TbTruckDelivery ,
    title: "On-Time Delivery",
    description: "Tracked transit and buffered schedules so your cargo arrives exactly when promised."
  },
  {
    image: MdSecurity ,
    title: "Secure Handling",
    description: "Trained crews and insured transit protect every shipment from pickup to arrival."
  },
]

export default assets
