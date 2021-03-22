import React, { useEffect, useState } from "react";
import PlayerList from "../components/PlayerList";
import axios from "axios";
import { Link } from "@reach/router";

const Roster = () => {
  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/players/list").then((res) => {
      setPlayers(res.data);
      setLoaded(true);
    });
  }, [players]);

  const removeFromDom = (playerId) => {
    setPlayers(players.filter((player) => player._id != playerId));
  };

  return (
    <div className="container">
      <div>
        <Link to="/players/addplayer">Add New Player</Link>
        {loaded && (
          <PlayerList players={players} removeFromDom={removeFromDom} />
        )}
      </div>
    </div>
  );
};

export default Roster;
