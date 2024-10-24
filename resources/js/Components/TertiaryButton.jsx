

export default function TertiaryButton({children, onClick}){
    return (
        // <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
        //                     border-blue-600
        //                     border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        //                     active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        //         onClick={onClick}
        // >
        //     {children}
        // </button>
        <div
            className="max-w-[500px] bg-transparent items-center justify-center flex border-2 border-sky-500 shadow-lg hover:bg-sky-500 text-sky-500 hover:text-white duration-300 cursor-pointer active:scale-[0.98] rounded-lg"
            onClick={onClick}
        >
            <button className="p-[0.2rem]">{children}</button>
        </div>
    );
}
