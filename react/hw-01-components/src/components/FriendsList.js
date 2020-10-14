import React from "react";
import styles from "./Friends.module.css";

export default function FriendsList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map((friend) => (
        <li className={styles.item}>
          <span
            style={{ "background-color": friend.isOnline ? "red" : "green" }}
            className={styles.status}
          ></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
