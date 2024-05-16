
import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {  // class based component 
  static defaultProps = {
    country : 'ae',
    pageSize : 5 ,
    category : 'general',
  }
  
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
  }
  constructor(props){
    super(props); 
    this.state = {
       articles : [],
       loading : false ,
       page : 1 ,
       totalResults : 0 
    }
    document.title = `${this.props.category }-- NewsFlow `//backtick (`) is used to create template literals, which allow for easier string interpolation and multiline strings.
 
  } 
    async componentDidMount(){ // ya render() ka baad chla ga 
      // console.log("cdm");
      this.props.setprogress(10); // top loading bar red line 
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey} &page=1 &pageSize=${this.props.pageSize}`;
      let data= await fetch(url);
      this.props.setprogress(30);
      let parsedData= await data.json();
      this.props.setprogress(70);
      this.setState({articles:parsedData.articles,totalResults: parsedData.totalResults})
      this.props.setprogress(100);
  }  // The await keyword can only be used inside an async function.
  // The await keyword makes the function pause the execution and wait for a resolved promise before it continues
  
  Click1= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey} &page=${this.state.page-1} &pageSize=${this.props.pageSize}` ;
    this.setState({loading:true})
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({
      page : this.state.page-1 ,
      articles:parsedData.articles,
      loading:false
    })
  }
// javascript likhna k lia phla ``  or fir {} isma likha ga jo condition change ho rhi h 
  Click2= async()=>{ // fetch api sa server sa data l k aata h 
    
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1} &pageSize=${this.props.pageSize}` ;
      this.setState({loading:true}) 
      let data= await fetch(url);
      let parsedData= await data.json();
      this.setState({
        page : this.state.page+1 ,
        articles:parsedData.articles,
        loading:false
      })
}

    fetchMoreData = async() => {
       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1} &pageSize=${this.props.pageSize}` ;
     // this.setState({loading:true}) 
      let data= await fetch(url);
      let parsedData= await data.json();
      this.setState({
        page : this.state.page+1 ,
        articles:this.state.articles.concat(parsedData.articles), // this line chg elase same as click2
        totalResults: parsedData.totalResults,
      //  loading:false
      }) //The concat() method is used to concatenate the articles array from this.state with the articles array obtained from parsedData.
      // It creates a new array that contains all the elements from both arrays (this.state.articles and parsedData.articles), without modifying either of the original arrays.

    }

  render() {
    return ( 
       <div className='container my-3'>
          <h1 className='text-center my-4'>NewsFlow - Top Headlines from {this.props.category} category</h1> 
          
             {this.state.loading ? <Spinner/> : null }
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length!==this.totalResults}
                loader={<Spinner/>}
               >
                {/* "==" only match data , whereas "===" match data and dataType. */}

           <div className="row">
           {this.state.articles.map((element)=>{ //ya array article k uppar iterate kra ga
              return <div className='col-md-4' key={element.url}> 
                    <Newsitem  title={element.title ? element.title.slice(0,45):""} description={element.description ? element.description.slice(0,88):""} 
                    imageUrl={element.urlToImage ? element.urlToImage : "https://static.toiimg.com/thumb/msid-108836681,width-1070,height-580,imgsize-156840,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"}
                    newsUrl={element.url} author={element.author} publishedAt={element.publishedAt}/>
               </div>
            })} 
           </div>
           </InfiniteScroll>
           {/* <div className='container d-flex justify-content-between'>
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.Click1}> &larr; Previous</button>
              <button disabled={(Math.ceil(this.state.totalResults/this.props.pageSize)<this.state.page+1)} type="button" className="btn btn-dark" onClick={this.Click2}>Next  &rarr;</button>
           </div> */}
       </div>
    )
  }
}
export default News

//ReactJS doesn't have a built-in method for fetching or parsing data, so we'll use the Fetch API provided by the browser
// disabled={this.state.page<=1} button disabled ho ja aa ga 
// class k andr bhar k variables use krna k lia this. use krta h 
//  &larr; for left arrow   &rarr; for right arrow
//  Each child in a list should have a unique "key"prop   key={element.url}
// The super() function is the bridge that connects a child class component to its parent class constructor,
// allowing the child class to inherit all the goodness from the parent.
//  <div className="row"> jab horizontal line ka khatam ho ja aa ga tab dalla ga verticlly 
 
//<div className='col-md-4'> ek page 12 segment ka hota h md-4 sa har segment 3 equal parts m aa ja aa ga 
// key={element.url} = Each child in a list should have a unique "key" prop
// element.title.slice(0,88) itna hi character dikha ga highlight m 
// we can use a update function asnyc update(){} to write onclick onclik1 and write similar code one time 