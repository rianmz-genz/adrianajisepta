import React, { useEffect, useState } from 'react'
import { getRank } from '../utils/utils'
import { BiRefresh} from "react-icons/bi"
const Epeppoint = () => {
    const [isGenerate,setIsGenerate] = useState(false)
    const [points, setPoints] = useState([
        {
          nama: "",
          matchs: [
            { r: 0, k: 0 },
            { r: 0, k: 0 },
            { r: 0, k: 0 },
            { r: 0, k: 0 },
            { r: 0, k: 0 },
          ],
          total: 0,
        },
        {
          nama: "",
          matchs: [
            { r: 0, k: 0 },
            { r: 0, k: 0 },
            { r: 0, k: 0 },
            { r: 0, k: 0 },
            { r: 0, k: 0 },
          ],
          total: 0,
        },
        {
            nama: "",
            matchs: [
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
            ],
            total: 0,
          },
          {
            nama: "",
            matchs: [
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
            ],
            total: 0,
          },
          {
            nama: "",
            matchs: [
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
            ],
            total: 0,
          },
          {
            nama: "",
            matchs: [
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
            ],
            total: 0,
          },
          {
            nama: "",
            matchs: [
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
            ],
            total: 0,
          },
          {
            nama: "",
            matchs: [
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
            ],
            total: 0,
          },
          {
            nama: "",
            matchs: [
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
            ],
            total: 0,
          },
          {
            nama: "",
            matchs: [
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
            ],
            total: 0,
          },
          {
            nama: "",
            matchs: [
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
            ],
            total: 0,
          },
          {
            nama: "",
            matchs: [
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
              { r: 0, k: 0 },
            ],
            total: 0,
          },
      ]);
    
      useEffect(() => {
        console.log(points);
      }, [points]);
    
      const handleChangeName = (e, i) => {
        const updatedPoints = [...points];
        updatedPoints[i].nama = e.target.value;
        setPoints(updatedPoints);
      };
    
      const handleChangeRank = (e, ir, i) => {
        if (e.target.value === "") return;
        const updatedPoints = [...points];
        updatedPoints[ir].matchs[i].r = getRank(parseInt(e.target.value));
        setPoints(updatedPoints);
        handleTotal(ir);
      };
    
      const handleChangeKill = (e, ir, i) => {
        if (e.target.value === "") return;
        const updatedPoints = [...points];
        updatedPoints[ir].matchs[i].k = parseInt(e.target.value);
        setPoints(updatedPoints);
        handleTotal(ir);
      };
    
      const handleTotal = (i) => {
        const updatedPoints = [...points];
        const total = updatedPoints[i].matchs.reduce((acc, match) => acc + match.r + match.k, 0);
        updatedPoints[i].total = total;
        setPoints(updatedPoints);
      };
    // Fungsi untuk mengurutkan berdasarkan total secara menurun
    const sortPointsByTotal = () => {
        setIsGenerate(true);
    const sortedPoints = [...points].sort((a, b) => b.total - a.total);
    setPoints(sortedPoints);
  };
  const resetPoints = () => {
    setIsGenerate(false);
    const updatedPoints = points.map((point) => ({
      ...point,
      nama: "",
      matchs: point.matchs.map((match) => ({ r: 0, k: 0 })),
      total: 0,
    }));
    setPoints(updatedPoints);
  };
  return (
    <main className='w-full min-h-screen flex justify-center items-center'>
        <section className=' py-20 px-8 w-11/12  min-h-screen'>
            <h1 className='text-4xl font-bold mb-4'>Hitung Poin Free Fire</h1>
            <div className='mb-4 flex space-x-3 items-center'>
                <button onClick={resetPoints} className=' flex bg-[#f3f4f6] items-center p-1 rounded'>
                    <BiRefresh  className='text-3xl'/>
                </button>
                <button onClick={sortPointsByTotal} className=' flex bg-[#f3f4f6] items-center px-3 py-1 rounded'>
                    Generate Champion
                </button>
                <p>|</p>
                <p>Keterangan:</p>
                <span className='bg-green-200 px-4 h-8 flex justify-center items-center text-gray-400'>Placement</span>
                <span className='bg-blue-200 w-16 h-8 flex justify-center items-center text-gray-400'>Kill</span>
            </div>
            <table className='overflow-x-scroll'>
                <thead>
                    <tr className='text-gray-500'>
                        <th className='text-xl px-12 py-4 border-b border-r border-t border-gray-200'>Nama Tim</th>
                        <th className='text-xl px-4 py-4 border border-gray-200'>Match 1</th>
                        <th className='text-xl px-4 py-4 border border-gray-200'>Match 2</th>
                        <th className='text-xl px-4 py-4 border border-gray-200'>Match 3</th>
                        <th className='text-xl px-4 py-4 border border-gray-200'>Match 4</th>
                        <th className='text-xl px-4 py-4 border border-gray-200'>Match 5</th>
                        <th className='text-xl px-4 py-4 border border-gray-200'>Total</th>
                        <th className={` transition-all duration-300 text-xl px-4 py-4 border-b border-l border-t border-gray-200`}>Rank</th>
                    </tr>
                </thead>
                <tbody>
                    {points.map((point, ir)=> (
                        <tr key={ir}>
                        <td className='border-r border-t border-b '>
                            <input value={point.nama} onChange={(e) => handleChangeName(e, ir)} type='text' className='focus:outline-none px-4 py-2' placeholder='Nama Team'/>
                        </td>
                        {point.matchs.map((match, i) => (
                        <td key={i} className='border-r border-t border-b w-24 '>
                            <input maxLength={2} value={match.r} onChange={(e) => handleChangeRank(e,ir, i)} type='text' className='focus:outline-none border-b w-24 text-gray-400 bg-green-200' placeholder='R'/>
                            <input maxLength={2} value={match.k} onChange={(e) => handleChangeKill(e, ir, i)} type='text' className='focus:outline-none w-24 text-gray-400 bg-blue-200' placeholder='K'/>
                        </td>   
                        ))}
                        <td className='border-r text-gray-400 border-t border-b w-24'>
                            <p className='text-center'>{point.total}</p>
                        </td>
                        <td className={`${isGenerate ? "opacity-100 visible" : "invisible opacity-0"} ${ir + 1 == 1 || ir + 1 == 2 || ir + 1 == 3 && isGenerate == true ? "bg-yellow-100 " : ""} transition-all duration-300 text-gray-400 border-t border-b w-24`}>
                            <p className='text-center'>{ir + 1}</p>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <footer className='text-gray-400 mt-4'>
                Develop by Adrian Aji Septa, FREE FIRE REGIONAL BANYUMAS WANI!
            </footer>
        </section>
    </main>
  )
}

export default Epeppoint
