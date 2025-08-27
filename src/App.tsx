import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";
import type { User } from "./types/user";

export const App = () => {
  // 取得したユーザー情報
  const [users, setUsers] = useState<User[]>([]);

  // 画面表示時にユーザー情報取得
  // ※実際にはこのエンドポイントは存在しないので注意
  useEffect(() => {
    axios.get("http://localhost:8000/api/customnote/users/")
      .then((res) => {
        setUsers(res.data); // axios は自動で JSON をパースしてくれる
      })
      .catch((err) => {
        console.error("ユーザー取得エラー:", err.message);
        console.error("詳細:", err.toJSON?.());
      });

  }, []);

  return (
    <div>
      {users.map((user) => (
        <ListItem
          key={user.id} // React が要素を効率的に再描画するための目印
          id={user.id}
          nickname={user.nickname}
        />
      ))}
    </div>
  );
};