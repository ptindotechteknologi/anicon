import Image from "next/image";
import Link from "next/link";
const FloatingButton = () => {
    return (
        <div className="group fixed bottom-4 left-0 p-2  flex items-end justify-end w-24 h-24 ">
            <Link
                href={'https://api.whatsapp.com/send?phone=6281210771205&text=Haii%20..%20'}
                className=" h-12 w-12 text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 z-50 absolute  ">
                <Image
                    src="/images/logo/whatsapp.png"
                    alt="about image"
                    fill
                    className="group-hover:rotate-90 transition  transition-all duration-[0.6s]"
                />
            </Link>
        </div>
    );
};

export default FloatingButton;


