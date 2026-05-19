import { useEffect, useState } from "react";
import Loading from "./Loading";
import WebPages from "./WebPages";

export default function Landing() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 10000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? <Loading /> : <WebPages />}
        </>
    );
}