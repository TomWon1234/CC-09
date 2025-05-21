import React from 'react';
import Sidebar from '../components/NavBar';
import './PageLayout.css';
import { useSearchParams, Link } from 'react-router-dom';
import './InventoryPage.css'

import glassIcon from '../assets/images/glass.svg';
import scalesImg from '../assets/images/scales.jpg'; 
import eyesImg from '../assets/images/scales.jpg';  //change to desired image
import lavenderImg from '../assets/images/lavender.jpg';
import berryImg from '../assets/images/scales.jpg'; //change to desired image
import plusImg from '../assets/images/plus.svg';
import minusImg from '../assets/images/minus.svg';
import pencilImg from '../assets/images/pencil.svg';
import backImg from '../assets/images/back.svg';

const InventoryMain = () => {

  return (
    <div className = "inventory-default-wrapper">
      {/* Page Content */}
      <div className="main-content">
        <h1>RESOURCES & INVENTORY</h1>

        <div className="search-container">
          <div className="search-bar">
            <div className="input-wrapper">
              <input type="search" placeholder="Search" />
            </div>
            <button type="button" className="search-button" aria-label="Search">
              <img src={glassIcon} alt="" />
            </button>
          </div>

          <div className="filter">
            <form>
              <label htmlFor="filterDrop">Filter</label>
              <select id="filterDrop" name="filterDrop">
                <option value="name-az">Name: A to Z</option>
                <option value="name-za">Name: Z to A</option>
                <option value="quant-lh">Quantity: Low to high</option>
                <option value="quant-hl">Quantity: High to low</option>
                <option value="qual-lh">Quality: Low to high</option>
                <option value="qual-hl">Quality: High to low</option>
              </select>
            </form>
          </div>
        </div>
      </div>

      {/* Inventory Grid */}
      <div className="inventory-item">
        <Link to="/inventory?item=dragon-scales" className="inventory-item">
            <img src={scalesImg} alt="Dragon Scales" />
            <div className="item-text">
                <h2>Dragon Scales</h2>
                <p>Quantity: 20</p>
                <p>Location: Aisle 10, Shelf 10</p>
                <p>Condition: Preserved</p>
            </div>
            </Link>
        </div>

        <div className="inventory-item">
          <img src={eyesImg} alt="Frog Eyes" />
          <div className="item-text">
            <h2>Frog Eyes</h2>
            <p>Quantity: 20</p>
            <p>Location: Aisle 12, Shelf 1</p>
            <p>Condition: Pickled</p>
          </div>
        </div>

        <div className="inventory-item">
          <img src={lavenderImg} alt="Lavender" />
          <div className="item-text">
            <h2>Lavender</h2>
            <p>Quantity: 50</p>
            <p>Location: Aisle 1, Shelf 10</p>
            <p>Condition: Dried</p>
          </div>
        </div>

        <div className="inventory-item">
          <img src={berryImg} alt="Eclipse Berry" />
          <div className="item-text">
            <h2>Eclipse Berry</h2>
            <p>Quantity: 60</p>
            <p>Location: Aisle 7, Shelf 2</p>
            <p>Condition: Fresh</p>
          </div>
        </div>
    </div>
  )
};

const InventoryItem= () => {
    return (
    <div className = "inventory-item-view">
      <div className="main-content">
        <h1>Dragon Scale</h1>
  
        <div className="container">
          {/* Photo column */}
          <div className="image">
            <img src={scalesImg} alt="Dragon Scales" />
          </div>
  
          {/* Details column */}
          <div className="item-details">
            <div className="important-details">
              <p className="detail">
                <span className="label">Quantity </span>
                <span className="info-box">20</span>
              </p>
              <p className="detail">
                <span className="label">Location </span>
                <span className="info-box">Aisle 10, Shelf 10</span>
              </p>
              <p className="detail">
                <span className="label">Condition </span>
                <span className="info-box">Preserved</span>
              </p>
              <p className="detail">
                <span className="label">Related Events </span>
                <span className="info-box">Potion Brewing, Ritual Casting</span>
              </p>
            </div>
          </div>
  
          {/* Description */}
          <div className="description">
            <h2>Description</h2>
            <p>
              The scales were provided to our coven from the Dragnite Clan.
              The scales are ethically collected from the regular freshly molted dragons.
            </p>
          </div>
        </div>
  
        {/* Edit Buttons */}
        <nav className="edits">
          <Link to = "/inventory">
          <button
            type="button"
            className="nav"
          >
            <img src={backImg} alt="Back" className="btn" />
            Back
          </button>
          </Link>
  
          <div className="right">
            <button type="button" className="static">
              <img src={pencilImg} alt="Update" className="btn" />
              Update
            </button>
  
            <button type="button" className="static">
              <img src={minusImg} alt="Delete" className="btn" />
              Delete
            </button>
          </div>
        </nav>
      </div>
    </div>
    );
  }

const InventoryPage = () => {
    const [searchParams] = useSearchParams();
    const view = searchParams.get('item');
  
    let content;
    if (view === 'dragon-scales') {
      content = <InventoryItem />;
    } else {
      content = <InventoryMain/>;
    }
  
    return (
      <div className = "page-layout">
      <Sidebar />
      <div className = "page-content">
        <div className = "calendar-page-content">
          {content}
        </div>
      </div>
      </div>)
 }

 export default InventoryPage;