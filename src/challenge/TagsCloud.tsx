import { ReactElement } from "react";

import './TagsCloud.css'

import ITag from './ITag'

export const TagsCloud = ({ tagsSelected, handleRemTag }:
  {
    tagsSelected: Array<ITag>,
    handleRemTag: (tag: ITag) => void
  }): ReactElement =>

  <div className="tags">
    {tagsSelected.map((tag) => (
      <div className="tag">
        {`${tag.category}: ${tag.name}`}
        <span className="close" onClick={() => handleRemTag(tag)} />
      </div>
    ))}
  </div>

export default TagsCloud
