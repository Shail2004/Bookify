import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import BookDetails from '../pages/BookDetails';

function App() {
    return (
        <Routes>
                <Route path="/books" element={<Home/>} />
                <Route path="/books/:id" element={<BookDetails/>} />
        </Routes>
    );
}

export default App;
