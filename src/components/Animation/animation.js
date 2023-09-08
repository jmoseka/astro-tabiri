
import './animation.css'

const Animation = () => {

    return (
        <div className='  mt-8 flex flex-col justify-center '>

            <div>
                <div className='loaders flex justify-center relative'>
                    <div className='absolute'><div className='rounded-full loader loader-1'></div></div>
                    <div className='absolute'><div className='rounded-full loader loader-2'></div></div>
                    <div className='absolute'><div className='rounded-full loader loader-3'></div></div>
                </div>
            </div>

            <div className=' translate-y-20 text-textLightGold'>
                Loading...
            </div>

        </div>

    )

}

export default Animation;