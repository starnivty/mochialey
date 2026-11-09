import AppIcon from './AppIcon'
import { applications } from '../data/applications'

function AppGrid({ onOpenApp }) {
  return (
    <div className="app-grid">
      {applications.map((app) => (
        <AppIcon
          key={app.id}
          app={app}
          onClick={() => onOpenApp(app.id)}
        />
      ))}
    </div>
  )
}

export default AppGrid