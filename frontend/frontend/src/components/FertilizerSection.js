import React from 'react';

function FertilizerSection() {
    const fertilizers = [
        { name: 'Plant Food', price: '$10', img: 'path_to_plant_food_image.jpg' },
        { name: 'Organic Fertilizer', price: '$15', img: 'path_to_organic_fertilizer_image.jpg' },
    ];

    return (
        <div className="card p-4">
            <h2>Fertilizers</h2>
            <div className="row">
                {fertilizers.map((fertilizer, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-3">
                            <img src={fertilizer.img} className="card-img-top" alt={fertilizer.name} />
                            <div className="card-body">
                                <h5 className="card-title">{fertilizer.name}</h5>
                                <p className="card-text">{fertilizer.price}</p>
                                <button className="btn btn-primary">Buy</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FertilizerSection;
