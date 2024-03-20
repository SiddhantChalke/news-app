import { useState } from 'react';
// import { Link } from 'react-router-dom';

export default function Navbar({ setCategory }) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='h-16 px-2 z-10 flex items-center justify-between w-full shadow-lg'>
      <h1 className='text-3xl'>News App</h1>

      <nav className='w-3/4 flex justify-evenly uppercase'>
        {/* Links */}
        <div className="cursor-pointer text-stone-700 hover:scale-110" onClick={() => setCategory('general')}>Home</div>
        <div className="link" onClick={() => setCategory('sports')}>Sports</div>
        <div className="link" onClick={() => setCategory('technology')}>Technology</div>
        <div className="link" onClick={() => setCategory('health')}>Health</div>
        <div className="link" onClick={() => setCategory('business')}>Business</div>
        {/* Search bar */}
        <div className="relative ">
          <div className="absolute pointer-events-none ">
            <svg className="absolute text-slate-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </div>
          <input type="text" placeholder="Search" className='w-32 pl-8 rounded' />
        </div>
      </nav>
    </header>
  );
}
