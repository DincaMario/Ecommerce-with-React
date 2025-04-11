import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item";
import { selectDirectorySections } from "../../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
function Directory({ sections }) {
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size, LinkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          LinkUrl={LinkUrl}
        />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory);
