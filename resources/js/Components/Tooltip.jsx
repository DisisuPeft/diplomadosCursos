import React, {useState} from "react";

export default function Tooltip({children, text, position = 'top'}){
    const [visible, setVisible] = useState(false)

    let classPosition = ''

    switch(position){
        case 'top':
            classPosition = 'bottom-full mb-2';
            break;
        case 'bottom':
            classPosition = 'top-full mt-2';
            break;
        case 'left':
            classPosition = 'right-full mr-2';
            break;
        case 'right':
            classPosition = 'left-5 ml-2';
            break;
        default:
            classPosition = 'bottom-full mb-2';
            break;
    }


    return (
        <div className="relative flex items-center"
             onMouseEnter={() => setVisible(true)}
             onMouseLeave={() => setVisible(false)}
        >
            {children}
            {
                visible && (
                    <div className={`absolute ${classPosition} w-max px-2 py-1 text-sm text-white bg-gray-800 rounded shadow-lg`}>
                        {text}
                    </div>
                )
            }

        </div>
    )
}
