import React from 'react';

const Navbar = ({ onSave, error }) => {
  return (
    <div className='w-screen bg-gray-200 h-14 relative flex items-center justify-center'>
      
      {/* Center error button/message */}
      {error && (
        <div className='absolute left-1/2 transform -translate-x-1/2 bg-red-100 text-red-700 px-4 py-1 rounded text-sm font-medium'>
          {error}
        </div>
      )}

      <div className='absolute right-24'>
        <button
          onClick={onSave}
          className='text-blue-600  border-b-blue-600 p-1.5 max-w-48 cursor-pointer bg-white shadow-blue-600 border-2 shadow-sm'
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Navbar;
