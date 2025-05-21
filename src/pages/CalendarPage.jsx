import React from 'react';
import Sidebar from '../components/NavBar';
import './PageLayout.css';
import './CalendarPage.css';
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';


const CalendarMain = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    // Function to handle slide show
    useEffect(() => {
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");

        const showSlides = () => {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            setSlideIndex((prevIndex) => { 
                const nextIndex = prevIndex + 1 > slides.length ? 1 : prevIndex + 1;
                return nextIndex;
            });
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        };

        const interval = setInterval(showSlides, 2000); // Change every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [slideIndex]);

    return (
        <div className = "calendar-default-wrapper">
            <h1><span className="arrow">⬅️</span> 5 May 2025 - 12 May 2025 <span className="arrow">➡️</span></h1>
            <h3>Hover over a card to flip it!</h3>

            <div className="cards-container">
                {/* Top Row: 4 Cards */}
                <div className="card-row">
                    {/* Monday */}
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="front-display">Monday</div><br />
                                <p>"Cause Darling I..."</p><br />
                                <p>Will be Loving You...</p><br />
                                <p>till We're 70...</p><br />
                            </div>
                            <div className="flip-card-back">
                                <div className="task">🪄Pot of Greed</div>
                                <p>12:00 PM - 01:00 PM</p>
                                <div className="task">✨Graceful Charity</div>
                                <p>02:00 PM - 02:10 PM</p>
                                <div className="task">🧙Exodia</div>
                                <p>09:40 PM - 00:00 AM</p>
                            </div>
                        </div>
                    </div>

                    {/* Tuesday */}
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="front-display">Tuesday</div><br />
                                <p>"Hello from the..."</p><br />
                                <p>Other side</p><br />
                                <p>I must have called...</p><br />
                            </div>
                            <div className="flip-card-back">
                                <div className="task">No Event</div>
                            </div>
                        </div>
                    </div>

                    {/* Wednesday */}
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="front-display">Wednesday</div><br />
                                <p>"And I'll tell you..."</p><br />
                                <p>all about it when I...</p><br />
                                <p>See you Again...</p><br />
                            </div>
                            <div className="flip-card-back">
                                <div className="task">🔥Fiery Dragonus</div>
                                <p>01:00 AM - 03:00 AM</p>
                            </div>
                        </div>
                    </div>

                    {/* Thursday */}
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="front-display">Thursday</div><br />
                                <p>"So wake me Up...</p><br />
                                <p>when it's all over...</p><br />
                                <p>When I'm wiser...</p><br />
                                <p> and I'm Older..."</p><br />
                            </div>
                            <div className="flip-card-back">
                                <div className="task">No Event</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: 4 Cards */}
                <div className="card-row">
                    {/* Friday */}
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="front-display">Friday</div><br />
                                <p>"Here's a little song I wrote...</p><br />
                                <p>You might want to sing it...</p><br />
                                <p>Note for Note..."</p><br />
                            </div>
                            <div className="flip-card-back">
                                <div className="task">No Event</div>
                            </div>
                        </div>
                    </div>

                    {/* Saturday */}
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="front-display">Saturday</div><br />
                                <p>"Nice to meet You...</p><br />
                                <p>Where you've been? I...</p><br />
                                <p>could show you...</p><br />
                                <p>incredible things..."</p><br />
                            </div>
                            <div className="flip-card-back">
                                <div className="task">🌝Emerald Ritual</div>
                                <p>12:00 PM - 01:00 PM</p>
                                <div className="task">🐸Frog Brewing</div>
                                <p>02:00 PM - 02:10 PM</p>
                                <div className="task">🐎Pegasus Fist</div>
                                <p>09:40 PM - 00:00 AM</p>
                            </div>
                        </div>
                    </div>

                    {/* Sunday */}
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="front-display">Sunday</div><br />
                                <p>"Celebrate Good Times...</p><br />
                                <p>Come On! ...</p><br />
                                <p>Celebrate Good Times..."</p><br />
                            </div>
                            <div className="flip-card-back">
                                <div className="task">No Event</div>
                            </div>
                        </div>
                    </div>

                    {/* Coming Soon */}
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="front-display">Coming Soon</div>
                            </div>
                            <div className="flip-card-back">
                                <div className="slideshow-container">
                                    <div style={{ textAlign: 'center' }}>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div><br /><br /><br />
                                    <div className="mySlides fade">
                                        <p style={{ fontSize: '80px' }}>🍄</p>
                                        <p>Poisoned Mushrooms</p><br />
                                        <p>2 days, 3 hours...</p>
                                    </div>
                                    <div className="mySlides fade">
                                        <p style={{ fontSize: '80px' }}>🎩</p>
                                        <p>Alice's Rabbit</p><br />
                                        <p>3 days, 1 hours...</p>
                                    </div>
                                    <div className="mySlides fade">
                                        <p style={{ fontSize: '80px' }}>🪞</p>
                                        <p>Enchanted Reflection</p><br />
                                        <p>4 days, 11 hours...</p>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="icon-bar">
                    <Link to="/calendar?view=form" className="icon" style={{ textDecoration: 'none' }}>➕</Link>
                    <span className="icon">🖉</span>
                    <span className="icon">🗑️</span>
                    <span className="icon">🔄</span>
                </div>
            </div>
        </div>
    );
};

const CalendarForm = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [formData, setFormData] = useState({
      date: '',
      time: '',
      duration: '',
      title: '',
      description: '',
      ingredients: '',
      saveOption: '',
    });
  
    const titles = [
      "Let's check if a slot is available!",
      'Available!',
      'Time to Save!',
      'Successfully Saved!',
    ];
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const validateTab = () => {
        return true;
      switch (currentTab) {
        case 0:
          return formData.date && formData.time && formData.duration;
        case 1:
          return formData.title && formData.description && formData.ingredients;
        case 2:
          return formData.saveOption;
        default:
          return true;
      }
    };
  
    const handleNext = () => {
      if (!validateTab()) return;
      if (currentTab < 3) {
        setCurrentTab(currentTab + 1);
      } else {
        console.log('Submitting:', formData);
      }
    };
  
    const handlePrev = () => {
      if (currentTab > 0) {
        setCurrentTab(currentTab - 1);
        console.log("handlePrev")
    }
    };
  
    return (
      <div className="calendar-form-view">
        <form id="regForm">
          <h1 id="title">{titles[currentTab]}</h1>
          <br />
  
          {currentTab === 0 && (
            <div className="tab active">
              <label>Select a date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} /><br /><br />
  
              <label>Select a start time:</label>
              <input type="time" name="time" value={formData.time} onChange={handleChange} /><br /><br />
  
              <label>Enter a duration (in minutes)</label>
              <input
                placeholder="e.g 120"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
              />
            </div>
          )}
  
          {currentTab === 1 && (
            <div className="tab active">
              <label>Title</label>
              <input
                placeholder="Title..."
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              <label>Description</label>
              <textarea
                name="description"
                placeholder="Write something..."
                style={{ height: '50px' }}
                value={formData.description}
                onChange={handleChange}
              />
              <label>Ingredients (comma-separated)</label>
              <input
                placeholder="e.g frog leg, spider hair, ..."
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
              />
            </div>
          )}
  
          {currentTab === 2 && (
            <div className="tab active">
              <label>
                <input
                  type="radio"
                  name="saveOption"
                  value="draft"
                  checked={formData.saveOption === 'draft'}
                  onChange={handleChange}
                />
                Save as Draft
              </label><br />
              <label>
                <input
                  type="radio"
                  name="saveOption"
                  value="save"
                  checked={formData.saveOption === 'save'}
                  onChange={handleChange}
                />
                Save
              </label><br />
              <label>
                <input
                  type="radio"
                  name="saveOption"
                  value="cancel"
                  checked={formData.saveOption === 'cancel'}
                  onChange={handleChange}
                />
                Cancel
              </label>
            </div>
          )}
  
          {currentTab === 3 && (
            <div className="tab active">
              <p style={{ fontSize: '100px', textAlign: 'center' }}>🎊</p>
            </div>
          )}
  
          <div style={{ overflow: 'auto' }}>
            <div style={{ float: 'right' }}>
              {currentTab > 0 && (
                <button type="button" onClick={handlePrev}>
                  Previous
                </button>
              )}
              <Link to = "/calendar">
                <button type="button" onClick={handleNext}>
                    {currentTab === 3 ? 'Return to Dashboard' : 'Next'}
                </button>
              </Link>
            </div>
          </div>
  
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={`step${i === currentTab ? ' active' : ''}`}
              ></span>
            ))}
          </div>
        </form>
      </div>
    );
  };

const Calendar = () => {
    const [searchParams] = useSearchParams();
    const view = searchParams.get('view');
  
    let content;
    if (view === 'form') {
      content = <CalendarForm />;
    } else {
      content = <CalendarMain/>;
    }
  
    return (
      <div className = "page-layout">
      <Sidebar />
      <div className = "page-content">
        <div className = "calendar-page-content">
          {content}
        </div>
      </div>
      </div>
    );
 }

 export default Calendar;