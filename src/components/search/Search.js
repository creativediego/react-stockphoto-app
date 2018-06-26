import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';

class Search extends Component {
state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: process.env.PIXABAY_KEY

}


  render() {
    return <div></div>;
  }
}
