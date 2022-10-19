import { MouseEvent, ReactElement } from "react"

import ITag from "./ITag"

import './TagsList.css'


export const TagsList = ({ category, items, active, tagsSelected, handleAddTag }:
    {
        category: string,
        items: string[],
        active: boolean,
        tagsSelected: ITag[],
        handleAddTag: (tag: ITag) => void
    }): ReactElement => {

    function genIconName(item: string): string {
        return item.replace(' ', '-').toLowerCase()
    }

    function handleItemClick(event: MouseEvent<HTMLElement>, tag: ITag) {
        if (!tagsSelected.includes(tag)) {
            handleAddTag(tag)
            event.currentTarget.classList.add('selected')
        }
    }

    return (
        <div className={`entries ${active && 'selected'}`}>
            {items.map((name: string) =>
                <div className={`entry ${tagsSelected.includes({ category, name }) && 'selected'}`}
                    onClick={(event) => handleItemClick(event, { category, name })}>
                    <span className={`icon ${genIconName(name)}`} />
                    {name}
                </div>
            )}
        </div>
    )
}
export default TagsList