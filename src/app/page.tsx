import { Button } from "@/components/ui/button"
import {ArrowRight, CheckCircle, Stars } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

const page = () => {
  return (
    <div className="bg-amber-100 py-8 flex flex-col items-center">
      <section 
      id="hero"
      className="flex flex-col items-center justify-center px-5 lg:px-10 py-8 bg-amber-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-5xl">Everything you are in one simple link, in bio</h2>
            <p className="max-w-[80%]">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
            <div>
              <Link href='/dashboard'>
                <Button>Get started</Button>
              </Link>
            </div>
          </div>

          <div className="relative rounded-xl aspect-square w-[400px]">
            <img 
            className="rounded-xl object-cover"
            src="https://images.unsplash.com/photo-1550853024-fae8cd4be47f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D" alt="yellow-bird" />
          </div>
        </div>
      </section>

      <section 
      id="features"
      className="flex flex-col items-start justify-center px-5 lg:px-10 py-8 w-[80%]"
      >
        <div className="grid gap-2.5">
          <h3 className="font-bold text-3xl">Everything you need</h3>
          <p>Powerful features designed to help you share your content and grow your audience</p>
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
            <div className="flex items-center gap-2 font-semibold">
              <Stars/> Fully customizable
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <Stars/> Advanced Analytics
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <Stars/> Mobile Optimized
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <Stars/> Lightning Fast
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <Stars/> Secure & reliable
            </div>
          </div>
        </div>
      </section>
      <section 
      id="faq"
      className="flex flex-col items-start justify-center px-5 lg:px-10 py-8 bg-amber-100 w-[80%]"
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
          <div>
            <h3 className="font-bold text-3xl">Got questions</h3>
            <p>Hopefully these FAQs offer some answers</p>
          </div>
          <div className="w-[60%]">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Product Information</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Our flagship product combines cutting-edge technology with sleek
                    design. Built with premium materials, it offers unparalleled
                    performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and an
                    intuitive user interface designed for both beginners and experts.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Shipping Details</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    We offer worldwide shipping through trusted courier partners.
                    Standard delivery takes 3-5 business days, while express shipping
                    ensures delivery within 1-2 business days.
                  </p>
                  <p>
                    All orders are carefully packaged and fully insured. Track your
                    shipment in real-time through our dedicated tracking portal.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Return Policy</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    We stand behind our products with a comprehensive 30-day return
                    policy. If you&apos;re not completely satisfied, simply return the
                    item in its original condition.
                  </p>
                  <p>
                    Our hassle-free return process includes free return shipping and
                    full refunds processed within 48 hours of receiving the returned
                    item.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <section 
      id="cta"
      className="flex flex-col items-center justify-center mx-5 lg:mx-10  px-5 lg:px-10 py-8 bg-amber-500 rounded-xl w-[80%]"
      >
        <div className="flex flex-col items-center gap-2.5 ">
          <h4 className="font-bold text-2xl">Ready to get started</h4>
          <Link href='/dashboard'>
            <Button>Create your Link <ArrowRight/></Button>
          </Link>
          <div className="flex items-center gap-2 border-y-2 py-2">
            <div className="flex items-center gap-1">
              <CheckCircle/>Free to start
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle/>Set up in seconds
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default page