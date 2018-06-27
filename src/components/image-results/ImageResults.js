import React, { Component } from "react";
import propTypes from "prop-types";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import IconButton from "@material-ui/core/IconButton";
import ZoomIn from "@material-ui/icons/ZoomIn";
//import FlatButton from "@material-ui/core/FlatButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { GridListTileBar } from "@material-ui/core";

class ImageResults extends Component {
    state = {
        open: false,
        currentImage: ''
    }
  handleOpen = (img) => {
    this.setState({ open: true, currentImage: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
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
                <IconButton onClick={()=> this.handleOpen(img.largeImageURL)}>
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
    return <div>
    {imageListContent}
    <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <a href={this.state.currentImage} target="_blank"><img src={this.state.currentImage} alt="" style={{width: "100%"}}/></a>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            </DialogActions>
    </Dialog>
    

    
    </div>;
    
  }
}

ImageResults.propTypes = {
  images: propTypes.array.isRequired
};

export default ImageResults;
