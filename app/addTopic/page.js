import React from 'react'

function page() {
  return (
   
<form className="flex flex-col gap-3">
      <input
        
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-black font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>


  )
}

export default page