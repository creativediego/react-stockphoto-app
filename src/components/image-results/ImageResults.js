import React, { Component } from "react";
import propTypes from "prop-types";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import ZoomIn from "@material-ui/icons/ZoomIn";
//import FlatButton from "@material-ui/core/FlatButton";
import Dialog from "@material-ui/core/Dialog";
import { GridListTileBar } from "@material-ui/core";

class ImageResults extends Component {
  render() {
      console.log("ZE PROPS", this.props)
    let imageListContent;
    const { images } = this.props;
    if (images) {
      imageListContent = (
        <GridList cellHeight={180}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
         
        </GridListTile>
        {images.map(img => (
          <GridListTile key={img.id}>
            <img src={img.largeImageURL} alt="" />
            <GridListTileBar
              title={img.tags}
              subtitle={<span>by: {img.user}</span>}
              actionIcon={
                <IconButton>
                  <ZoomIn style={{color: 'white'}} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      );
    } else {
      imageListContent = null;
    }
    return <div>{imageListContent}</div>;
  }
}

ImageResults.propTypes = {
  images: propTypes.array.isRequired
};

export default ImageResults;
