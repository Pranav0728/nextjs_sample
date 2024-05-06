import Image from "next/image";
import Img from '../../public/images/to-do-list.png';
import Main from "@/components/Main";

export default function Home() {
    return (
        <>
            <div className="w-full grid grid-flow-row gap-4 auto-rows-max h-screen justify-center bg-slate-200 p-4 rounded-lg">
                <div className="flex flex-row justify-center items-center h-40">
                    <Image src={Img} width={100} height={100} alt="todolist" />
                    <h1 className="text-3xl	">Todo App</h1>
                </div>
                <Main/>
            </div>
        </>
    );
}
