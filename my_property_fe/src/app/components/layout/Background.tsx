'use client'

import { ReactNode } from "react"

const star = (position: { x: string, y: string }) => { return `w-1 h-1 bg-yellow-50 rounded-xl shadow-2xl shadow-white absolute left-${position.x} top-${position.y}` }

export const Background = ({ children }: { children: ReactNode }) => {
  const STAR_COUNT = 33;
  console.log((Math.random() * 33).toFixed(0));
  return (
    <div className="fixed bg-black w-full h-[100vh]">
      {Array(STAR_COUNT).fill(1).map((v) => (
        < div className={star({ x: (Math.random() * 96).toFixed(0), y: (Math.random() * 96).toFixed(0) })} />
      ))
      }
      {children}
    </div>
  )
}