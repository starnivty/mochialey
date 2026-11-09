function AppWindow({ appId, onClose }) {
  return (
    <div className="app-window">

      <div className="app-header">
        <button onClick={onClose}>
          ‹
        </button>

        <strong>
          {appId}
        </strong>
      </div>

      <div className="app-content">
        <h2>{appId} App</h2>
        <p>This application is currently under development.</p>
      </div>

    </div>
  )
}

export default AppWindow