import { useState } from 'react';
// import { Link } from 'react-router-dom';

export default function Navbar({setCategory}) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    // <header className='sticky top-0 z-[1] mx-auto flex w-full max-w-7xl flex-wrap items-center border-b border-gray-100 bg-background font-sans font-bold text-text-primary backdrop-blur-[100px]'>
    // <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    // <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="flex items-center justify-between h-16 w-full">
    //         News App
    //         {/* Menu button for mobile */}
    //         <div className="flex md:hidden">
    //           <button
    //             onClick={() => setIsOpen(!isOpen)}
    //             type="button"
    //             className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
    //             aria-controls="mobile-menu"
    //             aria-expanded={isOpen ? 'true' : 'false'}
    //           >
    //             <span className="sr-only">Open main menu</span>
    //             <svg className="block h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    //             </svg>
    //           </button>
    //         </div>
    //         {/* Desktop menu */}
    //         <div className="hidden md:block">
    //           <div className="flex items-center space-x-4">
    //             <a>Home</a>
    //             <a>World</a>
    //             <div className="relative group">
    //               <button
    //                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:bg-gray-700"
    //                 aria-expanded={isOpen ? 'true' : 'false'}
    //                 onClick={() => setIsOpen(!isOpen)}
    //               >
    //                 Categories
    //                 <svg
    //                   className="-mr-1 ml-2 h-5 w-5 transform group-hover:-rotate-180 transition-transform ease-in-out duration-150"
    //                   fill="currentColor"
    //                   viewBox="0 0 20 20"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     clipRule="evenodd"
    //                     d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414zM6 11a1 1 0 100 2h8a1 1 0 100-2H6z"
    //                   />
    //                 </svg>
    //               </button>
    //               {/* Dropdown menu */}
    //               {isOpen && (
    //                 <div className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg">
    //                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Politics</a>
    //                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Business</a>
    //                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Technology</a>
    //                 </div>
    //               )}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
    <header className='flex w-full'>
      <h1>News App</h1>
      
    <nav className='flex'>
      <div className="link" onClick={()=> setCategory('general')}>Home</div>
      <div className="link" onClick={()=> setCategory('sports')}>Sports</div>
      <div className="link" onClick={()=> setCategory('technology')}>Technology</div>
      <div className="link" onClick={()=> setCategory('health')}>Health</div>
      <div className="link" onClick={()=> setCategory('business')}>Business</div>
    </nav>
    </header>
  );
}
