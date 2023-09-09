
import './animation.css'

const Animation = () => {

    return (
        <div className=' flex flex-col justify-center '>

            <div>
                <div className='loaders flex justify-center relative'>
                    <div className='absolute'><div className=' loader loader-1'></div></div>
                    <div className='absolute'><div className='loader loader-2'></div></div>
                    <div className='absolute'><div className='loader loader-3'></div></div>
                </div>
            </div>

            <div className=' translate-y-16 text-sm text-textLightGold'>
                Loading...
            </div>

        </div>

    )

}

export default Animation;