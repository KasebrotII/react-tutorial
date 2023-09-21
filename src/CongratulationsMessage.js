

export const CongratulationsMessage = ({ numberOfClicks, threshold, onHide }) => {
    return (
        <><h1>Congratulations! You've reached {threshold} number of clicks!</h1>
            <button onClick={onHide}>Hide</button>
        </>
    );
}