import React from 'react'

function Shimmer() {
  return (
    <div className="restaurant-list">
      {Array(10).fill("").map((e, index) => {
        return (
          <div
            key={index}
            className="restaurant"
            style={{
              backgroundColor: '#f0f0f0',
              height: '200px',
              width: '250px',
              margin: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            
          </div>
        );
      })}
    </div>
  );
}

export default Shimmer;
