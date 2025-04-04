import {PiShoppingCartSimpleBold} from "react-icons/pi";

const Header = () => {
    return (
        <div className="w-full h-full flex relative flex-col items-center py-10">
            <div
                className="h-screen w-full -translate-y-10 flex flex-col items-start gap-6 justify-center"
                style={{
                    backgroundImage: "url('/assets/image/public/banner.png')",
                    backgroundSize: "100% 100%",
                }}
            >
                <div className="flex flex-col items-start gap-5 px-20 w-full">
                    <div className="flex items-end font-bold w-full">
                        <span className="text-7xl text-white">Mobile</span>
                        <span className="text-7xl text-yellow-600">Zone</span>
                    </div>

                    <p className="w-1/3 text-base text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                        magnam incidunt nam cuex quidem nesciunt odio exercitationem
                        reprehenderit quam, ipsam mollitia cumque itaque rerum soluta
                        explicabo sunt accusamus officiis ipsa impedit dicta aspernatur aut
                    </p>
                    <div className="flex items-center  gap-5">
                        <button
                            onClick={() => console.log("first")}
                            className="flex items-center gap-3 rounded text-base bg-yellow-600 text-white px-8 py-2"
                        >
                            <PiShoppingCartSimpleBold/>
                            Shop
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
