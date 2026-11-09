import Widget from './Widget'
import AppGrid from './AppGrid'
import Dock from './Dock'

function HomeScreen({ onOpenApp }) {
  return (
    <div className="home-screen">

      <Widget />

      <AppGrid onOpenApp={onOpenApp} />

      <div className="search-bar">
        ⌕ Search
      </div>

      <Dock onOpenApp={onOpenApp} />

    </div>
  )
}

export default HomeScreen