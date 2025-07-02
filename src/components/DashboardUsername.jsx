'use client'

import { ExternalLink, ScanFace } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"

const DashboardUsername = () => {
  return (
    <div className="py-8 px-4 max-w-5xl mx-auto">
      <h3 className="font-bold text-3xl">Customize your link</h3>
      <p className="inline-flex gap-2">
        Choose a username that just screams you <ScanFace className="text-amber-500"/> <span className="font-semibold bg-amber-500 text-white px-2">/leo33</span> 
        <Link href='/u/leo'>
          <ExternalLink/> 
        </Link>
      </p>
      <div>
        <p className="font-semibold">Username</p>        
        <Input
        placeholder="username"
        className="my-1 w-[400px]"
        />
        <p className="text-slate-600 font-semibold text-sm">It can contain letters, numbers, hyphens and underscores</p>
        <Button className="mt-4">Customize username</Button>
      </div>
    </div>
  )
}

export default DashboardUsername