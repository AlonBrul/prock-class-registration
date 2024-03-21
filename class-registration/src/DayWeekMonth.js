import { useState } from "react"

const DayWeekMonth = () => {
    const [dwm, setDWM] = useState('D')

    const ShowToday = () => {
        setDWM('D')
    }

    const ShowWeek = () => {
        setDWM('W')
    }

    return <div className="dwm-dashbord">
        <button className="dwm-option" onClick={ShowToday}>Today</button>
        <button className="dwm-option" onClick={ShowWeek}>Week</button>
    </div>
}

export default DayWeekMonth