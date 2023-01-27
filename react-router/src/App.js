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
        <div>
          <h2>About Bootstrap</h2>
          {/* float-md-end will move the image to the enf */}
          <img
            className="col-md-3 float-md-end me-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/180px-Bootstrap_logo.svg.png"
            alt=""
          />
          Bootstrap is an HTML, CSS and JS library that focuses on simplifying
          the development of informative web pages as opposed to web
          applications. The primary purpose of adding it to a web project is to
          apply Bootstrap's choices of color, size, font and layout to that
          project. As such, the primary factor is whether the developers in
          charge find those choices to their liking. Once added to a project,
          Bootstrap provides basic style definitions for all HTML elements. The
          result is a uniform appearance for prose, tables and form elements
          across web browsers. In addition, developers can take advantage of CSS
          classes defined in Bootstrap to further customize the appearance of
          their contents. For example, Bootstrap has provisioned for light- and
          dark-colored tables, page headings, more prominent pull quotes, and
          text with a highlight.
        </div>
        <h2>Horizontal & vertical gutters </h2>
        <p>
          all the rows and the cols written inside the container will be having
          the gutter width(i.e the spacing b/n rows and cols) and this can be
          changed by parameter 'g' and also we can mention in which direction(X
          and Y axis) we require to change the gutter width. <br />
          while using the offset class sometimes it over flows the container so
          to overcome that we use 'px' or "overflow-hidden" class <br />
          without overflow-hidden class
        </p>
        <div className="row bg-success mb-3">
          <div className="col-md-2 mb-3 gy-2 ">
            <div className="bg-warning text-black p-2">col 1</div>
          </div>
          <div className="col-md-2 mb-3 gy-2 offset-11 ">
            <div className="bg-dark text-white p-2">col 2</div>
          </div>
        </div>
        <p>with overflow-hidden class</p>
        <div className="row bg-success mb-3 overflow-hidden">
          <div className="col-md-2 mb-3 gy-2 ">
            <div className="bg-warning text-black p-2">col 1</div>
          </div>
          <div className="col-md-2 mb-3 gy-2 offset-11 ">
            <div className="bg-dark text-white p-2">col 2</div>
          </div>
        </div>
        <h2>Typograpghy</h2>
        <h3 className="text-decoration-underline">heading tags (h)</h3>
        <h1>heading h1 </h1>
        <h2>heading h2 </h2>
        <h3>heading h3 </h3>
        <h4>heading h4 </h4>
        <h5>heading h5 </h5>
        <h6>heading h6 </h6>
        <h1 className="text-muted">
          this h1 tag will be muted i.e color will be slightly dull compared to
          normal "h" tags{" "}
        </h1>
        <h6 className="display-6">
          "display-1" will increase the font size of the heading it can vary
          from 1 to 6
        </h6>
        <h3>Paragraph tags</h3>
        <p>
          We can provide heading (h) class to vary the text size of the
          paragraph{" "}
        </p>
        <p className="h1">Paragraph with h1 class</p>
        <p className="h2">Paragraph with h2 class</p>
        <p className="h3">Paragraph with h3 class</p>
        <p className="h4">Paragraph with h4 class</p>
        <p className="h5">Paragraph with h5 class</p>
        <p className="h6">Paragraph with h6 class</p>
        <p className="h6 lead">
          Paragraph with h6 and lead class <br /> lead class will change the
          font color{" "}
        </p>
        <h2>Inline text elements</h2>
        <p>normal HTML tags</p>
        <p>
          this is a <mark>mark tag</mark>
        </p>
        <p>
          this is a <u>underline tag</u>
        </p>
        <p>
          this is a <del>delete tag</del>
        </p>
        <p>
          this is a <s>strike tag</s>
        </p>
        <p>
          this is a <small>small tag</small>
        </p>
        <p>
          this is a <strong>strong tag</strong>
        </p>
        <p>
          this is a <ins>INS tag</ins>
        </p>
        <p>
          this is a <em>Empasize tag</em>
        </p>

        <hr />
        <p>
          <strong>We can also use bootstrap class to decorate the text</strong>
        </p>
        <p>
          using bootstrap classes to style
          <span className="mark">"mark" class</span>
          <br />
          <span className="text-decoration-line-through">
            "text-decoration-line-through" class
          </span>
          <br />
          <span className="text-decoration-underline">
            "text-decoration-underline" class
          </span>
          <br />
          <span className="small">small class</span>
        </p>
        <h2>Working with list</h2>
        <p>ther are three ways to define a lists </p>
        <h3 className="text-decoration-underline">Un-ordered lists </h3>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>four</li>
        </ul>

        <p>using "list-unstyled" we can remove the bullets</p>
        <ul className="list-unstyled">
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>four</li>
        </ul>
        <hr />
        <h3 className="text-decoration-underline">Inline-list</h3>
        <p>
          using "list-inline" and "list-inline-item" we can view the list in a
          single line
        </p>
        <ul className="list-inline">
          <li className="list-inline-item">One</li>
          <li className="list-inline-item">Two</li>
          <li className="list-inline-item">Three</li>
          <li className="list-inline-item">Four</li>
        </ul>
        <hr />
        <h3 className="text-decoration-underline">Description list</h3>
        <dl>
          <dt>"discription term"</dt>
          <dd>
            "discription data" and this line will be shown in normal test i.e
            not in bold letters
          </dd>
          <dt>text-truncate</dt>
          <dd className="text-truncate">
            if user has more data to show and he has less space then he can use
            text-truncate(minimize the screen size){" "}
          </dd>
        </dl>
        <h2>Tables</h2>
        <p>
          we can change the background color of the table using class
          table-(primary,secondary,light,success,warning,dark, info) <br /> eg:
          table-info <br /> <strong>table-striped -- </strong> this will provide
          a gray and white patternin the background <br />{" "}
          <span className="mark"> note:</span> note: this class will provide row
          wise pattern and to provide pattern in col wise we use{" "}
          <span className="text-decoration-underline">
            {" "}
            table-striped-columns
          </span>{" "}
          <br />
          <strong>table-hover -- </strong> this class will provide hover effect
          for all the rows
          <br />
          <strong>table-bordered -- </strong> this class will border around the
          table
          <br />
          <strong>table-sm -- </strong> this class will decrease the size of the
          table table
          <br />
          <strong>table-group-divider --</strong> this class will provide a
          thick border
        </p>
        <table className="table  table-hover table-bordered table-sm table-group-divider">
          <thead className="table-warning">
            <tr>
              <th>S.No</th>
              <th>content</th>
              <th>about</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <td>1</td>
              <td>React</td>
              <td>
                React is a javscript framework which is used to develop frontend
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Node</td>
              <td>
                Node is a javscript framework which is used to develop backend
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>React-router-dom</td>
              <td>
                React Router DOM is an npm package that enables you to implement
                dynamic routing in a web app
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Image</h2>
        <p>
          <strong>img-fluid--</strong> this classname is used to fit the image
          as per the screen size and it is also used to fit inside the columns
          defined(col-md-4) <br />
          <strong>img-thumbnail--</strong>This classname is used to provides
          extra border to the image(in below image i have used img-thumbnail)
        </p>

        <div className="row">
          <div className="col-md-6 mb-3">
            <img
              className="img-fluid img-thumbnail"
              src="https://a-static.besthdwallpaper.com/one-piece-logo-wallpaper-2560x1600-8626_7.jpg"
              alt=""
            />
          </div>
          <div className="col-md-6 mt-4 ">
            <img
              className="img-fluid rounded"
              src="https://staticg.sportskeeda.com/editor/2022/11/a402f-16694231050443-1920.jpg"
              alt=""
            />
          </div>
          <div className="col-md-12 mt-2 mb-3">
            <img
              className="img-fluid img-thumbnail mx-auto d-block"
              src="https://staticg.sportskeeda.com/editor/2022/09/a3331-16622109493354-1920.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
