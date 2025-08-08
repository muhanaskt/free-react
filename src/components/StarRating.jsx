import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);      // Current selected rating
  const [hover, setHover] = useState(null);     // Currently hovered star

  const handleClick = (starValue) => {
    // If clicking on the same star, toggle between full and half star
    if (rating === starValue) {
      setRating(starValue - 0.5);
    } else if (rating === starValue - 0.5) {
      setRating(starValue);
    } else {
      setRating(starValue);
    }
  };

  const handleMouseEnter = (starValue, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const isHalfStar = x < rect.width / 2;
    setHover(isHalfStar ? starValue - 0.5 : starValue);
  };

  const renderStar = (starValue) => {
    // Determine if this star should be shown as half or full based on hover or rating
    const currentValue = hover !== null ? hover : rating;
    console.log(currentValue,'currentvalue');
    console.log(starValue,'starValue');
    const isHalfStar = currentValue === starValue - 0.5;
    const isFullStar = currentValue >= starValue;
    
    if (isHalfStar) {
      return (
        <span style={{ position: "relative", fontSize: "2rem" }}>
          <span style={{ color: "#e4e5e9" }}>★</span>
          <span style={{ 
            position: "absolute", 
            left: 0, 
            top: 0, 
            width: "50%", 
            overflow: "hidden",
            color: "#FFD700"
          }}>
            ★
          </span>
        </span>
      );
    } else {
      return (
        <span
          style={{
            fontSize: "2rem",
            color: isFullStar ? "#FFD700" : "#e4e5e9"
          }}
        >
          ★
        </span>
      );
    }
  };

  return (
    <div style={{ display: "flex", gap: "6px", fontSize: "2rem" }}>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        return (
          <button
            type="button"
            key={starValue}
            style={{
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
              padding: "0"
            }}
            onClick={() => handleClick(starValue)}
            onMouseEnter={(e) => handleMouseEnter(starValue, e)}
            onMouseLeave={() => setHover(null)}
            aria-label={`Rate ${starValue} star${starValue > 1 ? 's' : ''}`}
          >
            {renderStar(starValue)}
          </button>
        );
      })}
      <span style={{ marginLeft: 8 }}>
        {rating ? `You rated: ${rating} star${rating > 1 ? 's' : ''}` : "Click to rate"}
      </span>
    </div>
  );
};

export default StarRating;
