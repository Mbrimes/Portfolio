import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import HTML from '../Images/HTML.png';
import CSS from '../Images/CSS.png';
import Javascript from '../Images/Javascript.png';
import react from '../Images/react.png';
import Responsive from '../Images/Responsive.png';
import CodingforMarketers from '../Images/CodingforMarketers.png';

const images =[
	{photo:	HTML},{photo:CSS},{photo:Javascript},{photo:react},{photo:Responsive},
	{photo:CodingforMarketers}
];

const SlidingPix = () => {
	return (
		<>
		<div className="slide-container">
			<Slide indicators={true} scale= {0.4}>
				{
					images.map((e, index) => <img key= {index} src={e.photo} className="w-aut0 h-50 lg:w-96 lg:mx-auto" alt="Certificates Images"/>)
				}
			</Slide>
			</div>
			</>
	)
}


export default SlidingPix;