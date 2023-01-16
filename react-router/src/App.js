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
        <p>align-items-center will align the col vertically at the center</p>
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
        <p>align-items-end will align the col vertically at the end</p>
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
        <p>
          We can also provide gutter widths either on X or Y axis, here we have
          giventhe gutterwidth on Y-axis{" "}
        </p>
        <div className="row h-10 bg-dark mb-3 align-item-start">
          <div className="col gy-3 ">
            <div className=" bg-primary p-3">3 columns</div>
          </div>
          <div className="col gy-3">
            <div className=" bg-primary p-3">3 columns</div>
          </div>
          <div className="col gy-3">
            <div className=" bg-primary p-3">3 columns</div>
          </div>
        </div>

        <div className="row h-10 bg-dark mb-3">
          <div className="col align-self-start gy-1">
            <div className=" bg-primary p-3 ">3 columns</div>
          </div>
          <div className="col align-self-center">
            <div className=" bg-primary p-3">3 columns</div>
          </div>
          <div className="col align-self-end">
            <div className=" bg-primary p-3">3 columns</div>
          </div>
        </div>
        <h2>Col Horizontal alignment:</h2>
        <p>
          To align col horizontally we use "justify-content-start or center or
          end"
        </p>
        <div className="row h-10 bg-warning justify-content-center">
          <div className="col-md-2 ">
            <div className="col bg-dark p-2 mb-2 text-white">
              Horizontal alignment
            </div>
          </div>
          <div className="col-md-2">
            <div className="col bg-dark p-2 mb-2 text-white">
              Horizontal alignment
            </div>
          </div>
        </div>
        <p>We can also try around</p>
        <div className="row h-10 bg-warning justify-content-around">
          <div className="col-md-2 ">
            <div className="col bg-dark p-2 mb-2 text-white">
              Horizontal alignment
            </div>
          </div>
          <div className="col-md-2">
            <div className="col bg-dark p-2 mb-2 text-white">
              Horizontal alignment
            </div>
          </div>
        </div>
        <p>we can also try between</p>
        <div className="row h-10 bg-warning justify-content-between">
          <div className="col-md-2 ">
            <div className="col bg-dark p-2 mb-2 text-white">
              Horizontal alignment
            </div>
          </div>
          <div className="col-md-2">
            <div className="col bg-dark p-2 mb-2 text-white">
              Horizontal alignment
            </div>
          </div>
        </div>
        <p>we can also try "evenly" and "around"</p>
        <h2>Col brakes & col wraping</h2>
        <p>
          Max width of the col is 12 if the col width exceeds 12 the it comes to
          next line
        </p>
        <div className="row">
          <div className="col-9">
            <div className="text-white p-3 mb-3 bg-warning">9 col width</div>
          </div>
          <div className="col-5">
            <div className=" text-white p-3 mb-3 bg-warning">5 col width</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="bg-primary mb-3 p-2">col break</div>
          </div>
          <div className="w-100"></div>
          <div className="col-md-3">
            <div className="bg-primary mb-3 p-2">col break</div>
          </div>
          <div className="col-md-3">
            <div className="bg-primary mb-3 p-2">col break</div>
          </div>
          <div className="col-md-3">
            <div className="bg-primary mb-3 p-2">col break</div>
          </div>
        </div>
        <p>We can brake single rows into multiple rows using w-100 class</p>
        <h2>Re-ordering col </h2>
        <div className="row bg-info mb-3">
          <div className="col-md-4 mb-3 gy-2 ">
            <div className="bg-dark text-white p-2">col 1</div>
          </div>
          <div className="col-md-4 mb-2 order-2 ">
            <div className="bg-dark text-white p-2">col 2</div>
          </div>
          <div className="col-md-4 gy-2">
            <div className="bg-dark text-white p-2">col 3</div>
          </div>
          <div className="col-md-4 gy-2 ">
            <div className="bg-dark text-white p-2">col 4</div>
          </div>
        </div>
        <h2>Col offsetting </h2>
        <p>
          this allows cols to shift left to right at many place className :
          offset-1 ..{" "}
        </p>
        <div className="row bg-info mb-3">
          <div className="col-md-2 mb-3 gy-2 ">
            <div className="bg-dark text-white p-2">col 1</div>
          </div>
          <div className="col-md-2 mb-3 gy-2 offset-1 ">
            <div className="bg-dark text-white p-2">col 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
