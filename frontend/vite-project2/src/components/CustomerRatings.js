import React, { useState } from 'react';

const CustomerRatings = () => {
  const [ratings, setRatings] = useState([5, 4, 3, 5, 4]); // Example initial ratings
  const [newRating, setNewRating] = useState(0);

  const handleRatingSubmit = () => {
    if (newRating > 0 && newRating <= 5) {
      setRatings([...ratings, newRating]);
      setNewRating(0);
    } else {
      alert('Please enter a rating between 1 and 5.');
    }
  };

  const averageRating = ratings.length
    ? (ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length).toFixed(1)
    : 0;

  return (
    <div>
      <h2>Customer Ratings</h2>
      <p>Average Rating: {averageRating} / 5</p>
      <ul>
        {ratings.map((rating, index) => (
          <li key={index}>Rating: {rating} / 5</li>
        ))}
      </ul>
      <div>
        <h3>Submit Your Rating here and see ten</h3>
        <input
          type="number"
          value={newRating}
          onChange={(e) => setNewRating(Number(e.target.value))}
          min="1"
          max="5"
        />
        <button onClick={handleRatingSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default CustomerRatings;

