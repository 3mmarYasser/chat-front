import React, {useState} from 'react';
interface Props{
    children:JSX.Element;
    title:string,
    open?:boolean
}
const RoomsGroupChat :React.FC<Props> = ({children,title,open=true}) => {
    const [checked,setChecked] =useState(open)
    return (
        <>
            <div tabIndex={0} className="collapse  collapse-arrow mt-2">
                <input type="checkbox" className="peer" checked={checked} onChange={()=>{
                    setChecked(!checked)
                }} />
                <div className="collapse-title collapse-chat-extend ">
                    {title}
                </div>
                <ul className="collapse-content pb-0 px-2 py-3 pt-1 ">
                    {children}
                </ul>
            </div>
        </>
    );
};

export default RoomsGroupChat ;
