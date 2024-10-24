
export default function Operations({children, onEdit, onDelete}){
    return (
        <div
            className="group grid grid-cols-2 gap-0 hover:gap-2 duration-500 relative shadow-sm"
        >
            <h1
                className="absolute z-10 group-hover:hidden duration-200 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            >
                {/*<svg*/}
                {/*    viewBox="0 0 24 24"*/}
                {/*    fill="none"*/}
                {/*    height="24"*/}
                {/*    width="24"*/}
                {/*    xmlns="http://www.w3.org/2000/svg"*/}
                {/*    aria-hidden="true"*/}
                {/*    className="w-7 h-7 text-gray-800"*/}
                {/*>*/}
                {/*    <path*/}
                {/*        d="M5 7h14M5 12h14M5 17h14"*/}
                {/*        strokeWidth="2"*/}
                {/*        strokeLinecap="round"*/}
                {/*        stroke="currentColor"*/}
                {/*    ></path>*/}
                {/*</svg>*/}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-7 h-7 text-gray-800"
                >
                    <path
                        d="M12 4v16m8-8H4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        stroke="currentColor"
                    ></path>
                </svg>
            </h1>
            {children}
            <button onClick={onEdit}>
                {/*<svg*/}
                {/*    className="group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-transparent backdrop-blur-md group-hover:shadow-xl rounded-tl-lg flex justify-center items-center w-full h-full text-[#cc39a4] hover:text-white duration-200"*/}
                {/*    aria-hidden="true"*/}
                {/*    xmlns="http://www.w3.org/2000/svg"*/}
                {/*    width="24"*/}
                {/*    height="24"*/}
                {/*    fill="none"*/}
                {/*    viewBox="0 0 24 24"*/}
                {/*>*/}
                {/*    <path*/}
                {/*        className="opacity-0 group-hover:opacity-100 duration-200"*/}
                {/*        fill="white"*/}
                {/*        fillRule="evenodd"*/}
                {/*        d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896 l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"*/}
                {/*        clipRule="evenodd"*/}
                {/*    ></path>*/}
                {/*</svg>*/}
                <svg
                    className="group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-sky-500 backdrop-blur-md group-hover:shadow-xl rounded-tl-lg flex justify-center items-center w-full h-full text-black hover:text-white duration-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        className="opacity-0 group-hover:opacity-100 duration-200"
                        d="M15.232 1.232a2 2 0 0 1 2.828 0l3.536 3.536a2 2 0 0 1 0 2.828l-12 12a1 1 0 0 1-.447.263l-4 1a1 1 0 0 1-1.268-1.268l1-4a1 1 0 0 1 .263-.447l12-12zM19 5.414l-2.586-2.586L14 3l2.586 2.586L19 5.414zM5 17l1.5 1.5-2.5.5.5-2.5L5 17zm1-2h8v2H6v-2z"
                    />
                </svg>
            </button>
            <button onClick={onDelete}>
                <svg
                    className="group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-red-500 backdrop-blur-md group-hover:shadow-xl rounded-tl-lg flex justify-center items-center w-full h-full text-black hover:text-white duration-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        className="opacity-0 group-hover:opacity-100 duration-200"
                        fill="currentColor"
                        d="M19 3h-4.586L12 0H8L7.586 3H3c-1.104 0-2 .896-2 2v2h24V5c0-1.104-.896-2-2-2zm-3 6H8v12c0 1.104.896 2 2 2h4c1.104 0 2-.896 2-2V9z"
                    />
                </svg>
                {/*<svg*/}
                {/*    className="group-hover:rounded-lg group-hover:opacity-1 p-3 bg-white/50 hover:bg-sky-500 backdrop-blur-md group-hover:shadow-xl rounded-tl-lg flex justify-center items-center w-full h-full text-[#cc39a4] hover:text-white duration-200"*/}
                {/*    aria-hidden="true"*/}
                {/*    xmlns="http://www.w3.org/2000/svg"*/}
                {/*    width="24"*/}
                {/*    height="24"*/}
                {/*    fill="none"*/}
                {/*    viewBox="0 0 24 24"*/}
                {/*>*/}
                {/*    <path*/}
                {/*        className="opacity-0 group-hover:opacity-100 duration-200"*/}
                {/*        fill="currentColor"*/}
                {/*        fillRule="evenodd"*/}
                {/*        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"*/}
                {/*        clipRule="evenodd"*/}
                {/*    ></path>*/}
                {/*</svg>*/}
            </button>
        </div>
    );
}
