'use client'

import { Button } from "@/components/ui/button"
import UsernameForm from '@/components/UsernameForm'

import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton
} from '@clerk/nextjs'
import { ClipboardCheck, Copy, ExternalLink, Plus, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"

const page = () => {
    
  return (
    <main className="">        
        <header className="flex items-center justify-between absolute left-0 lg:left-50 right-0 lg:right-50 mx-10 mt-3  max-w-5xl bg-[#FDF0D5] p-2 rounded-2xl">
        <h1 className="font-semibold">LinkTree-Clone</h1>
        <div>
            <SignedOut>
                <SignInButton>
                    <Button>
                        <User/> Sign In
                    </Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <div className="flex items-center gap-2">
                    <Button><Plus/> Add link</Button>
                    <Button>Account</Button>
                    <UserButton/>
                </div>
            </SignedIn>
        </div>
        </header>
        <section className="pt-20 max-w-5xl px-4 mx-auto">
            {/* Analytics */}
            {/* Customize link */}
            <UsernameForm/>


            {/* Customize page */}
            {/* Manage links */}
        </section>
    </main>
  )
}

export default page