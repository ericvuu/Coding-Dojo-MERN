import React, { useEffect, useState } from "react";
import axios from 'axios';
import DeleteButton from './DeleteButton'

const PlayerList = () => {

  const [players, setPlayers] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:8000/players/list")
        .then((res) => setPlayers(res.data));
    }, []);

      const removeFromDom = (playerId) => {
        setPlayers(players.filter((player) => player._id != playerId));
      };

  return (
    <div className="col-10 mx-auto">
      <table className="table table-dark mt-3">
        <thead>
          <th scope="col">Player Name</th>
          <th scope="col">Preferred Position</th>
          <th scope="col">Actions</th>
        </thead>
        {players.map((player, idx) => {
          return (
            <tr key={idx}>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td>
                <div className="d-inline-block">
                  <DeleteButton
                    playerId={player._id}
                    successCallback={() => removeFromDom(player._id)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
  </div>
  );
}

export default PlayerList
