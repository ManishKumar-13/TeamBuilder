
import React from 'react';
import '../TeamList.css';

const TeamList = ({ team, removeFromTeam, sortTeamByAge, averageAge }) => {
  return (
    <div className="team-list">
      <h2>Team Members</h2>
      <button className="sort-button" onClick={sortTeamByAge}>SORT BY AGE</button>
      {team.map(member => (
        <div key={member.id} className="team-member">
          <span>{member.first_name} {member.last_name} (Age: {member.age})</span>
          <button onClick={() => removeFromTeam(member.id)}>REMOVE</button>
        </div>
      ))}
      <div className="average-age">
        <strong>Average Age:</strong> {averageAge}
      </div>
    </div>
  );
};

export default TeamList;
