import React from 'react';
import './App.css';
import FertilizerSection from './components/FertilizerSection';
import ImageUpload from './components/ImageUpload';
import Reminders from './components/Reminders';

function App() {
    return (
        <div className="App container">
            <h1 className="text-center my-4">Plant Care App</h1>
            <div className="row">
                <div className="col-md-6">
                    <ImageUpload />
                </div>
                <div className="col-md-6">
                    <Reminders />
                </div>
            </div>
            <FertilizerSection />
        </div>
    );
}

export default App;
