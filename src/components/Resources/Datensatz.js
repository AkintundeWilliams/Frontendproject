import React from 'react'
import './Datensatz.css'

const Datensatz = () => {

    return (
        <div className='datensatz_wrap'>
                    
            <p className='datensatz'>Informationen zum Datensatz</p>
            

            <table className='datensatz_table'>
                <span className='datensatz_segment'>SatzNr:</span>
                <span className='datensatz_segment'>SatzNr_eingabe</span>
                <span className='datensatz_segment'>Bearbeiter:</span>
                <span className='datensatz_segment'>Bearbeiter_eingabe</span>
                <span className='datensatz_segment'>Status:</span>
                <span className='datensatz_segment'>Status_eingabe</span>
                <span className='datensatz_segment'>Änderungszeitpunkt:</span>
                <span className='datensatz_segment'>Änderungszeitpunkt_eingabe</span>
            </table>

        </div>
)
}

export default Datensatz