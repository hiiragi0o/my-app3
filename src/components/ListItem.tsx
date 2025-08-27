import type { FC } from "react";
import type { User } from "../types/user";

export const ListItem: FC<User> = (props) => {
    const { id, nickname } = props;
    return (
        <p>
            {id}:{nickname}
        </p>
    );
};