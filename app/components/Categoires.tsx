'use client';

import { useState } from 'react';
import Image from 'next/image';
import useSearchModal, { SearchQuery } from '../hooks/useSearchModal';

const Categories = () => {
    const searchModal = useSearchModal();
    const [category, setCategory] = useState('');

    const _setCategory = (_category: string) => {
        setCategory(_category);

        const query: SearchQuery = {
            country: searchModal.query.country,
            checkIn: searchModal.query.checkIn,
            checkOut: searchModal.query.checkOut,
            guests: searchModal.query.guests,
            bedrooms: searchModal.query.bedrooms,
            bathrooms: searchModal.query.bathrooms,
            category: _category
        }

        searchModal.setQuery(query);
    }

    return (
        <div className="pt-3 cursor-pointer pb-6 flex flex-wrap items-center justify-center space-x-12 space-y-4 md:space-y-2">
            <div
                onClick={() => _setCategory('')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >

                <Image src="/all1.jpg" alt="Category - Beach" width={38} height={85} />
                <span className="text-xs">All</span>
            </div>

            <div
                onClick={() => _setCategory('beach')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'beach' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >

                <Image src="/Beach.jpg" alt="Category - Beach" width={30} height={30} />
                <span className="text-xs">Beach</span>
            </div>

            <div
                onClick={() => _setCategory('mansions')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'mansions' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >

                <Image src="/Mansions.jpg" alt="Category - Mansions" width={30} height={30} />
                <span className="text-xs">Mansions</span>
            </div>

            <div
                onClick={() => _setCategory('cabins')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'cabins' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >

                <Image src="/Cabins.jpg" alt="Category - Cabins" width={30} height={30} />
                <span className="text-xs">Cabins</span>
            </div>

            <div
                onClick={() => _setCategory('tiny_homes')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'tiny_homes' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >

                <Image src="/Tiny Homes.jpg" alt="Category - Tiny Homes" width={30} height={30} />
                <span className="text-xs">Tiny Homes</span>
            </div>

            <div
                onClick={() => _setCategory('domes')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'domes' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >

                <Image src="/Domes.jpg" alt="Category - Domes" width={30} height={30} />
                <span className="text-xs">Domes</span>
            </div>

            <div
                onClick={() => _setCategory('mountains')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'mountains' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >

                <Image src="/Mountains.jpg" alt="Category - Mountains" width={30} height={30} />
                <span className="text-xs">Mountains</span>
            </div>

            <div
                onClick={() => _setCategory('rooms')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'rooms' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >

                <Image src="/Rooms.jpg" alt="Category - Rooms" width={30} height={30} />
                <span className="text-xs">Rooms</span>
            </div>

            <div
                onClick={() => _setCategory('tree_house')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'tree_house' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >

                <Image src="/Tree-house.jpg" alt="Category - Tree-house" width={30} height={30} />
                <span className="text-xs">Tree House</span>
            </div>

            <div
                onClick={() => _setCategory('lake')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'lake' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >

                <Image src="/Lake.jpg" alt="Category - Lake" width={30} height={30} />
                <span className="text-xs">Lake Front</span>
            </div>

            <div
                onClick={() => _setCategory('camping')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'camping' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >

                <Image src="/Camping.jpg" alt="Category - Camping" width={30} height={30} />
                <span className="text-xs">Camping</span>
            </div>

            <div
                onClick={() => _setCategory('houseboats')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'houseboats' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >

                <Image src="/Houseboats.jpg" alt="Category - Houseboats" width={30} height={30} />
                <span className="text-xs">HouseBoats</span>
            </div>

            <div
                onClick={() => _setCategory('islands')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'islands' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >

                <Image src="/Islands.jpg" alt="Category - Lake" width={30} height={30} />
                <span className="text-xs">Islands</span>
            </div>

            <div
                onClick={() => _setCategory('luxe')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'luxe' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >

                <Image src="/Luxe.jpg" alt="Category - Luxe" width={30} height={30} />
                <span className="text-xs">Luxury</span>
            </div>

            <div
                onClick={() => _setCategory('other')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'other' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >

                <Image src="/other.png" alt="Category - Lake" width={30} height={30} />
                <span className="text-xs">Other</span>
            </div>
        </div>
    )
}

export default Categories;