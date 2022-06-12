import React from "react";
import { Title } from "../../components/";
import { categories } from "../../assets/dummyData/categories";
function Categories() {
  return (
    <div className="categories-container">
      <div className="categories">
        <Title style={{ color: "white" }}>Explore Categories</Title>
        <div className="elements-conatiner">
          {categories.map((ele) => {
            return (
              <div key={ele.id} className="single-ele">
                <img src={ele.image} alt={ele.name} />
                <Title style={{fontSize: '20px', textTransform: 'uppercase', color: '#d3d3d3'}}>{ele.name}</Title>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
