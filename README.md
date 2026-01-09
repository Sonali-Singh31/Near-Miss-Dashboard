# Near Miss Data Analysis Dashboard

## Project Objective
The goal of this project is to transform raw construction safety data into an interactive, high-performance dashboard. It visualizes approximately 7,800 records of "Near Miss" incidents—unplanned events that could have resulted in injury or damage but were avoided. 

The dashboard provides safety officers with actionable insights into:
- **Trend Analysis:** Identifying if incidents are increasing or decreasing over time.
- **Severity Distribution:** Understanding the risk profile of reported events.
- **Category Hotspots:** Pinpointing specific areas (e.g., Work at Height) that require intervention.

---

## Tech Stack
- **Frontend Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Data Processing:** Lodash (Efficient handling of 7,800+ records)
- **Visualization:** Recharts (SVG-based responsive charts)
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## Dashboard Requirements (5 Key Visualizations)
1. **Category Bar Chart:** Distribution of incidents by primary category.
2. **Severity Pie Chart:** Breakdown of incident severity levels (Level 0–4).
3. **Trend Line Chart:** Monthly incident frequency tracking.
4. **Status Radar Chart:** Analysis of unsafe conditions vs. behaviors.
5. **Volume Area Chart:** Visualizing the density of reports over the timeline.

---

## Prerequisites
Ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)

---

## Installation & Setup

1. **Clone the Repository (or Extract ZIP):**
   ```bash
   git clone <your-repository-url>
   cd near-miss-dashboard

2. **Install Dependencies:**

    ```Bash
    npm install
3. **Prepare the Dataset:** Ensure the provided data.json is located in the /public folder of the project. This allows the application to fetch the data locally.

4. **Run Development Server:**

    ```Bash
    npm run dev

Open your browser and navigate to http://localhost:5173.

5. **Build for Production:**

    ```Bash

    npm run build


## Assumptions & Data Handling
* Data Integrity: The application handles "dirty" data by providing fallbacks for missing categories or severity levels.

* Severity Mapping: Severity levels 3 and 4 are classified as "High Priority" within the KPI metrics.

* Performance: Used React useMemo hooks to ensure data processing does not cause UI lag during re-renders.