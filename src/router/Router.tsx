import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Counter } from '../components/Counter';
import { Settings } from '../pages/settings';
import { Table } from '../pages/table';
import { Home } from '../pages/home';

export const Router = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/table" element={<Table />} />
        <Route path="/settings/" element={<Settings />} />
    </Routes>
);
