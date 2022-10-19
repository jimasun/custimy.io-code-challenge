import { ReactElement } from "react"

import './TagsCategory.css'

export const TagsCategory = ({ categories, selected, onClick }:
    {
        categories: Array<string>,
        selected: string,
        onClick: (category: string) => void
    }): ReactElement =>

    <div className="categories">
        {categories.map((category: string) =>
            <span
                className={`category ${category === selected && "selected"}`}
                onClick={() => onClick(category)}
            >
                {category}
            </span>
        )}
    </div>

export default TagsCategory