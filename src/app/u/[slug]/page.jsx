import { ChevronRight, User } from "lucide-react"
import {Button} from '@/components/ui/button'

const page = () => {
  return (
    <div>
        <section className="h-[50vh] w-full border-b-2 bg-amber-100 relative">
            <img 
            src="https://plus.unsplash.com/premium_photo-1747905993673-8c28788c78e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" 
            alt="profile" 
            className="object-cover h-[50vh] w-full"
            />
            <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
                <div className="bg-red-500 p-4 rounded-full shadow-xl shadow-red-400">
                    <User className="w-6 h-6"/>
                </div>
            </div>
        </section>
        <section className="py-8 max-w-5xl mx-auto px-4 flex flex-col items-center">
            <h3 className="font-bold text-xl">@leo33</h3>
            <p className="font-semibold text-sm text-gray-600">Short description</p>

            <div className="w-[80%] md:w-[50%] grid gap-2 my-4">
                {/* Links */}
                <Button variant='outline' className='flex items-center justify-between'>YouTube <ChevronRight/></Button>
                <Button variant='outline' className='flex items-center justify-between'>X <ChevronRight/></Button>
                <Button variant='outline' className='flex items-center justify-between'>Etsy store <ChevronRight/></Button>
                <Button variant='outline' className='flex items-center justify-between'>Portfolio <ChevronRight/></Button>
            </div>
        </section>
    </div>
  )
}

export default page