import React from "react";
import ReactDOM from "react-dom";
import user from "./user.json";
import Profile from "./components/Profile";
import statisticalData from "./statistics.json";
import Statistics from "./components/Statistics";
import FriendsList from "./components/FriendsList";
import friends from "./friends.json";
import Transaction from "./components/Transaction";
import transactions from "./transactions.json";

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />,
      <FriendsList friends={friends} />,
      <Transaction items={transactions} />,
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
