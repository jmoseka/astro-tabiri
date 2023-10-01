import './pageAnimation.css';
const PageAnimation = () => {
  const divElements = [];
  const movingSmallStars = [];
  const movingAverageStars = [];

  const randomNumber = () => {
    let result = Math.floor(Math.random() * 101);
    result = result.toString()
    return result;
  }

  const movingSeconds = () => {
    const result = Math.floor(Math.random() * 6);
    return result.toString();
  }




  const movingStars = () => {
    for (let i = 0; i < 30; i++) {
      const animationDelay = `${Math.random() * 25}s`;
      const myStyles = {
        top: `${randomNumber()}%`,
        left: `${randomNumber()}%`,
        animation: `animMovingStar 15s linear infinite`,
        animationDelay: animationDelay,

      };

      // Add random animation delays

      movingSmallStars.push(
        <div
          className={`w-[1px] h-[1px] bg-white absolute`}
          style={myStyles}
          key={i}
        ></div>
      );
    }

  }

  const twinkleStar = () => {
    const twinkleSeconds = () => {
      const result = (Math.floor(Math.random() * 41) + 10) / 10;
      return result.toString();
    }


    for (let i = 0; i < 10; i++) {
      const myStyles = {
        top: `${randomNumber()}%`,
        left: `${randomNumber()}%`,
        animation: `twinkle ${twinkleSeconds()}s linear infinite`,
      };

      divElements.push(
        <div style={myStyles} className={`star absolute`} key={i}>
        </div>
      );
    }
  }

  twinkleStar();
  movingStars();




  return (
    <div className="absolute h-screen w-full">
      <div className="starry-night  h-screen w-full relative">
        {divElements}
        {movingSmallStars}
        <div className='h-5 w-5 bg-orange-800 comet'></div>
 

      </div>
    </div>
  )
}

export default PageAnimation