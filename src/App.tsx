import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './App.module.scss';
import 'leaflet/dist/leaflet.css'
import Main from './pages/Main';
import Backend from "@Pages/back/Backend";
import RayonMap from "@Components/RayonMap/RayonMap";
import DashboardPage from "@Components/Dashboards/DashboardPage";
import MarshrutMap from "@Components/Map/MarshrutMap";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/route" element={<MarshrutMap />}/>
            <Route path="/back" element={<Backend />}/>
            <Route path="/rayon" element={<RayonMap/>}/>
            <Route path="/admin" element={<DashboardPage />}/>
            <Route path="*" element={<div className={styles.appBody}>error</div>}/>
        </Routes>
    );
}

export default App;
