import Image from 'next/image';


interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory
}) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
                <div
                onClick={() => setCategory('beach')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Beach' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>

                    <Image src="/Beach.jpg" alt="Category - Beach" width={30} height={30} />
                    <span className="text-xs">Beach</span>
                </div>

                <div
                onClick={() => setCategory('mansions')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Mansions' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>

                    <Image src="/Mansions.jpg" alt="Category - Mansions" width={30} height={30} />
                    <span className="text-xs">Mansions</span>
                </div>

                <div
                onClick={() => setCategory('cabins')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Cabins' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>

                    <Image src="/Cabins.jpg" alt="Category - Cabins" width={30} height={30} />
                    <span className="text-xs">Cabins</span>
                </div>

                <div
                onClick={() => setCategory('domes')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Domes' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>

                    <Image src="/Domes.jpg" alt="Category - Domes" width={30} height={30} />
                    <span className="text-xs">Domes</span>
                </div>

                <div
                onClick={() => setCategory('mountains')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Mountains' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>

                    <Image src="/Mountains.jpg" alt="Category - Mountains" width={30} height={30} />
                    <span className="text-xs">Mountains</span>
                </div>

                <div
                onClick={() => setCategory('rooms')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'rooms' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>

                    <Image src="/Rooms.jpg" alt="Category - Rooms" width={30} height={30} />
                    <span className="text-xs">Rooms</span>
                </div>

                
                <div
                onClick={() => setCategory('other')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'other' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>

                    <Image src="/other.png" alt="Category - Other" width={30} height={30} />
                    <span className="text-xs">Other</span>
                </div>
            </div>
        </>
    )
}

export default Categories;