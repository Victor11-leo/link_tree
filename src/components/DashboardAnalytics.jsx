import { LockIcon } from "lucide-react"


const DashboardAnalytics = () => {
  return (
    <div>
      <section className="h-[60vh] bg-amber-100 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-1.5">
          <LockIcon className="w-10 h-10 bg-red-200 p-2 rounded-full"/>
          <p className="font-semibold uppercase">Under development</p>
        </div>
      </section>    
    </div>
  )
}

export default DashboardAnalytics