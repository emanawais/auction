import React from 'react'

function NAVBAR() {
  return (
    <>
      
  <div>
  {/* Navbar */}
  <nav className="bg-white shadow-lg sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        {/* Logo and main links */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <i className="fas fa-gavel text-amber-600 text-2xl" />
            <span className="text-xl font-bold text-gray-800">BidMaster</span>
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium">Live Auctions</a>
            <a href="#" className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium">Categories</a>
            <a href="#" className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium">How It Works</a>
            <a href="#" className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium">Sell With Us</a>
          </div>
        </div>
        {/* Right side items */}
        <div className="flex items-center space-x-4">
          {/* Search bar (desktop) */}
          <div className="hidden md:block relative">
            <input type="text" placeholder="Search auctions..." className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
            <i className="fas fa-search absolute left-3 top-3 text-gray-400" />
          </div>
          {/* Notification and user profile */}
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-600 hover:text-amber-600 relative">
              <i className="far fa-bell text-xl" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </button>
            <button className="p-2 text-gray-600 hover:text-amber-600">
              <i className="far fa-heart text-xl" />
            </button>
            <div className="hidden md:block">
              <button className="flex items-center space-x-2 border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-50">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-8 h-8 rounded-full" />
                <span className="text-sm font-medium">My Account</span>
              </button>
            </div>
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700 focus:outline-none">
            <i className="fas fa-bars text-xl" />
          </button>
        </div>
      </div>
      {/* Search bar (mobile) */}
      <div className="md:hidden pb-3 px-2">
        <div className="relative">
          <input type="text" placeholder="Search auctions..." className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
          <i className="fas fa-search absolute left-3 top-3 text-gray-400" />
        </div>
      </div>
    </div>
    {/* Mobile menu (hidden by default) */}
    <div className="md:hidden hidden bg-gray-50">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-100">Live Auctions</a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-100">Categories</a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-100">How It Works</a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-100">Sell With Us</a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-100">My Account</a>
      </div>
    </div>
  </nav>
  {/* Page content would go here */}
  <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-gray-800">Welcome to BidMaster Auctions</h1>
    <p className="mt-2 text-gray-600">Find unique items and place your bids today!</p>
  </div>
</div>




    </>
  )
}

export default NAVBAR
