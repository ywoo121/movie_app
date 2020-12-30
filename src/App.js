import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name:"apple",
    image:"https://images.app.goo.gl/Xrz6akjaun1j6xZN8",
    rating:5
  },
  {
    id:2,
    name:"orange",
    image:"https://images.app.goo.gl/SUBEFkJfyApJWCfB9",
    rating:4.9
  },
  {
    id:3,
    name:"grape",
    image:"https://images.app.goo.gl/6fzN7XgmioUk66Rv9",
    rating:4.8
  },
  {
    id:4,
    name:"banana",
    image:"https://images.app.goo.gl/xEcVG6iQxjqFPjZm8",
    rating:4.7
  },
  {
    id:5,
    name:"kiwi",
    image:"https://images.app.goo.gl/259g68FKno8zWi577",
    rating:4.6
  }
];


function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}.</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  )
} 

Food.propTypes = {
  name :PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};
function App() {
  return (
   <div>
    {foodILike.map(dish => (
      <Food key={dish.id} name = {dish.name} picture ={dish.image} rating={dish.rating} />))}
      </div>
    );
}

export default App;
