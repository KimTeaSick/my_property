"use client"
import Button from "./components/dash/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div className="w-[70%] p-5">
        <h1 className="text-2xl">현재 자산 :</h1>
      </div>
      <Button event={() => { console.log("asd") }} title="전체 자산" primary={false} size="w-[29rem] h-[9rem]" />
      <div className="flex gap-[1rem] my-4">
        <Button event={() => { router.push("/stock") }} primary={false} size="w-[9rem] h-[9rem]" title="주식" />
        <Button event={() => { console.log("asd") }} primary={false} size="w-[9rem] h-[9rem]" title="코인" />
        <Button event={() => { console.log("asd") }} primary={false} size="w-[9rem] h-[9rem]" title="부동산" />
      </div>
    </div>
  );
}
