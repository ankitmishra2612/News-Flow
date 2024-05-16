import React, { Component } from 'react'


const Newsitem = (props) =>
{
let {title,description,imageUrl,newsUrl,author,publishedAt} = props ;
return ( 
//card ka html copy kiya h then usma update
// you can also put badge on top of card by using bootstrap 
<div>
<div className="card" > 
   
   <img src={imageUrl} className="card-img-top" alt="..."/>
   <div className="card-body">
       <h5 className="card-title">{title}</h5>
       <p className="card-text">{description}</p>
       <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
       <p className="card-text"><small className="text-body-secondary">Last updated by{!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()}</small></p>

   </div>
</div>
</div>
)
}
export default Newsitem 
          // class based component  (bas this.props sa props chg ho ga )
// export default class Newsitem extends Component {

//   render() {
//     let {title,description,imageUrl,newsUrl,author,publishedAt} = this.props ;
//     return ( 
//     )
//   }
// }

// btn-sm button ka size chota ho ja aa ga 
//     let {title,description} = this.props ;  javascript concept destructuring 
//  style={{width: "18rem"}} javascript then object
// target='_blank' next page p khula gi news 
