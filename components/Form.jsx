import React from 'react'
import { FaSkullCrossbones } from 'react-icons/fa';
import { BiEdit } from 'react-icons/bi';
import Link from 'next/link';
// import { Link } from 'react-router-dom';

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/topics", {
      next:{revalidate:0}
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};



export default async function TopicsList() {
  const {topics} = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <FaSkullCrossbones id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <BiEdit size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}