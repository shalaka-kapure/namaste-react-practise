import { useRouteError } from "react-router-dom/dist";

const Error = () => {
    const err = useRouteError();

    return(
        <>
        <h2>{err.status + ":" + err.statusText}</h2>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/449f8649929329.58c22d34662f3.jpg"/>
        </>
    )
}

export default Error;