import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useEffect, useRef, useState } from 'react';

const InputBox = ({ name, type }) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [currType, setCurrType] = useState(type);
  const inputRef = useRef();

  const inputIcon = () => {
    switch (type) {
      case 'text':
        return <PersonIcon />;
      case 'email':
        return <AlternateEmailIcon />;
      case 'password':
        return passwordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />;
      default:
        return null;
    }
  }

  const handleToggle = () => {
    if (type === 'password') {
      setCurrType((prevType) => (prevType === 'password' ? 'text' : 'password'));
      setPasswordVisible((prevVisible) => !prevVisible);
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  useEffect(() => {
    const turnOffIsActive = (e) => {
      if (!inputRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener('click', turnOffIsActive);

    return () => document.removeEventListener('click', turnOffIsActive);
  }, []);

  return (
    <div className={`m-4 ml-0 rounded-2xl bg-gray-700 ${type === 'text' ? 'w-[16rem] mb-0' : 'w-[33rem]'} border-solid border-2 ${isActive ? 'border-sky-500' : 'border-transparent'}`}
      ref={inputRef}
    >
      <div className='mx-2 my-1 flex justify-between items-center'>
        <div className='py-0.5 px-2'>
          <p className={`text-xs font-semibold ${isActive ? 'text-sky-400' : 'opacity-50'}`}>{name}</p>
          <input className={`bg-gray-700 !outline-none text-lg ${type === 'text' ? 'w-[10rem]' : 'w-[25rem]'} `}
            onClick={() => setIsActive(true)}
            onChange={handleChange}
            value={value}
            type={currType}
          />
        </div>
        <div className={`px-2 ${type === 'password' ? 'cursor-pointer' : ''}`} onMouseDown={handleToggle}>
          {inputIcon()}
        </div>
      </div>
    </div>
  );
}

export default InputBox;
