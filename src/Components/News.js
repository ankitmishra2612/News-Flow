import React, { Component, useState,useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

  const News = (props)=> {  // function based component 
     const [article,setarticle] = useState([])
     const [loading,setloading] = useState(false)
     const [page,setpage] = useState(1)
     const [totalResults,settotalResults] = useState(0)

 const updateNews = async ()=> {
   // props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
    setloading(true)
    let data = await fetch(url);
    //props.setProgress(30);
    let parsedData = await data.json()
    //props.setProgress(100);
    setarticle(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
    //props.setProgress(100);
}

    useEffect(() => {
        updateNews(); 
    }, [])


    const Click1= async()=>{
        setpage(page-1)
        updateNews();
        }
    
     const Click2= async()=>{ 
        setpage(page+1)
        updateNews();
        }
    

    const fetchMoreData = async () => {   
        setpage(page+1) 
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setarticle(article.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
        };
    return ( 
       <div className='container my-3'>
          <h1 className='text-center my-4'>NewsFlow - Top Headlines from {props.category} category</h1> 
          
             {loading ? <Spinner/> : null }
            <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                hasMore={article.length!==totalResults}
                loader={<Spinner/>}
              >
           <div className="row">
           {article.map((element)=>{ //ya array article k uppar iterate kra ga
              return <div className='col-md-4' key={element.url}> 
                    <Newsitem  title={element.title ? element.title.slice(0,45):""} description={element.description ? element.description.slice(0,88):""} 
                    imageUrl={element.urlToImage ? element.urlToImage : "https://static.toiimg.com/thumb/msid-108836681,width-1070,height-580,imgsize-156840,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"}
                    newsUrl={element.url} author={element.author} publishedAt={element.publishedAt}/>
               </div>
            })} 
           </div>
           </InfiniteScroll>
       </div>
    )
  }
export default News

  News.defaultProps = {
    country : 'ae',
    pageSize : 5 ,
    category : 'general',
  }
  
   News.propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
  }
 // function based component m PropsTypes necha aata h 