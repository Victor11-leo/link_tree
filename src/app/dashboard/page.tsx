'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("https://linktree-clone-gules-omega.vercel.app/u/leo33");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2s
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
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
            <Card>
                <CardHeader>
                    <CardTitle>Customize your link</CardTitle>
                    <CardDescription>Choose a custom username for your link-in-bio page. This will be your public URL.</CardDescription>                    
                </CardHeader>
                <CardContent>
                    {/* link-preview */}
                    <Card className="shadow-none bg-secondary">
                        <CardContent>
                            <h4 className="font-semibold text-md">Your link preview</h4>
                            <div className="flex items-center gap-2.5">
                                <p>linktree-clone-gules-omega.vercel.app/u/leo33</p>                                
                                <div className="flex items-center gap-1.5">
                                    <Button onClick={handleCopy}>
                                        {copied ? 
                                        <ClipboardCheck/>
                                        :
                                        <Copy/>
                                        }
                                    </Button>
                                    <Button>
                                        <Link href="https://linktree-clone-gules-omega.vercel.app/u/leo33">
                                            <ExternalLink/>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid gap-2">
                        <h3 className="font-semibold text-lg">Username</h3>
                        <Input type="text" placeholder="desired username"/>
                        <p className="text-sm text-black/60">Your username can contain letters, numbers, hyphens, and underscores</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Update username</Button>
                </CardFooter>
            </Card>


            {/* Customize page */}
            {/* Manage links */}
        </section>
    </main>
  )
}

export default page