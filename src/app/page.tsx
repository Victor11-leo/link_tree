import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ChartSpline, Palette, ShieldCheck, TabletSmartphone, Users,Zap } from "lucide-react"
import {
  Card,
  CardContent,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const page = () => {
  const data = [
    {
      icon:<Palette/>,
      heading:'Fully customizable',
      text:'Make your link page uniquely yours with custom themes, colors, and layouts that match your brand.'
    },
    {
      icon:<ChartSpline/>,
      heading:'Advanced analytics',
      text:'Track clicks, understand your audience, and optimize your content with detailed insights and reports.'
    },
    {
      icon:<TabletSmartphone/>,
      heading:'Mobile optimized',
      text:'Your link page looks perfect on every device, from desktop computers to mobile phones.'
    },
    {
      icon:<ShieldCheck/>,
      heading:'Secure & reliable',
      text:'Enterprise-grade security with 99.9% uptime guarantee to keep your links always accessible.'
    },
    {
      icon:<Users/>,
      heading:'Team collaboration',
      text:'Work together with your team to manage and optimize your link pages collaboratively.'
    },
    {
      icon:<Zap/>,
      heading:'Lightning fast',
      text:'Optimized for speed with instant loading times and seamless user experience.'
    },
  ]

  const faqs = [
    {
      value:'1',
      title:'Why do I need a link in bio tool?',
      text:[
        <p>Right now, every time you’ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It’s time-consuming and complicated – making it so much harder to keep everything up to date.</p>,
        <p>A link in bio tool means you never have to compromise, or remove one link from your bio so you can add another. You can keep everything you want to share online in one link. When you’ve got a change, you only ever have to make it once.</p>
      ]
    },
    {
      value:'2',
      title:'How many links should I have on my Linktree clone?',
      text:[
        <p>This depends on two things. If your priority is click-throughs and conversion, we recommend having 3-7 links on your Linktree at once (based on our most successful creators). Including too many options for your visitors slows down their course of action.</p>,
        <p>That said: for certain creators whose priority is display, education and showcasing (e.g. a record label with a library of new releases to promote, or a management company looking to showcase their full roster of clients), including more than seven links fulfils their purpose perfectly.</p>,
        <p>You can use features on Linktree to add subheadings, sections, animation and other prioritisation methods to your links – so no matter how many things you’ve got to share, you can drive your visitors to what’s most important, first.</p>
      ]
    },
    {
      value:'3',
      title:'Do I need a website to use Linktree clone?',
      text:[
        <p>No, you don’t! Linktree can act as your very own mini-website to share, sell and grow without any of the time and effort it takes to build and maintain a regular website. You can create a design that fully reflects your personality and brand in seconds, with no knowledge, skills or experience needed. If you already have a website, that’s great: you can add it to your Linktree.</p>,
        <p>That said: for certain creators whose priority is display, education and showcasing (e.g. a record label with a library of new releases to promote, or a management company looking to showcase their full roster of clients), including more than seven links fulfils their purpose perfectly.</p>,
        <p>You can use features on Linktree to add subheadings, sections, animation and other prioritisation methods to your links – so no matter how many things you’ve got to share, you can drive your visitors to what’s most important, first.</p>
      ]
    },
  ]
  return (
    <>
    {/* header */}
    <header className="flex items-center justify-between absolute left-0 lg:left-50 right-0 lg:right-50 mx-10 mt-3  max-w-5xl bg-white p-2 rounded-2xl">
      <h1 className="font-semibold">LinkTree-Clone</h1>
      <div>
        <Button>
          <Link href='/dashboard'>
            Sign up free
          </Link>
        </Button>
      </div>
    </header>
    {/* Hero */}

    <section id="hero" className="bg-[#003049] h-[100vh] flex items-center justify-center px-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 max-w-5xl mx-auto pt-5">
        <div className="flex flex-col gap-2.5 text-white">
          <h2 className="font-bold text-5xl text-[#FDF0D5]">Everything you are. In one, simple link in bio.</h2>
          <p>Create a beautiful, customizable link-in-bio page that showcases all your important links. Perfect for creators, businesses, and anyone who wants to share multiple links effortlessly.</p>
          <div className="flex items-center gap-2">
            <Input 
            type="text" 
            placeholder="/yourname"
            />
            <Button className="bg-[#C1121F]">Claim your Linktree</Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img 
          src="https://images.unsplash.com/photo-1750797490751-1fc372fdcf88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D" 
          alt="" 
          className="w-[350px] rounded-md"
          />
        </div>
      </div>
    </section>

    {/* How it works */}
    <section id="how-it-works" className="mx-auto max-w-5xl p-8 grid gap-2.5">
      <h3 className="font-semibold text-xl">Everything you need</h3>
      <p>Powerful features designed to help you share your content and grow your audience</p>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item,i) => (
          <Card key={i}>
            <CardHeader>
              <div className="text-[#C1121F]">{item.icon}</div>
              <CardTitle className="font-semibold text-lg">{item.heading}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
      
    {/* FAQ */}
    <section id="faq" className="mx-auto max-w-5xl p-8 grid gap-2.5">
      <h3 className="font-semibold text-xl">Got questions ?</h3>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        {faqs.map((d,i) => (
          <AccordionItem value={d.value} key={i}>
            <AccordionTrigger>{d.title}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {d.text.map((text,i) => (
                <p key={i}>{text}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>

    {/* CTA */}
    <section 
    style={{
      backgroundImage:`url("https://images.unsplash.com/photo-1750440982726-d723eab666a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D")`
    }}
    className="bg-cover h-[40vh]  relative">
      <section className="bg-[#003049]/60 flex items-center justify-center px-8 absolute top-0 bottom-0 left-0 right-0 text-white">
        <div className="grid gap-4">
          <h3 className="font-semibold text-2xl">Jumpstart your corner of the internet today</h3>
          <div className="flex items-center gap-2">
              <Input 
              type="text" 
              placeholder="/yourname"
              className="text-white placeholder:text-white"
              />
              <Button className="bg-[#C1121F]">Claim your Linktree</Button>
          </div>
        </div>
      </section>
    </section>

    {/* footer */}
    <footer className="p-4 border-t-4 border-black text-center">
      © 2024 Lewis Muriungi. All rights reserv... bla bla.
    </footer>
    </>
  )
}

export default page