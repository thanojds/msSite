export default function SideLine() {
    return (
        <div className="absolute top-0 right-0 w-[60px] h-full flex items-center justify-center pointer-events-none">

            <div className="flex items-center gap-3 transform rotate-90">

                <div className="w-[70px] h-[2px] bg-white/70"></div>

                <p className="text-white text-sm tracking-widest whitespace-nowrap">
                    SCROLL TO EXPLORE
                </p>

                <div className="w-[70px] h-[2px] bg-white/70"></div>

            </div>

        </div>
    );
}