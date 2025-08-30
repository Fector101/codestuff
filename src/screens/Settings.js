import "../css/settings.css";
import { LucideRadar } from "lucide-react";
import { LucideRadiation } from "lucide-react";
import { BinaryIcon } from "lucide-react";
import { QrCode } from "lucide-react";
// Header Component
function StatusHeader() {
  return (
    <header className="status-header">
      <div className="status-left" id="connectionStatus">
        <span className="status-dot disconnected"></span>
        <span id="statusText">Disconnected</span>
      </div>
      <div className="pc-name">
        <div id="pcNameContainer">
          <div id="pcNameScroller">
            <span id="pcNameText">No PC Connected</span>
          </div>
        </div>
      </div>
    </header>
  );
}

// PC Card Component
function PCCard({ device, isCurrent = false, showDisconnect = true }) {
  const {
    name,
    ip,
    lastSeen,
    osIcon,
    buttonText = showDisconnect ? "disconnect" : "reconnect",
    buttonClass = showDisconnect ? "disconnect-btn" : "connect-btn",
    display = "flex",
  } = device;

  return (
    <div className="pc-card flex">
      {isCurrent == 4 && (
        <div style={{ marginRight: "auto", background: "red" }}>(current)</div>
      )}

      <div className="main">
        <div
          className="img"
          style={{ padding: ip == "192.186.2.102" ? "4px" : "8px" }}
        >
          {osIcon}
        </div>

        <div
          className="textbox"
          style={isCurrent ? { display: "flex", flexDirection: "column" } : {}}
        >
          <p className="pcname">{name}</p>
          <div className="spans-box">
            {ip && <span className="ip">{ip}</span>}
            <span>{lastSeen}</span>
          </div>
        </div>

        <button className={buttonClass}>{buttonText}</button>
      </div>
    </div>
  );
}

// Recent Connections Header Component
function RecentConnectionsHeader() {
  return (
    <span
      style={{ margin: "0 auto", marginBlock: "38px 10px", display: "none" }}
    >
      <span style={{ width: "max-content", borderRadius: "4px" }}>
        - - - Recent Connections - - -
      </span>
    </span>
  );
}

// Add Device Button Component
function AddDeviceButton() {
  return (
    <button className="personalize-link show-otps-btn">
      <p>Add Device</p>
      <p className="display-none">Hide</p>
    </button>
  );
}
function ConnectionMethods() {
  return (
    <main id="connect-opts">
      <h1>Connect to PC</h1>
      <p className="desc">Choose your preferred connection method</p>
      <div className="methods">
        <div className="radar card">
          <div className="img">
            <LucideRadar />
          </div>

          <div className="text-con">
            <h3 className="title">Radar</h3>
            <p>Scan for nearby PCs</p>
          </div>
          <button
            classMame="mobile-btn"
            style={{ "margin-left": "auto" }}
            id="locate-btn"
          >
            Locate
          </button>
        </div>

        <div className="code card">
          <div className="img">
            <BinaryIcon />
          </div>

          <div className="text-con">
            <h3 className="title">Code</h3>
            <p>Use your PC's IP address</p>
          </div>
          <div className="input-group" style={{ "margin-left": "auto" }}>
            <input type="text" placeholder="Enter IP Address - 192.168.xxx" />
            <button className="mobile-btn">Enter</button>
          </div>
        </div>

        <div classname="qr card" style={{ display: "none" }}>
          <div classname="img">
            <QrCode />
          </div>
          <div className="text-con">
            <h3 classname="title">QR</h3>
            <p>Scan from your PC screen</p>
          </div>
          <button style={{ "margin-left:": "auto" }}>Capture</button>
        </div>
      </div>
    </main>
  );
}
// Main Component
export default function SettingScreen() {
  // Device data
  const devices = [
    {
      name: "Dell XPS 15",
      ip: "192.186.2.102",
      lastSeen: "1m ago",
      osIcon: (
        <svg
          width="800px"
          style={{ margin: "4px", fill: "white", color: "white" }}
          height="800px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>microsoft_windows</title>
          <rect width="24" height="24" fill="none" />
          <path d="M3,12V6.75L9,5.43v6.48L3,12M20,3v8.75L10,11.9V5.21L20,3M3,13l6,.09V19.9L3,18.75V13m17,.25V22L10,20.09v-7Z" />
        </svg>
      ),
      buttonText: "disconnect",
      buttonClass: "disconnect-btn",
      display: "flex",
    },
    {
      name: "Asus XXOLA",
      ip: "192.186.1.102",
      lastSeen: "7m ago",
      osIcon: (
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Windows SVG content */}
        </svg>
      ),
      buttonText: "reconnect",
      isCurrent: true,
      display: "none",
    },
    {
      name: "Dell XPS 15",
      ip: "192.186.1.102",
      lastSeen: "7m ago",
      osIcon: (
        <svg
          viewBox="0 0 20 20"
          style={{ fill: "white" }}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {/* Linux SVG content */}
        </svg>
      ),
      buttonText: "reconnect",
      buttonClass: "mobile-btn",
      display: "none",
    },
    {
      name: "MacBook Air",
      ip: "192.186.61.111",
      lastSeen: "7m ago",
      osIcon: (
        <svg
          width="800px"
          height="800px"
          viewBox="-1.5 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {/* Apple SVG content */}
        </svg>
      ),
      buttonText: "reconnect",
      buttonClass: "connect-btn",
      display: "none",
    },
    {
      name: "Dell XPS 15",
      lastSeen: "57m ago",
      osIcon: (
        <img
          style={{ height: "48px", position: "relative", top: "5px" }}
          src="/imgs/linux.png"
          alt=""
        />
      ),
      buttonText: "reconnect",
      buttonClass: "mobile-btn",
      display: "none",
    },
  ];

  return (
    <div className="settings-screen screen">
      <StatusHeader />
      <main>
        <div className="pcs-box">
          {devices.map((device, index) => (
            <PCCard
              key={index}
              device={device}
              isCurrent={device.isCurrent}
              showDisconnect={!device.buttonText.includes("reconnect")}
            />
          ))}
        </div>
        <RecentConnectionsHeader />
        <AddDeviceButton />

        <div className="methods">
          <ConnectionMethods />
        </div>
      </main>
    </div>
  );
}
