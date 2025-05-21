import React, { useState } from "react"
import Sidebar from '../components/NavBar';
import './PageLayout.css';
import './AnalyticsPage.css';

import ResourceChart from '../assets/images/resource.png';
import SuccessChart from '../assets/images/successrate.png';

const ReportingPage = () => {
  const [currentView, setCurrentView] = useState("chart");
  const [currentMetric, setCurrentMetric] = useState("successRate");

  const applyFilters = () => {
    alert("Filters would be applied based on inputs.");
  };

  const toggleView = () => {
    setCurrentView((prev) => (prev === "chart" ? "table" : "chart"));
  };

  const handleMetricChange = (e) => {
    setCurrentMetric(e.target.value);
  };

  const metricLabels = {
    successRate: "Success Rate (%)",
    resourceUsage: "Resources Used",
  };

  const data = [
    {
      event: "Ritual of Binding",
      date: "2025-03-15",
      successRate: "85%",
      resourceUsage: "Crystal x2",
    },
    {
      event: "Potion Brewing",
      date: "2025-03-18",
      successRate: "78%",
      resourceUsage: "Herbs x5",
    },
    {
      event: "Summoning",
      date: "2025-03-20",
      successRate: "62%",
      resourceUsage: "Bloodstone x1",
    },
  ];

  const imageMap = {
    successRate: "/placeholder-success.png",
    resourceUsage: "/placeholder-resource.png",
  };

  return (
    <div className="reporting-container">
      <h1>Magical Events Report</h1>

      <div className="filter-box">
        <label htmlFor="event-type">Event Type:</label>
        <select id="event-type">
          <option value="all">All</option>
          <option value="ritual">Ritual</option>
          <option value="potion">Potion Brewing</option>
          <option value="summoning">Summoning</option>
        </select>

        <label htmlFor="start-date">Start Date:</label>
        <input type="date" id="start-date" />

        <label htmlFor="end-date">End Date:</label>
        <input type="date" id="end-date" />

        <label htmlFor="participant">Participant:</label>
        <input type="text" id="participant" placeholder="e.g. Luna" />

        <button onClick={applyFilters}>Apply Filters</button>
      </div>

      <div className="reporting-controls">
        <label htmlFor="metric-select">Variable:</label>
        <select id="metric-select" value={currentMetric} onChange={handleMetricChange}>
          <option value="successRate">Success Rate</option>
          <option value="resourceUsage">Resource Usage</option>
        </select>

        <button onClick={toggleView}>Toggle View</button>
        <button onClick={() => alert("Export to PDF")}>Export PDF</button>
        <button onClick={() => alert("Export to CSV")}>Export CSV</button>
      </div>

    {currentView === "chart" ? (
    <div className="report-chart">
      {currentMetric === "successRate" && (
        <img
          src={SuccessChart}
          alt="Success Rate Chart"
          className="chart-placeholder"
        />
      )}
      {currentMetric === "resourceUsage" && (
        <img
          src={ResourceChart}
          alt="Resource Usage Chart"
          className="chart-placeholder"
        />
      )}
    </div>
      ) : (
        <table className="report-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>{currentMetric === "successRate" ? "Success Rate (%)" : "Resources Used"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ritual of Binding</td>
              <td>2025-04-01</td>
              <td>{currentMetric === "successRate" ? "85" : "Crystal x2"}</td>
            </tr>
            <tr>
              <td>Potion Brewing</td>
              <td>2025-04-05</td>
              <td>{currentMetric === "successRate" ? "78" : "Herbs x5"}</td>
            </tr>
            <tr>
              <td>Summoning</td>
              <td>2025-04-08</td>
              <td>{currentMetric === "successRate" ? "62" : "Bloodstone x1"}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};


const AnalyticsPage = () => {
   
   return(
    <div className = "page-layout">
      <Sidebar />
      <div className = "page-content">
        <ReportingPage/>
      </div>
    </div>
   ) 
}

export default AnalyticsPage;