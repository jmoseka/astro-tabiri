import './pageAnimation.css';

const PageAnimation = () => {
    const divElements = [];

    for (let i = 0; i < 100; i++) {
      divElements.push(
        <div key={i}>
          Div {i + 1}
        </div>
      );
    }

    return (
        <div className="absolute h-screen w-full ">
            <div class="starry-night">
               <div>{divElements}</div>
            </div>

        </div>
    )

}

export default PageAnimation;