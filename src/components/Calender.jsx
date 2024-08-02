
import  { useState } from "react";
import { Calendar } from 'primereact/calendar';

import 'primereact/resources/themes/saga-blue/theme.css';  // Or any other theme of your choice
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function Calender() {
    
    const [datetime24h, setDateTime24h] = useState(null);
    

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            
            <div className="flex-auto">
               
                <Calendar id="calendar-24h" value={datetime24h} onChange={(e) => setDateTime24h(e.value)} showTime hourFormat="24" showIcon
               className="w-96 py-3 border border-gray-300 rounded-lg   focus:outline-none   p-2"/>
            </div>
           
        </div>
    )
}
        