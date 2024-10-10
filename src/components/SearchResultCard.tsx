// import { Restaurant } from '@/types'
// import { Link } from 'react-router-dom'
// import { AspectRatio } from './ui/aspect-ratio'
// import { Banknote, Clock, Dot } from 'lucide-react'

// type Props = {
//     restaurant: Restaurant
// }

// const SearchResultCard = ({ restaurant }: Props) => {
//     return (
//         <Link
//             to={`/details/${restaurant._id}`}
//             className='grid lg:grid-cols-[2fr_3fr] gap-5 group'>
//             <AspectRatio ratio={16/4}>
//                 <img
//                     src={restaurant.imageUrl}
//                     className='rounded-md w-full object-cover h-60'
//                     alt="restaurant-card"
//                 />
//             </AspectRatio>
//             <div>
//                 <h3 className='text-2xl font-bold tracking-tight mb-2 group-hover:underline'>
//                     {restaurant.restaurantName}
//                 </h3>
//                 <div id='card-content' className='grid md:grid-cols-2 gap-2'>
//                     <div className='flex flex-row flex-wrap'>
//                         {restaurant.cuisines.map((item, index) => (
//                             <span className='flex'>
//                                 <span>{item}</span>
//                                 {index < restaurant.cuisines.length - 1 && <Dot />}
//                             </span>
//                         ))}
//                     </div>
//                     <div className='flex gap-2 flex-col'>
//                         <div className='flex items-center gap-1 text-green-600'>
//                             <Clock className='text-green-600' />
//                             {restaurant.estimatedDeliveryTime} mins
//                         </div>
//                         <div className='flex items-center gap-1'>
//                             <Banknote />
//                             Delivery from ${(restaurant.deliveryPrice).toFixed(2)}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Link>
//     )
// }

// export default SearchResultCard


import { Restaurant } from '@/types';
import { Link } from 'react-router-dom';
import { AspectRatio } from './ui/aspect-ratio';
import { Banknote, Clock, Dot } from 'lucide-react';

type Props = {
    restaurant: Restaurant;
};

const SearchResultCard = ({ restaurant }: Props) => {
    return (
        <Link
            to={`/details/${restaurant._id}`}
            className='grid md:grid-cols-[2fr_3fr] gap-5 group'> {/* Switch to single column on small screens */}
            <AspectRatio ratio={16 / 9} className='w-full'>
                <img
                    src={restaurant.imageUrl}
                    className='rounded-md w-full object-cover h-60'
                    alt="restaurant-card"
                />
            </AspectRatio>
            <div>
                <h3 className='text-xl md:text-2xl font-bold tracking-tight group-hover:underline'>
                    {restaurant.restaurantName}
                </h3>
                <div id='card-content' className='grid gap-2'>
                    <div className='flex flex-wrap gap-1'>
                        {restaurant.cuisines.map((item, index) => (
                            <span key={index} className='flex items-center'>
                                <span>{item}</span>
                                {index < restaurant.cuisines.length - 1 && <Dot className='mx-1' />}
                            </span>
                        ))}
                    </div>
                    <div className='flex flex-col md:flex-row gap-2'>
                        <div className='flex items-center gap-1 text-green-600'>
                            <Clock className='text-green-600' />
                            {restaurant.estimatedDeliveryTime} mins
                        </div>
                        <div className='flex items-center gap-1'>
                            <Banknote />
                            Delivery from ${(restaurant.deliveryPrice).toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SearchResultCard;
