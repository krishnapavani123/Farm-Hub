import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

import "./index.css";

class Pesticides extends Component {
  fertilizers = [
    {
      name: "Neem Oil",
      image: "https://i.pinimg.com/1200x/bd/ff/ec/bdffecc95076f80493649c2ae6aecbef.jpg",
    },
    {
      name: "Arber Insecticide",
      image: "https://i.pinimg.com/736x/ff/23/11/ff2311963cd249c7db8daadc15403907.jpg",
    },
    {
      name: "Roundup Quickpro",
      image: "https://i.pinimg.com/736x/90/07/2f/90072fc12a07adfdeda570f4e14c1fca.jpg",
    },
    {
      name: "Mancozeb Fungicide",
      image: "https://i5.walmartimages.com/asr/4866ca43-898b-4d38-8e24-8b92493ac69b_1.8775e9022ab381dfd5f9a90c7b76a52f.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
    },
    {
      name:"Bavistin",
      image:"https://tse1.mm.bing.net/th/id/OIP.rN5jbAKHLnLSKlxdCSuzyAHaLG?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      name:"Chlorpyrifos",
      image:"https://atfagrisciences.com/wp-content/uploads/2023/06/atf-agri-sci-product-chlorpyrifos.png"
    }
    ,
    {
      name:"Tricyclazole",
      image:"https://www.chinapesticidefactory.com/uploads/202025238/fungicide-tricyclazole-95-tc-75-wp-cas-no42067241756.jpg" 
    },{
      name:"Buprofezin",
      image:"https://www.engebiotech.com/uploads/Buprofezin-25WP.jpg"
    }
  ];

  constructor() {
    super();
    this.state = { search: "" };
  }

  updateSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const filteredFerts = this.fertilizers.filter((f) =>
      f.name.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <div>
        <Header />

        <div className="mach-products-page">
          <div className="back-btn">
            <Link to="/machinery">⬅ Back</Link>
          </div>

          <h2 className="page-title">Pesticides</h2>

          <input
            className="search-box"
            placeholder="Search Pesticides..."
            value={this.state.search}
            onChange={this.updateSearch}
          />

          <div className="products-grid">
            {filteredFerts.map((f, i) => (
              <div className="product-card" key={i}>
                <Link to={`/machinery/pesticides/${f.name.toLowerCase()}`}>
                  <img src={f.image} className="product-image" alt={f.name} />
                </Link>

                <div className="product-name">{f.name}</div>

               
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Pesticides;
