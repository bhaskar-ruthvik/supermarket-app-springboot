import React from 'react';
import './item.css';
import Colors from '../components/Colors'
import DetailsThumb from '../components/DetailsThumb';
import Header from 'components/Header';

class Item extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "Lays Hot \'n\' Sweet Chilli",
        "src": [
            "https://www.bigbasket.com/media/uploads/p/l/294278_18-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
            "https://www.bigbasket.com/media/uploads/p/l/294278-2_13-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
            "https://www.bigbasket.com/media/uploads/p/l/294278-3_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
            "https://www.bigbasket.com/media/uploads/p/l/294278-4_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg"
          ],
        "description": "UI/UX designing, html css tutorials",
        "content": "Experience an out-of-this-world blend of hot and sweet seasoning! The Lay’s West Indies Hot 'n' Sweet Chilli is an exciting adventure waiting to be unfolded. The journey starts with high-quality, farm-grown potatoes cooked to crispy perfection.",
        "price": 18,
        "colors":["red","black","crimson","teal"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
          
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>₹{item.price}</span>
                </div>

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="cart">Add to cart</button>

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default Item;
