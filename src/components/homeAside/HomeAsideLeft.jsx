import { useSelector, useDispatch } from "react-redux";
import { List, ListItem, Avatar, Typography, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { Group, Forum } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import styles from './aside.module.scss'

function HomeAsideLeft() {
    const theme = useTheme();
    const dispatch = useDispatch();



    return (
        <aside
            className={styles.sidebar-home_sidebar-home-left}
            style={{
                backgroundColor: theme.palette.backgroundColor.page,
                borderRight: theme.palette.border.transp,
            }}>
            <List sx={{ mt: 1 }}>
                <ListItem
                    className="search__list-item"
                    sx={{
                        mb: 1,
                        "&:hover": {
                            backgroundColor: theme.palette.hoverColor.secondary,
                        },
                    }}>
                    <Link
                        className={styles.header__menu-item-link}
                        to={"/profile"}
                        onClick={showAuthorizedUser}>
                        {authorizedUser && (
                            <Avatar
                                sx={{ minWidth: "40px", minHeight: "40px" }}
                                alt="user icon"
                                src={
                                    authorizedUser
                                        ? authorizedUser.profilePicture
                                        : ""
                                }
                            />
                        )}
                        <Typography
                            fontWeight={700}
                            fontSize={15}
                            color={theme.palette.textColor.content}>
                            {authorizedUser ? authorizedUser.fullName : null}
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem
                    className={styles.search__list-item}
                    sx={{
                        mb: 1,
                        "&:hover": {
                            backgroundColor: theme.palette.hoverColor.secondary,
                        },
                    }}>
                    <Link
                        className="header__menu-item-link"
                        to={"/friends/home"}>
                        <Group
                            sx={{
                                minWidth: "40px",
                                minHeight: "40px",
                                fontSize: "40px",
                            }}
                            alt="friends icon"
                            color="primary"
                        />
                        <Typography
                            fontSize={15}
                            fontWeight={600}
                            color={theme.palette.textColor.content}>
                            Friends
                        </Typography>
                    </Link>
                </ListItem>

                <ListItem
                    className={styles.search__list-item}
                    sx={{
                        mb: 1,
                        "&:hover": {
                            backgroundColor: theme.palette.hoverColor.secondary,
                        },
                    }}>
                    <Link className={styles.header__menu-item-link} to={"/chats"}>
                        <Forum
                            sx={{
                                minWidth: "40px",
                                minHeight: "40px",
                                fontSize: "40px",
                            }}
                            alt="friends icon"
                            color="primary"
                        />
                        <Badge
                            badgeContent={unread}
                            color="info"
                            style={{ width: "100px" }}>
                            <Typography
                                fontSize={15}
                                fontWeight={600}
                                color={theme.palette.textColor.content}>
                                Messenger
                            </Typography>
                        </Badge>
                    </Link>
                </ListItem>
            </List>
        </aside>
    );
}

export default HomeAsideLeft;
