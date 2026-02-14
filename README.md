# smk-svt

An interactive map application for looking up Speculation and Vacancy Tax (SVT) boundaries and rates across British Columbia. Built with [SMK (Simple Map Kit)](https://github.com/bcgov/smk) and powered by [Leaflet](https://leafletjs.com/).

## Overview

The Speculation and Vacancy Tax Location Map is an easy-to-use web-based map interface designed to help residents and businesses identify whether a property is within a Speculation and Vacancy Tax area. The application displays BC Assessment Jurisdiction boundaries with SVT coverage and provides information about local tax rates and regulations.

## Features

- **Interactive Map Interface**: Zoom and pan across British Columbia to explore SVT jurisdictions
- **Query-Enabled Layers**: Click on jurisdictions to view detailed information about SVT areas
- **Address Search**: Locate properties and jurisdictions across the province
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bcgov/smk-svt.git
   cd smk-svt
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To view and test the application locally:

```bash
npm run view
```

This will:
- Start a local HTTP server on port 8080
- Automatically open the application in your default browser

Access the application at `http://localhost:8080`


## Configuration

The application is configured through `smk-config.json`, which defines:

- **Map Viewer**: Leaflet-based viewer with initial zoom level and extent centered on BC
- **Base Map**: Streets basemap from ESRI
- **Layers**: BC Assessment Jurisdiction boundaries with SVT coverage information
- **Tools**: Pan, zoom, search and other interactive tools
- **Attributes**: Display of jurisdiction details and SVT status information

## Data Sources

- **BC Assessment Jurisdictions**: ArcGIS Feature Services containing SVT jurisdiction boundaries
- **Base Maps**: ESRI Maps (requires valid ESRI API key in configuration)

## Technologies Used

- **[SMK (Simple Map Kit)](https://github.com/bcgov/smk)**: BC Government's map framework
- **[Leaflet](https://leafletjs.com/)**: Open-source mapping library
- **[Caddy](https://caddyserver.com/)**: Lightweight web server
- **[Node.js](https://nodejs.org/)**: JavaScript runtime
