import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import ImageResults from "../image-results/ImageResults";

class Search extends Component {
  state = {
    searchText: "",
    resultsNumber: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "9388578-70f86d979ac84d2fb2de27cee",
    images: []
  };

  onInputChange = e => {
    const val = e.target.value
    if (!val) {
        this.setState({images:[], searchText:''})
    } else {
    this.setState({ [e.target.name]: e.target.value }, () => {
      axios
        .get(
          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
            this.state.searchText
          }&image_type=photo&per_page=${
            this.state.resultsNumber
          }&safesearch=true`
        )
        .then(res => this.setState({ images: res.data.hits }))
        .catch(err => console.log(err));
    });
}
  };


  render() {
    console.log(this.state);
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onInputChange}
          label="Search for Images"
          fullWidth={true}
        />

        <FormControl style={{ minWidth: "150px", marginTop: "1rem" }}>
          <InputLabel htmlFor="age-simple">Results</InputLabel>
          <Select

            value={this.state.resultsNumber}
            onChange={this.onInputChange}
            inputProps={{
              name: "resultsNumber",
              id: "image-results"
            }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
