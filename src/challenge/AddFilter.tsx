import { ReactElement } from "react"

import './AddFilter.css'

export const AddFilter = ({ onClick }:
    {
        onClick: () => void
    }): ReactElement =>

    <button className="button" onClick={onClick}>
        + Add filter
    </button>

export default AddFilter