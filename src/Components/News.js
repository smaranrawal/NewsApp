import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page:1
    };
  }

  async componentDidMount() {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=b871b2eba3d6415c9b6e0dee296f0e56&page=1&pageSize=20";
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        loading: false,
        totalResults:parsedData.totalResults,
      });
    } catch (error) {
      console.error("Error fetching the news:", error);
      this.setState({ loading: false });
    }
  }

  handlePrevClick =async()=>{

    const url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=b871b2eba3d6415c9b6e0dee296f0e56&page=${this.state.page - 1}&pageSize=20`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page:this.state.page - 1,
        articles:parsedData.articles,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching the news:", error);
      this.setState({ loading: false });
    }
  }

   
  

  handleNextClick= async()=>{
     if(this.state.page + 1> Math.ceil(this.state.totalResults/20))
     {

     }
     else{
    const url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=b871b2eba3d6415c9b6e0dee296f0e56&page=${this.state.page + 1}&pageSize=20`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page:this.state.page + 1,
        articles:parsedData.articles,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching the news:", error);
      this.setState({ loading: false });
    }
  }
  }

   
  

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}  
                    description={element.description ? element.description: ""}
                    imageUrl={element.urlToImage}
                    url={element.url}
                  />
                </div>
              );
            })
          )}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<2} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
        <button type="button" class="btn btn-dark"  onClick={this.handleNextClick}>Next&rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
