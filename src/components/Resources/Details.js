import React from 'react'
import './Details.css'


const Details = () => {

    return (
        <>
        <table className='details_table'>
            <span className='details_segment'>Mandat:</span>
            <span className='details_segment'>Mandat_eingabe</span>
            <span className='details_segment'>User:</span>
            <span className='details_segment'>User_eingabe</span>
            <span className='details_segment'>Anwendung:</span>
            <span className='details_segment'>Anwendung_eingabe</span>
            <span className='details_segment'>Release:</span>
            <span className='details_segment'>Release_eingabe</span>
        </table>

        <p className='margentrigger'>PCR Margentrigger Stammdatenverwaltung</p>

        <table className='optionen_table'>
            <button className='optionen_segment'>Datensatz anlegen</button>
            <button className='optionen_segment'>Datensatz ändern</button>
            <button className='optionen_segment'>Datensatz löschen</button>
        </table>

        <table className='daten_table'>
            <tr>
                <td className='daten_segment'>erweiterte VertragsID:</td>
                <td className='input_segment'>
                <input class="input" type="text" placeholder=""></input>
                </td>
            </tr>
            <tr>
                <td className='daten_segment'>MargenID Erblasser - M_VererbMan:</td>
                <td className='input_segment'>
                <input class="input" type="text" placeholder=""></input>
                </td>
            </tr>
            <tr>
                <td className='daten_segment'>Anteil Vererbung Margenbarwert - M_AnteilVererbMan:</td>
                <td className='input_segment'>
                <input class="input" type="int" placeholder="0"></input>
                </td>
            </tr>
            <tr>
                <td className='daten_segment'>Kommentar:</td>
                <td className='input_segment'>
                <input class="input" type="text" placeholder=""></input>
                </td>
            </tr>
        </table>

        </>
    )
}

export default Details
