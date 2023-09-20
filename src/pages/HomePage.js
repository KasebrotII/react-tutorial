import { Greeting } from '../Greeting';

export const HomePage = () => (
    <>
        <h1>The Home Page</h1>
        <Greeting name="Sheldon" numberOfMessages={10}></Greeting>
    </>
);