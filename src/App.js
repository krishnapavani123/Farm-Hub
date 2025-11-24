import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import CropsPage from "./CropsPage";
import ContactPage from "./ContactPage";
import Grains from "./Grains";
import Fruits from "./Fruits";
import Vegetables from "./Vegetables";
import Pulses from "./Pulses";
import Spices from "./Spices";
import Wheat from "./Wheat";
import Rice from './Rice'
import Corn from './Corn'
import Millets from './Millets'
import ProductDetailWrapper from "./ProductDetail";
import Cart from "./Cart";
import Fertilizers from "./Fertilizers";
import Pesticides from "./Pesticides";
import Machines from "./Machines";
import OrganicWheat from "./OrganicWheat";
import InorganicWheat from "./InorganicWheat";
import InorganicRice from "./InorganicRice";
import OrganicRice from './OrganicRice'
import InorganicCorn from "./InorganicCorn";
import OrganicCorn from "./OrganicCorn";
import InorganicMillets from "./InorganicMillets";
import OrganicMillets from "./OrganicMillets";
import Machinery from "./Machinery";
import Apple from "./Apple";
import Banana from "./Banana";
import Papaya from "./Papaya";
import Guva from "./Guva";
import OrganicApple from "./OrganicApple";
import OrganicBanana from './OrganicBanana'
import OrganicPapaya from "./OrganicPapaya";
import OrganicGuva from "./OrganicGuva";
import "./App.css";
import InorganicApple from "./InorganicApple";
import InorganicBanana from "./InorganicBanana";
import InorganicGuva from "./InorganicGuva";
import InorganicPapaya from "./InorganicPapaya";
import Tomato from "./Tomato";
import Potato from "./Potato";
import Capsicum from "./Capsicum";
import Onion from "./Onion";
import OrganicCapsicum from "./OrganicCapsicum";
import OrganicOnion from "./OrganicOnion";
import OrganicPotato from "./OrganicPotato";
import OrganicTomato from "./OrganicTomato";
import InorganicCapsicum from "./InorganicCapsicum";
import InorganicOnion from "./InorganicOnion";
import InorganicPotato from "./InorganicPotato";
import InorganicTomato from "./InorganicTomato";
import Turmeric from "./Turmeric";
import Chilli from "./Chilli";
import Cinnamon from "./Cinnamon";
import Fenugreek from "./Fenugreek";
import OrganicChilli from "./OrganicChilli";
import OrganicCinnamon from "./OrganicCinnamon";
import OrganicFenugreek from "./OrganicFenugreek";
import OrganicTurmeric from "./OrganicTurmeric";

import InorganicCinnamon from "./InorganicCinnamon";
import InorganicFenugreek from "./InorganicFenugreek";
import InorganicChilli from "./InorganicChilli";
import InorganicTurmeric from "./InorganicTurmeric";

import Bengal from "./Bengal";
import Black from "./Black";
import Pigeonpea from "./Pigeonpea";
import OrganicB from "./OrganicBengalgram";
import OrganicBB from "./OrganicBlackgram";
import Greengram from './Greeengram'
import InorganicB from "./InorganicBengalgram";
import InorganicBB from "./InorganicBlackgram";
import OrganicPigeonpea from "./OrganicPigeonpea";
import OrganicGreengram from './OrganicGreengram'
import InorganicPigeonpea from './InorganicPigeonpea'
import InorganicGreengram from "./InorganicGreengram";
import PesticidesDetails from "./PesticidesDetails";
import FertilizerDetails from "./FertilizerDetails";
import MachinesDetails from "./MachinesDetails";
import BookingPage from "./BookingPage";
import BookPHTest from "./BookPHTest";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ loading: false });
    }, 2000); // 2 seconds splash
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { loading } = this.state;

    return (
      <>
        {loading ? (
          <div className="splash-screen">
            <img
              src="https://res.cloudinary.com/duk9ishub/image/upload/v1763802259/593a31c0-a05d-4f97-8265-e865d08d0738_yn5xzm.png"
              alt="FarmHub Logo"
              className="splash-logo"
            />
          </div>
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/crops" element={<CropsPage />} />
              <Route path="/contact" element={<ContactPage />} />
                 <Route path="/crops/grains" element={<Grains />} />
                 <Route path="/machinery" element={<Machinery/>}/>
                 <Route path="/machinery" element={<Machinery />} />

<Route path="/machinery/fertilizers" element={<Fertilizers />} />
<Route path="/machinery/pesticides" element={<Pesticides />} />
<Route path="/machinery/machines" element={<Machines />} />

          <Route path="/crops/fruits" element={<Fruits />} />
          <Route path="/crops/vegetables" element={<Vegetables />} />
          <Route path="/crops/pulses" element={<Pulses />} />
          <Route path="/crops/spices" element={<Spices />} />
          <Route path="/crops/grains/wheat" element={<Wheat/>}/>
          <Route path="/crops/grains/rice" element={<Rice/>}/>
          <Route path="/crops/grains/corn" element={<Corn/>}/>
          <Route path="/crops/grains/millets" element={<Millets/>}/>
          <Route path='/crops/fruits/apple' element={<Apple/>}/>
          <Route path='/crops/fruits/banana' element={<Banana/>}/>
          <Route path="/crops/grains/wheat/organic" element={<OrganicWheat/>}/>
          <Route path='/crops/grains/wheat/inorganic' element={<InorganicWheat/>}/>
          <Route path="/crops/grains/rice/organic" element={<OrganicRice/>}/>
          <Route path='/crops/grains/rice/inorganic' element={<InorganicRice/>}/>
          <Route path="/crops/grains/corn/organic" element={<OrganicCorn/>}/>
          <Route path='/crops/grains/corn/inorganic' element={<InorganicCorn/>}/>
          <Route path="/crops/grains/millets/organic" element={<OrganicMillets/>}/>
          <Route path='/crops/grains/millets/inorganic' element={<InorganicMillets/>}/>
          <Route path='/crops/fruits/apple/organic' element={<OrganicApple/>}/>
          <Route path='/crops/fruits/banana/organic' element={<OrganicBanana/>}/>
          <Route path='/crops/fruits/papaya' element={<Papaya/>}/>
          <Route path='/crops/fruits/papaya/organic' element={<OrganicPapaya/>}/>
          <Route path='/crops/fruits/guva' element={<Guva/>}/>
          <Route path='/crops/fruits/guva/organic' element={<OrganicGuva/>}/>
          <Route path='/crops/fruits/apple/inorganic' element={<InorganicApple/>}/>
          <Route path='/crops/fruits/banana/inorganic' element={<InorganicBanana/>}/>
 <Route path='/crops/fruits/guva/inorganic' element={<InorganicGuva/>}/>
  <Route path='/crops/fruits/papaya/inorganic' element={<InorganicPapaya/>}/>
  <Route path='/crops/vegetables/tomato' element={<Tomato/>}/>
  <Route path='/crops/vegetables/potato' element={<Potato/>}/>
  <Route path='/crops/vegetables/Capsicum' element={<Capsicum/>}/>
  <Route path='/crops/vegetables/Onion' element={<Onion/>}/>
  <Route path='/crops/vegetables/potato/organic' element={<OrganicPotato/>}/>
  <Route path='/crops/vegetables/tomato/organic' element={<OrganicTomato/>}/>
    <Route path='/crops/vegetables/capsicum/organic' element={<OrganicCapsicum/>}/>
      <Route path='/crops/vegetables/onion/organic' element={<OrganicOnion/>}/>
           <Route path='/crops/vegetables/potato/inorganic' element={<InorganicPotato/>}/>
                <Route path='/crops/vegetables/tomato/inorganic' element={<InorganicTomato/>}/>
                     <Route path='/crops/vegetables/capsicum/inorganic' element={<InorganicCapsicum/>}/>
                          <Route path='/crops/vegetables/onion/inorganic' element={<InorganicOnion/>}/>
                          <Route path='/crops/spices/turmeric' element={<Turmeric/>}/>
                          <Route path='/crops/spices/chilli' element={<Chilli/>}/>
                          <Route path='/crops/spices/cinnamon' element={<Cinnamon/>}/>
                          <Route path='/crops/spices/cardamom' element={<Fenugreek/>}/>
                          <Route path='/crops/spices/turmeric/organic' element={<OrganicTurmeric/>}/>
                          <Route path='/crops/spices/chilli/organic' element={<OrganicChilli/>}/>
                          <Route path='/crops/spices/cinnamon/organic' element={<OrganicCinnamon/>}/>
                          <Route path='/crops/spices/cardamom/organic' element={<OrganicFenugreek/>}/>
                          <Route path='/crops/spices/cardamom/inorganic' element={<InorganicFenugreek/>}/>
                           <Route path='/crops/spices/chilli/inorganic' element={<InorganicChilli/>}/>
                            <Route path='/crops/spices/cinnamon/inorganic' element={<InorganicCinnamon/>}/>
            
            
                             <Route path='/crops/spices/turmeric/inorganic' element={<InorganicTurmeric/>}/>
                           
                           <Route path='/crops/pulses/bengal-gram' element={<Bengal/>}/>
                           <Route path='/crops/pulses/black-gram' element={<Black/>}/>
                            <Route path='/crops/pulses/pigeon-pea' element={<Pigeonpea/>}/>
                           <Route path='/crops/pulses/bengal-gram/organic' element={<OrganicB/>}/>
                           <Route path='/crops/pulses/black-gram/organic' element={<OrganicBB/>}/>
                               <Route path='/crops/pulses/black-gram/inorganic' element={<InorganicBB/>}/>
                               <Route path='/crops/pulses/bengal-gram/inorganic' element={<InorganicB/>}/>
                                  <Route path='/crops/pulses/pigeon-pea/organic' element={<OrganicPigeonpea/>}/>
                                   <Route path='/crops/pulses/green-gram/organic' element={<OrganicGreengram/>}/>
                                     <Route path='/crops/pulses/pigeon-pea/inorganic' element={<InorganicPigeonpea/>}/>
                                   <Route path='/crops/pulses/green-gram/inorganic' element={<InorganicGreengram/>}/>
                                    <Route path='/crops/pulses/green-gram' element={<Greengram/>}/>
                           <Route path="/product/:category/:productName" element={<ProductDetailWrapper />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/machinery/pesticides/:name" element={<PesticidesDetails />} />
    <Route
            path="/machinery/fertilizers/:name"
            element={<FertilizerDetails />}
          />
           <Route
            path="/machinery/machines/:name"
            element={<MachinesDetails />}
          />
           
            <Route path="/book-machine" element={<BookingPage />} />
            <Route path="/book-ph-test" element={<BookPHTest />} />

 </Routes>
          </Router>
        )}
      </>
    );
  }
}

export default App;
