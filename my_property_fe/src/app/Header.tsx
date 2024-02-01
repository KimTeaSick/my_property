"use client"
import Image from "next/image"
import Logo from "../assets/default.png"
import { useRouter } from "next/navigation"

const menu = "text-sm text-slate-400 cursor-pointer"

function Header() {

  const router = useRouter()

  return (
    <div className="flex justify-between p-3 items-center">
      <Image className="cursor-pointer" src={Logo} width={50} height={50} alt="Error, why dont show logo..." onClick={() => router.push("/")} />
      <div className="flex gap-3">
        <p className={menu}>contact</p>
        <p className={menu}>about</p>
      </div>
    </div>
  )
}

export default Header