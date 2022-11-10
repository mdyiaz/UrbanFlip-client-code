import React, { useEffect } from 'react';

const MyReviewsRow = ({review, handleDelete}) => {
  const {_id} = review;
   










    return (
        <tr>
        <th>
          <label>
              <button onClick={() => handleDelete(_id)} className="btn">X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            
            <div>
              <div className="font-bold">{review.serviceName}</div>
              
            </div>
          </div>
        </td>
        <td>
          {review.email}
         
        </td>
        <td>{review.message}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Edit Review</button>
        </th>
      </tr>
    );
};

export default MyReviewsRow;