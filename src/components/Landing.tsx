import { useEffect, useState } from "react";
import Loading from "./Loading";
import NewLand from "./NewLand";

export default function Landing() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? <Loading /> : <NewLand />}
        </>
    );
}