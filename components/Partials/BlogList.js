import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

export default class BlogList extends Component {

  scrollTop(){
    $('html, body').animate({
      scrollTop: $("#main-content").offset().top
    }, 500)
  }

  render() {
      let data = this.props.data;
      let item_num = data.item_num;
      let articles = data.articles;

      let load_more;
      let show_more_text = 'Show More Articles';

      if(data.loading)
        show_more_text = "Loading..."
        
  }
}