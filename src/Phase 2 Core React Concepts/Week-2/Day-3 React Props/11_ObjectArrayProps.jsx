import React from 'react';

const TeamList = ({ members }) => {
  return (
    <ul>
      {members.map((member) => (
        <li key={member.id}>
          {member.name} - {member.role}
        </li>
      ))}
    </ul>
  );
};

export default TeamList;