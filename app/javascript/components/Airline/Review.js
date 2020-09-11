import React from 'react'
import Rating from '../Rating/Rating'

const Review = (props) => {
  const { score, title, description } = props.attributes

  return(
    <div className="review-card">
      <div className="review-rating-container">
        <Rating 
          score={score}
        />
        <div className="rating-title">{title}</div>
        <div className="rating-description">{description}</div>
      </div>
    </div>
  )
}

export default Review