import './ScreenFrame.css'

function ScreenFrame({ children }) {
  return (
    <div className="screen-frame">
      <div className="screen">
        {children}
      </div>
    </div>
  )
}

export default ScreenFrame