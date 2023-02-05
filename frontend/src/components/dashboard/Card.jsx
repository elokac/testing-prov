import Image from 'next/image';
import Link from 'next/link';
import chip from '../../../public/assets/images/card-chip.png';
import providus from '../../../public/assets/images/card-logo.png';
import wave from '../../../public/assets/images/card-wave.png';

const Card = props => (
	<a href={props.href}>
		<div className="border-2 w-[320px] h-[180px] rounded-xl bg-gradient-to-r from-slate-300 to-slate-50">
			<div className="flex justify-between items-center pl-[10px] pr-[20px] py-[15px]">
				<div className='flex items-center w-20'>
					<Image src={providus} alt="" />
				</div>
				<div className='flex items-center w-6'>
					<Image src={wave} alt="" />
				</div>
			</div>
			<div className="flex justify-between items-center pl-[16px] pr-[20px] py-3">
				<div className='flex items-center w-10'>
					<Image src={chip} alt="" />
				</div>
				<p className='text-[0.8rem]'>{props.cardNumber || 'XXXX XXXX XXXX XXXX XXXX'}</p>
			</div>
			<div className="flex justify-between items-center pl-[16px] pr-[20px] py-[15px] text-[0.8rem]">
				<p>{props.name || 'ISHAYA SOLOMON'}</p>
				<p>{props.expiryDate || 'XX/XX'}</p>
			</div>
		</div>
	 </a>
);

export default Card;
