import React from 'react';

// Sample feedback data
const feedbackList = [
  { id: 1, user: 'John Doe', feedback: 'Great service!', date: '2025-03-20' },
  { id: 2, user: 'Jane Smith', feedback: 'Very satisfied with the product.', date: '2025-03-21' },
  { id: 3, user: 'Sam Johnson', feedback: 'Could be improved.', date: '2025-03-22' },
];

const FeedbackData = () => {
  return (
    <div>
      <h1>Feedback Data</h1>
      <ul>
        {feedbackList.map(item => (
          <li key={item.id}>
            <p><strong>User:</strong> {item.user}</p>
            <p><strong>Feedback:</strong> {item.feedback}</p>
            <p><strong>Date:</strong> {item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackData;