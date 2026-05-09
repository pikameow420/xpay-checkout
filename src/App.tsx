import { XpayGrowthLanding } from '@/components/xpay-growth/XpayGrowthLanding'
import { ResumePage } from '@/components/resume/ResumePage'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<XpayGrowthLanding />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
