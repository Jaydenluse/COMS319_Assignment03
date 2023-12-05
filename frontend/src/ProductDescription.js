import React, { useState } from 'react';

const ProductDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Split the description into words
  const words = description.split(' ');

  return (
    <div className="text-gray-700 text-sm mb-4">
      {isExpanded ? (
        description // Display the full description if isExpanded is true
      ) : (
        <>
          {words.slice(0, 20).join(' ')}
          {words.length > 23 && '... '}
          {words.length > 23 && (
            <button
              className="text-blue-500 hover:underline"
              onClick={toggleDescription}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ProductDescription;