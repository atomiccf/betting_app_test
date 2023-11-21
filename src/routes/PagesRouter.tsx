import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Main_page from "../pages/MainPage/MainPage";
import EventDetailsPage from "../pages/EventDetails/EventDetails";

const PagesRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<Main_page/>}/>
            <Route path="event/:eventId" element={<EventDetailsPage/>}/>
        </Routes>
    );
};

export default PagesRouter;