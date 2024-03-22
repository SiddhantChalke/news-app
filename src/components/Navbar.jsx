import { useEffect, useState } from 'react';

export default function Navbar({ category, setCategory }) {

  const [isOpen, setIsOpen] = useState(false);
  // upon clicking on links, close the mobile nav
  useEffect(() => {
    setIsOpen(!isOpen);
  }, [category])

  return (
    <header className='h-16 z-10 flex items-center justify-between w-full shadow-lg sticky'>
      <h1 className='text-lg ml-2 md:ml-4 md:text-3xl'>News App</h1>
      {/* Mobile nav */}
      <button onClick={() => { setIsOpen(!isOpen) }} className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 md:hidden" type="button" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      {isOpen && (

        <div className="flex flex-col items-center gap-4 mt-80 bg-slate-800 w-full h-64 absolute md:hidden">
          <div className="cursor-pointer text-2xl text-slate-100 font-normal " onClick={() => setCategory('general')}>Home</div>
          <div className="cursor-pointer text-2xl text-slate-100 font-normal " onClick={() => setCategory('sports')}>Sports</div>
          <div className="cursor-pointer text-2xl text-slate-100 font-normal " onClick={() => setCategory('technology')}>Technology</div>
          <div className="cursor-pointer text-2xl text-slate-100 font-normal " onClick={() => setCategory('health')}>Health</div>
          <div className="cursor-pointer text-2xl text-slate-100 font-normal " onClick={() => setCategory('business')}>Business</div>
        </div>
      )
      }

      <nav className='w-3/4 hidden justify-evenly uppercase md:flex'>
        {/* Links */}
        <div className="cursor-pointer text-stone-700 font-normal hover:font-semibold" onClick={() => setCategory('general')}>Home</div>
        <div className="cursor-pointer text-stone-700 font-normal hover:font-semibold" onClick={() => setCategory('sports')}>Sports</div>
        <div className="cursor-pointer text-stone-700 font-normal hover:font-semibold" onClick={() => setCategory('technology')}>Technology</div>
        <div className="cursor-pointer text-stone-700 font-normal hover:font-semibold" onClick={() => setCategory('health')}>Health</div>
        <div className="cursor-pointer text-stone-700 font-normal hover:font-semibold" onClick={() => setCategory('business')}>Business</div>
        {/* Search bar */}
        {/* <div className="relative ">
          <div className="absolute pointer-events-none ">
            <svg className="absolute text-slate-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </div>
          <input type="text" placeholder="Search" className='w-32 pl-8 rounded'/>
        </div> */}
      </nav>
    </header>

  );
}
