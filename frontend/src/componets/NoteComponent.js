import React from 'react'

export default function NoteComponent({data}) {
    return (
        <div className="note">
            <div className="note-date"> {data.createdAt}</div>
            <ul className="note-content">
                <li className="note-title"> {data.title} </li>
                <li>
                    <p>
                        {data.description}
                    </p>
                </li>
            </ul>
        </div>
    )
}
