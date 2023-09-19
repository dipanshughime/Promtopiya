"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { useState } from 'react';
function page() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const router =useRouter();
  const handleSubmit=async(e)=>{
       e.preventDefault();
       const topic={title,description}
       try {
        const res=await fetch("http://localhost:3001/api/topics",
        {method: "POST",
        headed:{"content-type": "application/json"},
        body: JSON.stringify(topic)

        })

        if(res.status==201) {
          router.push("/");
        }
        
       } catch (error) {
        
       }
  }
  return (

   
<form  onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={e=>settitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={e=>setdescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button
      onClick={handleSubmit}
        type="submit"
        className="bg-black font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>


  )
}

export default page