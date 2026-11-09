import { Phone, Compass, MessageCircle, Music } from 'lucide-react'

const dockApps = [
  { id: 'phone', icon: Phone },
  { id: 'safari', icon: Compass },
  { id: 'messages', icon: MessageCircle },
  { id: 'music', icon: Music }
]

function Dock({ onOpenApp }) {
  return (
    <div className="dock">
      {dockApps.map((app) => {
        const Icon = app.icon

        return (
          <button
            key={app.id}
            onClick={() => onOpenApp(app.id)}
          >
            <Icon size={32} color="white" />
          </button>
        )
      })}
    </div>
  )
}

export default Dock