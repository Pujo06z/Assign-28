import React from "react";

function UserProfile(props) {
  const { name, age, job, isPremium } = props;

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h2>Tên {name}</h2>
      <p>Tuổi: {age}</p>
      <p>Nghề Nghiệp: {job}</p>
      
      {isPremium && <span style={{ color: 'gold', fontWeight: 'bold' }}>Premium</span>}
    </div>
  );
}

export default UserProfile;