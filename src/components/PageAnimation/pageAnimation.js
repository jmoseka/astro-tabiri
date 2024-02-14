import './pageAnimation.css';
const PageAnimation = () => {
  const divElements = [];
  const movingSmallStars = [];

  const randomNumber = () => {
    let result = Math.floor(Math.random() * 101);
    result = result.toString();
    return result;
  };

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
          className={`w-[1px] h-[1px] bg-lightBlueMain absolute`}
          style={myStyles}
          key={i}
        ></div>,
      );
    }

    for (let i = 0; i < 7; i++) {
      const animationDelay = `${Math.random() * 14}s`;
      const myStyles = {
        top: `${randomNumber()}%`,
        left: `${randomNumber()}%`,
        animation: `animMovingStar 40s linear infinite`,
        animationDelay: animationDelay,
      };

      movingSmallStars.push(
        <div
          className={`w-[2.2px] h-[2.2px] bg-lightBlueMain absolute`}
          style={myStyles}
          key={i + animationDelay + i}
        ></div>,
      );
    }
  };

  const twinkleStar = () => {
    const twinkleSeconds = () => {
      const result = (Math.floor(Math.random() * 41) + 10) / 10;
      return result.toString();
    };

    for (let i = 0; i < 10; i++) {
      const myStyles = {
        top: `${randomNumber()}%`,
        left: `${randomNumber()}%`,
        animation: `twinkle ${twinkleSeconds()}s linear infinite`,
      };

      divElements.push(
        <div style={myStyles} className={`star absolute`} key={i}></div>,
      );
    }
  };

  twinkleStar();
  movingStars();

  return (
    <div className="absolute  w-full">
      <div className="starry-night  h-screen w-full relative">
        {divElements}
        {movingSmallStars}
      </div>
    </div>
  );
};

export default PageAnimation;
