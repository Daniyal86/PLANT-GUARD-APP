import React, { useState } from 'react';

function ImageUpload() {
    const [image, setImage] = useState(null);
    const [prediction, setPrediction] = useState('');

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', image);

        const response = await fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        setPrediction(data.prediction);
    };

    return (
        <div className="card p-4">
            <h2>Upload Plant Image</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} required />
                <button type="submit" className="btn btn-success mt-2">Predict</button>
            </form>
            {prediction && <div className="mt-3">Prediction: {prediction}</div>}
        </div>
    );
}

export default ImageUpload;
