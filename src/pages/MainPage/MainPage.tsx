import data from "../../betting_data.json";
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Stack from '@mui/material/Stack';
import {Link, useLocation} from "react-router-dom";
import React, {useState} from "react";
import { useAppContext } from '../../Context';

import "./MainPage.css"


const MainPage:React.FC= () => {

    const [isCurrent,setCurrent] = useState(false);
    const [isLive,setIsLive] = useState(true);
    const location = useLocation();
    const {eventData} = location.state || {};
    const { notification } = useAppContext();


    const handlerChange = (EO:React.MouseEvent<HTMLElement>) => {
        if(EO.currentTarget.id === "current") {
            setCurrent(true)
            setIsLive(false)
        }else if (EO.currentTarget.id === "live") {
            setCurrent(false)
            setIsLive(true)
        }
    }

return (
    <>
        {notification && <div className="bet_notification">{notification}</div>}
        {eventData &&
            <div>{eventData}</div>
        }
        <div>
            {eventData?.current_odd}
             </div>
        <div className='showBlock'>
            <Stack spacing={2} direction="row">
                <Button onClick={handlerChange} id="current" variant="contained">Current Fixtures</Button>
                <Button onClick={handlerChange} id="live" variant="contained">Live Fixtures</Button>
            </Stack>
        {isLive &&
        data.filter(({is_live}) => is_live).map((
                    {
                        event_id,
                        start_time,
                        team1,
                        team2,
                        win_team1_odds,
                        win_team2_odds,
                        draw_odds,
                        is_live,
                    }) => (

                    <List id="list_item" sx={{textAlign:"right"}} key={event_id} component="li" aria-label="secondary mailbox folder">
                        <ListItemButton
                        >
                            <Link to={`/event/${event_id}`} state={
                                {
                                    date:start_time,
                                    title:`${team1} vs ${team2}`,
                                    winFirst:win_team1_odds,
                                    winSecond:win_team2_odds,
                                    draw:draw_odds,
                                    live:is_live
                                }
                            }>{team1} vs {team2} <span>1: {win_team1_odds} </span> <span>X: {draw_odds}</span> <span>2:{win_team2_odds}</span></Link>
                        </ListItemButton>

                    </List>
                    ))
            }
            {isCurrent &&
                data.filter(({is_live}) => !is_live).map(( {
                                                               event_id,
                                                               start_time,
                                                               team1,
                                                               team2,
                                                               win_team1_odds,
                                                               win_team2_odds,
                                                               draw_odds,
                                                               is_live,
                                                           }) => (
                    <List sx={{textAlign:"right"}} key={event_id} component="nav" aria-label="secondary mailbox folder">
                        <ListItemButton
                        >
                            <Link to={`/event/${event_id}`} state={
                                {
                                    date:start_time,
                                    title:`${team1} vs ${team2}`,
                                    winFirst:win_team1_odds,
                                    winSecond:win_team2_odds,
                                    draw:draw_odds,
                                    live:is_live
                                }
                            }>{team1} vs {team2} <span>1: {win_team1_odds} </span> <span>X: {draw_odds}</span> <span>2:{win_team2_odds}</span></Link>
                        </ListItemButton>
                    </List>
                ))
            }
            </div>
    </>)
}

export default MainPage;