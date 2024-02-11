import { Link } from 'react-router-dom';

const ZodiacSignList = (props) => {
  const sendDataToParent = (data) => {
    props.onPropToParent(data);
  };

  return (
    <div className="flex">
      <div className="zod-btn-container flex flex-col ">
        <Link
          className="zod-btn"
          to="/pisces"
          onClick={() => sendDataToParent(true)}
          state={{ name: 'pisces' }}
        >
          Pisces
        </Link>
        <Link
          className="zod-btn"
          to="/aries"
          onClick={() => sendDataToParent(true)}
          state={{ name: 'aries' }}
        >
          Aries
        </Link>
        <Link
          className="zod-btn"
          to="/capricorn"
          onClick={() => sendDataToParent(true)}
          state={{ name: 'capricorn' }}
        >
          Capricorn
        </Link>
        <Link
          className="zod-btn"
          to="/gemini"
          onClick={() => sendDataToParent(true)}
          state={{ name: 'gemini' }}
        >
          Gemini
        </Link>
        <Link
          className="zod-btn"
          to="/cancer"
          onClick={() => sendDataToParent(true)}
          state={{ name: 'cancer' }}
        >
          Cancer
        </Link>
        <Link
          className="zod-btn"
          to="/virgo"
          onClick={() => sendDataToParent(true)}
          state={{ name: 'virgo' }}
        >
          Virgo
        </Link>
      </div>

      <div className="zod-btn-container flex flex-col items-start ">
        <Link
          className="zod-btn"
          to="/scorpio"
          onClick={() => sendDataToParent(true)}
          state={{ name: 'scorpio' }}
        >
          Scorpio
        </Link>

        <Link
          className="zod-btn"
          to="/leo"
          onClick={() => sendDataToParent(true)}
          state={{ name: 'leo' }}
        >
          Leo
        </Link>
        <Link
          className="zod-btn"
          to="/libra"
          onClick={() => sendDataToParent(true)}
          state={{ name: 'libra' }}
        >
          Libra
        </Link>
        <Link
          className="zod-btn"
          to="/taurus"
          onClick={() => sendDataToParent(true)}
          state={{ name: 'taurus' }}
        >
          Taurus
        </Link>
        <Link
          className="zod-btn"
          to="/sagittarius"
          onClick={() => sendDataToParent(true)}
          state={{ name: 'sagittarius' }}
        >
          Sagittarius
        </Link>
        <Link
          className="zod-btn"
          to="/aquarius"
          onClick={() => sendDataToParent(true)}
          state={{ name: 'aquarius' }}
        >
          Aquarius
        </Link>
      </div>
    </div>
  );
};

export default ZodiacSignList;
