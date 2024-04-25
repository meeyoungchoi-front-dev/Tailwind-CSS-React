import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="box-border container w-screen h-16 flex flex-row justify-start ">
        <div className="mr-8 mt-8">Menu1</div>
        <div className="mr-8 mt-8">Menu2</div>
        <div className="mr-8 mt-8">Menu3</div>
      </header>
      <main>
        <div className="container flex flex-row w-screen"> 
          <div className="container flex flex-col container-right border-2 mr-9"> 
            <div className="container mb-4"> 
              <h1 className="tshirt-header">Basic Tee 6-Pack</h1>
              <p className="mr-9">Solid colors: 100% Cotton; Heather Grey: 90% Cotton, 10% Polyester; Dark Heather and Heather Blue: 50% Cotton, 50% Polyester; OR Dark Heather, Heather Blue
             </p>
            </div>
            <div className="container flex flex-col mb-4">
                <h2 className="tshirt-content">Highlights</h2>
                <ul className="flex flex-col">
                  <li>This is the perfect gift for any 6 year old kid who loves universe, ships, planets outer space</li>
                  <li>6th birthday Galaxies lover birthday gifts Space exploration, astronomy, planets for sixth B-boy from mom dad uncle brother, sister, or aunt.</li>
                </ul>
            </div>
            <div className="container  mb-4"> 
                <h2 className="description">product description</h2>
                <p>Straight line, clear colors: this summer fashion classic accompanies you wherever you go. The close-fitting cut will show everything what you want (or have) to show! The round neck and the material made of 100% cotton provide nice and comfortable wearing.</p>
            </div>
              
          </div>
          <div className="container left-container h-68 border-2">
              <div className="left-top">
                <h1>$192</h1>
                <div>
                  <div className="star-rate"><i class="fa-sharp fa-solid fa-star"></i><i class="fa-sharp fa-solid fa-star"></i><i class="fa-sharp fa-solid fa-star"></i><i class="fa-sharp fa-regular fa-star"></i></div>
                  <div className="star-rate">4.5</div>
                </div>
              </div>
              <div className="left-center">
                <div className="color-header mt-4">
                    <small class="text-lg">Color</small>
                    <div className="color-selector mb-2 mt-2">
                      <div class="rounded-full h-6 w-6 bg-gray-50 color-button mr-12">w</div>
                      <div class="rounded-full h-6 w-6 bg-gray-500 color-button mr-10">g</div>
                      <div class="rounded-full h-6 w-6 bg-gray-800 color-button text-gray-900">b</div>
                    </div>
                </div>
                <div className="size-button flex flex-col justify-center size-buttons mt-10">
                   <div className="container flex flex-row mb-2">
                     <button class="w-12 border-2 border-gray-50 mr-1">/</button>
                     <button class="w-12 border-2 border-gray-50 mr-1">XS</button>
                     <button class="w-12 border-2 border-gray-50 mr-1">S</button>
                     <button class="w-12 border-2 border-gray-50">M</button>
                   </div>
                   <div className="container flex flex-row">
                      <button class="w-12 border-2 border-gray-50 mr-1">L</button>
                      <button class="w-12 border-2 border-gray-50 mr-1">XL</button>
                      <button class="w-12 border-2 border-gray-50 mr-1">2XL</button>
                      <button class="w-12 border-2 border-gray-50">3XL</button>
                    </div> 
                </div>
              </div>
              <div className="left-bottom  mt-10">
                <button class="text-base w-full bg-blue-500 text-white ">Add to Cart</button>
              </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
