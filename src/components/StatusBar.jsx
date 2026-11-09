import { Signal, Wifi, BatteryFull } from 'lucide-react'
import './StatusBar.css'

function StatusBar() {
  return (
    <div className="status-bar">
      <span>1:54</span>

      <div className="status-icons">
        <Signal size={17} />
        <Wifi size={17} />
        <BatteryFull size={21} />
      </div>
    </div>
  )
}

export default StatusBar