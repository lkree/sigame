import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Counter } from '../components/Counter';
import { Table } from '../pages/table';
import { Question } from '../pages/question';
import { Home } from '../pages/home';
import { Settings } from '../pages/settings';

export const Router = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/table" element={<Table />} />
        <Route path="/question/" element={<Question />} />
        <Route path="/settings/" element={<Settings />} />
    </Routes>
);
