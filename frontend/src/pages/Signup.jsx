import React,{useState} from 'react'
import { Link } from 'react-router-dom';

function Signup() {
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

   
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-[#EDEFE1]">
  <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm">
    <h2 className="text-3xl font-bold text-center mb-6 text-[#6ad1ed]">Sign Up</h2>

    <div className="mb-4">
      <label htmlFor="name" className="block text-[#e6a05a] text-sm font-bold mb-2">
        Full Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="shadow appearance-none border border-[#BBDCE5] rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-[#BBDCE5]"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block text-[#e6a05a] text-sm font-bold mb-2">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="shadow appearance-none border border-[#BBDCE5] rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-[#BBDCE5]"
      />
    </div>

    <div className="mb-6">
      <label htmlFor="password" className="block text-[#e6a05a] text-sm font-bold mb-2">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        className="shadow appearance-none border border-[#BBDCE5] rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:border-[#BBDCE5]"
      />
    </div>

    <button
      type="submit"
      className="bg-[#D0A988] hover:bg-[#BBDCE5] text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300 ease-in-out"
    >
      Create Account
    </button>
    <Link to={"/login"} className='text-[#6ad1ed] py-4'>Already Have Account</Link>
  </form>
</div>

  )
}

export default Signup