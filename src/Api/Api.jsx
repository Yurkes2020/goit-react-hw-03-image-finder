import React, { Component } from 'react';
import axios from 'axios';

export class fetchArticlesWithQuery extends Component   {
  async  response = axios.get(
    'https://pixabay.com/api/?key=29907105-27da4e6e42fdff29794422632&q=yellow+flowers&image_type=photo'
  );
  return response.data.hits;
};
