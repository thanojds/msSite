import { useEffect, useState } from "react";
import Loading from "./Loading";
import NewLand from "./NewLand";
import { AnimatePresence } from "framer-motion";

export default function Landing() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {loading ? <Loading /> : <NewLand />}
        </AnimatePresence>
    );
}