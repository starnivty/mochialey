function Widget() {
  return (
    <div className="widget-grid">
      <div className="widget weather-widget">
        <span>Bawshar</span>
        <strong>23°</strong>
        <p>Mostly Clear</p>
        <small>H:31° L:21°</small>
      </div>

      <div className="widget calendar-widget">
        <span>MONDAY</span>
        <strong>20</strong>
        <p>Weekly Development</p>
        <small>1–2PM</small>
      </div>
    </div>
  )
}

export default Widget