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
          <img className="mr-20" src="data:image/jpeg;base64,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"/>
          <img className="mr-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxzqqdf8mgEqFe4j4O1M1EGlU-2YlmjngpPg&s"/>
          <img className="mr-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qdUywsLfxYi2R0ODqC2uVyzk4rrLXpV9cA&s"/>
          <img className="mr-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRGMaNAtNUREfTYzck9XTkJo3baB7eJg27w&s"/>
          <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7O0jvtsdy7dJU-uI6jIp3HMwt3n_BO-uIYw&s"/>
        </div>
        <div className="container flex flex-row w-screen"> 
          <div className="container flex flex-col container-right border-2 mr-9 mt-10"> 
            <div className="container mb-4"> 
              <h1 className="tshirt-header font-semibold text-2xl">Basic Tee 6-Pack</h1>
              <p className="mr-9">Solid colors: 100% Cotton; Heather Grey: 90% Cotton, 10% Polyester; Dark Heather and Heather Blue: 50% Cotton, 50% Polyester; OR Dark Heather, Heather Blue
             </p>
            </div>
            <div className="container flex flex-col mb-4">
                <h1 className="tshirt-content font-semibold text-2xl">Highlights</h1>
                <ul className="flex flex-col">
                  <li>This is the perfect gift for any 6 year old kid who loves universe, ships, planets outer space</li>
                  <li>6th birthday Galaxies lover birthday gifts Space exploration, astronomy, planets for sixth B-boy from mom dad uncle brother, sister, or aunt.</li>
                </ul>
            </div>
            <div className="container  mb-4"> 
                <h1 className="description font-semibold text-2xl">product description</h1>
                <p>Straight line, clear colors: this summer fashion classic accompanies you wherever you go. The close-fitting cut will show everything what you want (or have) to show! The round neck and the material made of 100% cotton provide nice and comfortable wearing.</p>
            </div>
              
          </div>
          <div className="container left-container h-68 border-2 mr-1 mt-10">
              <div className="left-top">
                <h1 className="font-bold">$192</h1>
                <div>
                  <div className="star-rate flex flex-row mx-60">
                    <img class="w-8" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5L-lQeRE3A7dxvbe7zDq1pcSpBic_SyxerYHaRJNLzJdmnKvX"/>
                    <img class="w-8" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5L-lQeRE3A7dxvbe7zDq1pcSpBic_SyxerYHaRJNLzJdmnKvX"/>
                    <img class="w-8" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5L-lQeRE3A7dxvbe7zDq1pcSpBic_SyxerYHaRJNLzJdmnKvX"/>
                    <img class="w-8" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5L-lQeRE3A7dxvbe7zDq1pcSpBic_SyxerYHaRJNLzJdmnKvX"/>
                    <div className="star-rate font-bold mx-4">4.5</div>
                  </div>
                  
                </div>
              </div>
              <div className="left-center ml-2">
                <div className="color-header mt-4">
                    <small class="text-lg font-bold">Color</small>
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
