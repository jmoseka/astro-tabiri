import './pageAnimation.css';
const PageAnimation = () => {
  const divElements = [];
  const movingStarsElement = [];

  const randomNumber = () => {
    let result = Math.floor(Math.random() * 101);
    result = result.toString()
    return result;
  }

  const movingSeconds = () => {
    const result = Math.floor(Math.random() * 9);
    return result.toString();
  }


  const twinkleStar = () => {
    const twinkleSeconds = () => {
      const result = (Math.floor(Math.random() * 41) + 10) / 10;
      return result.toString();
    }


    for (let i = 0; i < 20; i++) {
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
        {movingStarsElement}

      </div>
    </div>
  )
}

export default PageAnimation