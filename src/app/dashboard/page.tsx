import DashboardAnalytics from '@/components/DashboardAnalytics'
import DashboardUsername from '@/components/DashboardUsername'
import DashboardLinks from '@/components/DashboardLinks'

const page = () => {
  return (
    <div className=''>
      {/* Analytics */}      
      <DashboardAnalytics/>
      <div className='flex flex-col md:flex-row items-start'>
        {/* Username */}
        <DashboardUsername/>

        {/* Manage links */}
        <DashboardLinks/>
      </div>
    </div>
  )
}

export default page