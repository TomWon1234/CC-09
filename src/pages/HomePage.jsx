import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Sidebar from '../components/NavBar';
import './PageLayout.css';
import './HomePage.css'
import MapImage from '../assets/images/mystical_map.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const DefaultView = () => {
  return(
  <div className="home-default-wrapper">
    <div class="header">Welcome Back, <span class="header-text"><strong>User Name!</strong></span></div>
    <div class="subheading"><strong>View All Events</strong></div>

    <div className="view-buttons">
    <Link to="/home?view=map" className="button-link">
      <span className="fa-solid fa-map-location-dot"></span> Map View
    </Link>
    <Link to="/home?view=list" className="button-link">
      <span className="fa-solid fa-list"></span> List View
    </Link>
    </div>

    <div class="subheading"><strong>Activity Feed</strong></div>
    <div class="notifications">
      <div class="card">
        <div class="card-bar">
          <h3> <span class="fa-solid fa-calendar-days"></span> Upcoming Events</h3>
        </div>
        <div class="card-content">
          <div class="event">
            <p><strong>Name:</strong><span class="text"> Event Name 1</span></p>
            <p><strong>Time:</strong><span class="text"> HH:MM AM/PM, DD/MM/YYYY</span></p>
            <p><strong>Scheduled By:</strong><span class="text"> User Name 1</span></p>
          </div>
          <div class="event">
            <p><strong>Name:</strong><span class="text"> Event Name 2</span></p>
            <p><strong>Time:</strong><span class="text"> HH:MM AM/PM, DD/MM/YYYY</span></p>
            <p><strong>Scheduled By:</strong><span class="text"> User Name 2</span></p>
          </div>
          <div class="event">
            <p><strong>Name:</strong><span class="text"> Event Name 3</span></p>
            <p><strong>Time:</strong><span class="text"> HH:MM AM/PM, DD/MM/YYYY</span></p>
            <p><strong>Scheduled By:</strong><span class="text"> User Name 3</span></p>
          </div>
          <div class="card-toggle">
            <span class="fa-solid fa-caret-down"></span>
          </div>
        </div>
      </div>


      <div class="card">
        <div class="card-bar">
          <h3><span class="fa-regular fa-bell"></span> Alerts</h3>
        </div>
        <div class="card-content">
          <div class="alert">
            <p><strong>Message:</strong><span class="text"> Message Content</span></p>
            <p><strong>Issued:</strong><span class="text"> HH:MM AM/PM, DD/MM/YYYY</span></p>
            <p><strong>Sent By:</strong><span class="text"> User Name 1</span></p>
          </div>
          <div class="alert">
            <p><strong>Message:</strong><span class="text"> Message Content</span></p>
            <p><strong>Issued:</strong><span class="text"> HH:MM AM/PM, DD/MM/YYYY</span></p>
            <p><strong>Sent By:</strong><span class="text"> User Name 2</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

const ListView = () => {
  return (
    <div class="home-list-wrapper">
    <h1 class="list-title">Mystical Locations</h1>
    <ul class="location-list">
        <li><i class="fa-solid fa-tree"></i> Firefly Forest
          <ul class="event-list">
            <li>Phoenix Summoning</li>
          </ul>
        </li>
        <li><i class="fa-solid fa-tree"></i> Whispering Woods
          <ul class="event-list">
            <li>Dragon Hatching</li>
          </ul>
        </li>
        <li><i class="fa-solid fa-chess-rook"></i> Castle of Canvas
          <ul class="event-list">
            <li>Wizard Banquet</li>
          </ul>
        </li>
        <li><i class="fa-solid fa-mountain"></i> Misty Mountains
          <ul class="event-list">
            <li>Stargazing Event</li>
          </ul>
    </li>
      <li><i class="fa-solid fa-house"></i> Verdant Village
        <ul class="event-list">
            <li>No event currently!</li>
          </ul>
    </li>
      <li><i class="fa-solid fa-tree"></i> Twilight Tree
        <ul class="event-list">
            <li>No event currently!</li>
          </ul>
    </li>
      <li><i class="fa-solid fa-house-tsunami"></i> Floating Fortress
        <ul class="event-list">
            <li>No event currently!</li>
          </ul>
    </li>
      <li><i class="fa-solid fa-landmark"></i> Radiant Ruins
        <ul class="event-list">
            <li>No event currently!</li>
          </ul>
    </li>
      <li><i class="fa-solid fa-tower-observation"></i> Tempest Tower
        <ul class="event-list">
            <li>No event currently!</li>
          </ul>
    </li>
      <li><i class="fa-solid fa-map-marker-alt"></i> Edge of Edstemus
        <ul class="event-list">
            <li>No event currently!</li>
          </ul>
    </li>
      <li><i class="fa-solid fa-water"></i> Lunar Lake
        <ul class="event-list">
            <li>No event currently!</li>
          </ul>
    </li>
      <li><i class="fa-solid fa-water"></i> Spellbinding Sea
        <ul class="event-list">
            <li>No event currently!</li>
          </ul></li>
      <li><i class="fa-solid fa-moon"></i> Moonlit Manor
        <ul class="event-list">
            <li>No event currently!</li>
          </ul>
    </li>
    </ul>
    <Link to="/home" className="back-button">
      <i className="fa-solid fa-arrow-left"></i> Back to Dashboard
    </Link>
  </div>
  )
}

const MapView = () => {
  return (
    <div className="home-map-wrapper">
      <div className="top-bar">
        <div className="search-box">
          <input type="text" placeholder="Search Mystical Map" />
          <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>

        <div className="filter-dropdown">
          <button className="filter-btn">
            <i className="fa-solid fa-bars"></i> Apply Filter
          </button>
          <div className="dropdown-content">
            <label><input type="checkbox" /> Category</label>
            <label><input type="checkbox" /> Location</label>
          </div>
        </div>
      </div>

      <div className="map-container">
        <img src={MapImage} alt="Map" className="map" />
        
        {/* Markers */}
        <div className="marker-container" style={{ top: '55%', left: '42%' }}>
          <i className="fa-solid fa-location-dot marker"></i>
          <span className="tooltip">Phoenix Summoning</span>
        </div>
        <div className="marker-container" style={{ top: '10%', left: '15%' }}>
          <i className="fa-solid fa-location-dot marker"></i>
          <span className="tooltip">Dragon Hatching</span>
        </div>
        <div className="marker-container" style={{ top: '15%', left: '65%' }}>
          <i className="fa-solid fa-location-dot marker"></i>
          <span className="tooltip">Stargazing Event</span>
        </div>
        <div className="marker-container" style={{ top: '55%', left: '78%' }}>
          <i className="fa-solid fa-location-dot marker"></i>
          <span className="tooltip">Wizard Banquet</span>
        </div>

        {/* Labels */}
        <div className="map-label" style={{ top: '65%', left: '45%' }}>Firefly Forest</div>
        <div className="map-label" style={{ top: '20%', left: '15%' }}>Whispering Woods</div>
        <div className="map-label" style={{ top: '65%', left: '80%' }}>Castle of Canvas</div>
        <div className="map-label" style={{ top: '15%', left: '75%' }}>Misty Mountains</div>
        <div className="map-label" style={{ top: '80%', left: '27%' }}>Verdant Village</div>
        <div className="map-label" style={{ top: '45%', left: '37%' }}>Twilight Tree</div>
        <div className="map-label" style={{ top: '80%', left: '65%' }}>Floating Fortress</div>
        <div className="map-label" style={{ top: '23%', left: '27%' }}>Radiant Ruins</div>
        <div className="map-label" style={{ top: '28%', left: '69%' }}>Tempest Tower</div>
        <div className="map-label" style={{ top: '85%', left: '85%' }}>Edge of Edstemus</div>
        <div className="map-label" style={{ top: '17%', left: '40%' }}>Lunar Lake</div>
        <div className="map-label" style={{ top: '47%', left: '10%' }}>Spellbinding Sea</div>
        <div className="map-label" style={{ top: '50%', left: '54%' }}>Moonlit Manor</div>
      </div>

      <div className="bottom-bar">
        <Link to="/home" className="back-button">
          <i className="fa-solid fa-arrow-left"></i> Back to Dashboard
        </Link>
        <div className="zoom-controls">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
  )
}

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const view = searchParams.get('view');

  let content;
  if (view === 'list') {
    content = <ListView />;
  } else if (view === 'map') {
    content = <MapView />;
  } else {
    content = <DefaultView />;
  }

  return (
    <div className = "page-layout">
    <Sidebar />
    <div className = "page-content">
      <div className = "home-page-content">
        {content}
      </div>
    </div>
    </div>
  );
};

export default HomePage;
