import { useState } from 'react';
import { useContext } from 'react';
import Context from '../../ContextWrapper';
import { useNavigate } from 'react-router-dom';

function LoginCard() {
  const navigate = useNavigate()
  const [isValid, setIsValid] = useState(true);
  const {setEmail,email, setAuthorized} = useContext(Context)
  return (
    <form
      action=""
      className='flex flex-col items-center sm:w-[700px] w-screen sm:h-[310px] h-screen shadow-md shadow-zinc-300 justify-center rounded-[13px]'
    >
      <h1 className='text-3xl font-bold mb-5'>LOGIN FORM</h1>
      <div className='flex flex-col'>
        <label htmlFor=''>Email:</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
            setIsValid(e.target.checkValidity());
          }}
          required
          value={email}
          type='email'
          className={`border rounded-[6px] my-2  ${
            isValid ? 'border-zinc-300' : 'border-red-500'
          }`}
          style={{ backgroundColor: isValid ? '' : '#FFC0CB' }}
        />
      </div>

      <button
        disabled={!isValid}
        onClick={() => {
          isValid ? setAuthorized(true) : null;
          navigate("/mainpage")
        }}
        className={`${
          isValid ? 'bg-yellow-500 hover:bg-yellow-700' : 'bg-[#D7D7D7] pointer-events-none'
        } py-2 px-4 rounded-[10px] `}
        type='submit'
      >
        Submit
      </button>
    </form>
  );
}

export default LoginCard;
