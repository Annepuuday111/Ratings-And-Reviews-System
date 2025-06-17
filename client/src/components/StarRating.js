import React from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating({ value = 0, setValue = () => {}, readonly = false }) {
  return (
    <div style={{ display: 'flex', gap: 5 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <FaStar
          key={i}
          size={20}
          color={i <= value ? '#ffb400' : '#ccc'}
          style={{ cursor: readonly ? 'default' : 'pointer' }}
          onClick={() => !readonly && setValue(i)}
        />
      ))}
    </div>
  );
}

export default StarRating;
