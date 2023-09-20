import { useState } from "react";
import { CounterButton } from "../CounterButton";
import { CongratulationsMessage } from "../CongratulationsMessage";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export const CounterButtonPage = () => {

    //const { name } = useParams();
    const location = useLocation();
    const startingValue = queryString.parse(location.search).startingValue;
    const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue));
    const [hideMessage, setHideMessage] = useState(false);

    const increment = () => setNumberOfClicks(numberOfClicks + 1);

    return (
        <>
        <h1>Counter Button Page</h1>
            {hideMessage
                ? null
                : <CongratulationsMessage 
                    numberOfClicks={numberOfClicks}
                    threshold={10}
                    onHide={() => setHideMessage(true)}
                ></CongratulationsMessage>}
        
            <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}></CounterButton>
        </>
    );
}