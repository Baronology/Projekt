import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded my-8">
      <h1 className="text-center text-3xl font-bold text-gray-800 py-8">
        SIGN UP
      </h1>
      <div className="mx-4 mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Enter your username"
        />
      </div>
      <div className="mx-4 mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-dottet focus:shadow-outline"
          id="password"
          type="password"
          placeholder="••••••••••••"
        />
      </div>
      <div className="text-center mb-4">
        <button className="bg-white p-2 px-4 rounded-lg ">Sign up</button>
      </div>
      <div className="text-center">
        <p className="text-gray-600">
          Already have an account?
          <a href="#" className="text-rose-600 font-bold ml-2 underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
