"use client"
import { Plus } from 'lucide-react'


import { Button } from './ui/button'
import {
  Drawer,  
  DrawerContent,  
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from './ui/input'
import { Label } from './ui/label'

const DashboardLinks = () => {
  return (
    <div className='py-8 px-4 flex flex-col gap-5 max-w-5xl mx-auto'>
      <div>
        <h3 className="font-bold text-3xl">Manage your links</h3>
        <p>Organize and customize your link in-bio-page. Feel free to reorder or edit links</p>
        <ul className='space-y-3 my-3'>
          <li className='flex items-center gap-2.5'>
            <div className='w-2 h-2 rounded-full bg-blue-500'></div>
            Drag & drop to reorder
          </li>
          <li className='flex items-center gap-2.5'>
            <div className='w-2 h-2 rounded-full bg-purple-500'></div>
            Real time updates
          </li>
          <li className='flex items-center gap-2.5'>
            <div className='w-2 h-2 rounded-full bg-amber-500'></div>
            Click tracking analytics
          </li>
        </ul>
      </div>

      <div>
        <h4 className='font-semibold text-xl'>Your links</h4>
        <Dialog className='hidden md:block'>
          <DialogTrigger>
            <Button className='hidden md:flex'><Plus/> Add link</Button>
          </DialogTrigger>
          <DialogContent>
            <div className='mx-auto w-full max-w-sm py-10'>
              <p className='font-semibold text-lg'>Link Details</p>
              <p className='text-sm text-slate-500'>Fill in the info below to create your link</p>
              <div className='grid gap-3 my-4'>
                <div className='grid gap-2.5'>
                  <Label>Link title</Label>
                  <Input 
                  type='text'
                  placeholder='Link title'/>
                </div>
                <div className='grid gap-2.5'>
                  <Label>URL</Label>
                  <Input 
                  type='url'
                  placeholder='URL'/>
                </div>
              </div>
              <Button>Create link</Button>
            </div>
          </DialogContent>
        </Dialog>


        <Drawer className='block md:hidden'>
          <DrawerTrigger asChild>
            <Button  className='visible md:hidden'><Plus/> Add link</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className='mx-auto w-full max-w-sm py-10'>
              <p className='font-semibold text-lg'>Link Details</p>
              <p className='text-sm text-slate-500'>Fill in the info below to create your link</p>
              <div className='grid gap-3 my-4'>
                <div className='grid gap-2.5'>
                  <Label>Link title</Label>
                  <Input 
                  type='text'
                  placeholder='Link title'/>
                </div>
                <div className='grid gap-2.5'>
                  <Label>URL</Label>
                  <Input 
                  type='url'
                  placeholder='URL'/>
                </div>
              </div>
              <Button>Create link</Button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}

export default DashboardLinks