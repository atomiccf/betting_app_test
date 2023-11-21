import React, {useState} from 'react';
import {useParams, useLocation, useNavigate} from 'react-router-dom';
import { useAppContext } from '../../Context';
import "./EventDetails.css"

type Event = {
    id:string|undefined,
    title:string|undefined,
    date:string|undefined,
    odd_first:number|undefined,
    odd_second:number|undefined,
    draw:number|undefined,
    isLive:boolean|undefined,
    current_odd:string|undefined,
}


const EventDetailsPage:React.FC = () => {
    const { eventId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { showNotification } = useAppContext();
    const { date ,title,winFirst,winSecond,draw,live} = location.state;
    const [isCheck, setIsCheck] = useState<boolean>(false);
    const [odd, setOdd] = useState<string>('');


    const eventDetails:Event = {
        id: eventId,
        title: title,
        date: date,
        odd_first:winFirst,
        odd_second:winSecond,
        draw:draw,
        isLive:live,
        current_odd:odd,
    };

    const handleRadio = (EO:React.SyntheticEvent<HTMLInputElement>) => {
        setIsCheck(true);
        setOdd(EO.currentTarget.value)
    }

    const sendState = () => {
   if (odd) {
            showNotification(`Спасибо, ваша ставка на матч ${title} принята c коэффициентом ${odd}.`);
            navigate(-1);
    }
    }


    return (
        <>
       <div className='event-card'>
                <h1>{eventDetails.title}</h1>
                <label htmlFor="first_team"><strong>1:</strong> {eventDetails.odd_first}
                    <input value={eventDetails.odd_first} onChange={handleRadio}  id='first_team' type="radio" name="odd"/>
                </label>
                <label htmlFor="draw"><strong>X:</strong> {eventDetails.draw}
                    <input value={eventDetails.draw} onChange={handleRadio} id='draw' type="radio" name="odd"/>
                </label>
                <label htmlFor="second_team"><strong>2:</strong> {eventDetails.odd_second}
                    <input value={eventDetails.odd_second} onChange={handleRadio} id='second_team' type="radio" name="odd"/>
                </label>
                <p><strong>Start date:</strong> {eventDetails.date}</p>
                <button  onClick={sendState} disabled={!isCheck} type="button">Make a bet</button>
            </div>
        </>

    );
};

export default EventDetailsPage;