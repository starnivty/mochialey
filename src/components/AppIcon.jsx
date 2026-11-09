function AppIcon({ app, onClick }) {
  const Icon = app.icon

  return (
    <button
      className="app-item"
      onClick={onClick}
      aria-label={`Open ${app.name}`}
    >
      <div
        className="app-icon"
        style={{ background: app.color }}
      >
        <Icon
          size={34}
          color={app.id === 'phone' ? 'white' : '#333'}
          strokeWidth={1.8}
        />
      </div>

      <span>{app.name}</span>
    </button>
  )
}

export default AppIcon