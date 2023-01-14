import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello this is sagar working on Bootstrap</h1>
      <h2>About Container</h2>
      <div className="container">
        <div className="row">
          <div className="col-5">
            {/* col-5 will increase the width of the col */}
            <div className="bg-primary text-white p-3">col5</div>
            {/* p-2 ,p-3 will increase the size or hight of the col */}
          </div>
          <div className="col gy-4">
            {/* all the rows and the cols written inside the container will be having the gutter width(i.e the spacing b/n  rows and cols) and this can be changed by parameter 'g' and also we can mention in which direction(X and Y axis) we require to change the gutter width */}
            <div className="bg-primary text-white p-3">col1</div>
          </div>
          <div className="col g-0">
            <div className="bg-primary text-white p-3">col2</div>
          </div>
        </div>
        <br />
        <h2>2.Grid options</h2>
        <div className="row">
          <div className="col-md-3 col-sm-5 ">
            {/* here col-md-3 means it  brakes the col wise layout into single col arrangement at cretain resolution below
             */}
            <div className="bg-primary text-white text-center p-2 mb-2">
              col1
            </div>
          </div>
          <div className="col-md-3 col-sm-5">
            <div className="bg-primary text-white text-center p-2 mb-2">
              col2
            </div>
          </div>
          <div className="col-md-3 col-sm-5">
            <div className="bg-primary text-white text-center p-2 mb-2">
              col3
            </div>
          </div>
          <div className="col-md-3 col-sm-5">
            <div className="bg-primary text-white text-center p-2 mb-2">
              col4
            </div>
            {/* here 'mb' means margin buttom i.e it will provide space between each block */}
          </div>
        </div>
        <h2>3. Nested rows and columns</h2>
        <div className="row">
          <div className="col-md-12 bg-primary text-wh mb-2">
            hai md-0.3Nestprimary{" "}
          </div>
          <div className="row">
            <div className="col-md-2 bg-dark text-white  mb-2">
              hai
              <div className="col-md-0.3 bg-primary text-white text-center p-2 mb-3">
                hello
              </div>
            </div>
            <div className="col-md-2">
              <div className="col-md-0.3 bg-primary text-white text-center p-2 mb-3">
                hello
              </div>
            </div>
            <div className="col-md-2">
              <div className="col-md-0.3 bg-primary text-white text-center p-2 mb-3">
                hello
              </div>
            </div>
            <div className="col-md-2">
              <div className="col-md-0.3 bg-primary text-white text-center p-2 mb-3">
                hello
              </div>
            </div>
            <div className="col-md-2 ">
              <div className="col-md-3 bg-green text-white text-center p-2 mb-3">
                hello
              </div>
            </div>
          </div>
        </div>
        <h2>Col vertival allignment:</h2>
        <p>Using align-item we can align items top middle and end</p>
        <p>align-item-start will align cols at the top</p>
        <div className="row h-10 bg-dark mb-3 align-item-start">
          <div className="col">
            <div className=" bg-primary p-3">3 columns</div>
          </div>
          <div className="col align-self-center">
            <div className=" bg-primary p-3">3 columns</div>
          </div>
          <div className="col">
            <div className=" bg-primary p-3">3 columns</div>
          </div>
        </div>

        <div className="row h-10 bg-dark mb-3 align-items-center">
          <div className="col">
            <div className=" bg-primary p-3 gy-3">3 columns</div>
          </div>
          <div className="col">
            <div className=" bg-primary p-3">3 columns</div>
          </div>
          <div className="col">
            <div className=" bg-primary p-3">3 columns</div>
          </div>
        </div>
        <div className="row h-10 bg-dark mb-3 align-items-end">
          <div className="col">
            <div className=" bg-primary p-3 gy-3">3 columns</div>
          </div>
          <div className="col">
            <div className=" bg-primary p-3">3 columns</div>
          </div>
          <div className="col">
            <div className=" bg-primary p-3">3 columns</div>
          </div>
        </div>
        <div className="row h-10 bg-dark mb-3 align-item-start">
          <div className="col gy-3">
            <div className=" bg-primary p-3">3 columns</div>
          </div>
          <div className="col gy-3">
            <div className=" bg-primary p-3">3 columns</div>
          </div>
          <div className="col gy-3">
            <div className=" bg-primary p-3">3 columns</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
