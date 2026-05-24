import './App.css';

function App() {
  const installerHref = `${process.env.PUBLIC_URL}/Oniric%20Streams_Setup_v1.0.0.exe`;

  return (
    <div className="Page">
      <main className="Stage" aria-label="Oniric Streams download page">
        <div className="Card" role="group" aria-label="Download Oniric Streams">
          <h1 className="Title">Oniric Streams</h1>
          <p className="Tagline">A dreamy pixel journey in pastel light.</p>

          <a className="DownloadButton" href={installerHref} download>
            download now
          </a>

          <p className="Footnote">
            Windows installer: <span className="Mono">v1.0.0</span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
