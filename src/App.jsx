import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper headerLeft clear d-flex justify-between p-40">
        <header className="d-flex ">
          <div className="d-flex align-center">
            <img width={40} height={40} src="/img/logo.png" alt="Logo" />
            <div>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p>Shoppez vos meilleurs baskets!</p>
            </div>
          </div>
        </header>

        <ul className="d-flex ">
          <li className="mr-30">
            <img
              className="price"
              width={25}
              height={25}
              src="/img/cart.svg"
              alt="Cart"
            />
          </li>
          <li>
            <img width={25} height={25} src="/img/profile.svg" alt="Profile" />
          </li>
        </ul>
      </div>

      <div className="content mb-40 justify-between aligne-center headerLeft">
        <h1 className="title ">Baskets</h1>
        <div className="search-block">
          <img src="/public/search.svg" alt="Search" />
          <input placeholder="Search...." />
        </div>

        <div className="cardAll d-flex">
          <div className="card align-center	">
            <div className="favorite">
              <img src="/img/like-1.svg" />
            </div>

            <img
              width={120}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <h5>Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between ">
              <div className="d-flex flex-column ">
                <span>Prix:</span>
                <b>95.99€</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card align-center	">
            <div className="favorite">
              <img src="/img/like-1.svg" />
            </div>
            <img
              width={120}
              height={112}
              src="/img/sneakers/2.jpg"
              alt="Sneakers"
            />
            <h5>Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between ">
              <div className="d-flex flex-column ">
                <span>Prix:</span>
                <b>95.99€</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card align-center	">
            <div className="favorite">
              <img src="/img/like-1.svg" />
            </div>
            <img
              width={120}
              height={112}
              src="/img/sneakers/3.jpg"
              alt="Sneakers"
            />
            <h5>Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between ">
              <div className="d-flex flex-column ">
                <span>Prix:</span>
                <b>95.99€</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card align-center	">
            <div className="favorite">
              <img src="/img/like-1.svg" />
            </div>
            <img
              width={120}
              height={112}
              src="/img/sneakers/4.jpg"
              alt="Sneakers"
            />
            <h5>Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between ">
              <div className="d-flex flex-column ">
                <span>Prix:</span>
                <b>95.99€</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card align-center	">
            <div className="favorite">
              <img src="/img/like-1.svg" />
            </div>
            <img
              width={120}
              height={112}
              src="/img/sneakers/5.jpg"
              alt="Sneakers"
            />
            <h5>Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between ">
              <div className="d-flex flex-column ">
                <span>Prix:</span>
                <b>95.99€</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card align-center	">
            <div className="favorite">
              <img src="/img/like-1.svg" />
            </div>
            <img
              width={120}
              height={112}
              src="/img/sneakers/6.jpg"
              alt="Sneakers"
            />
            <h5>Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between ">
              <div className="d-flex flex-column ">
                <span>Prix:</span>
                <b>95.99€</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card align-center	">
            <div className="favorite">
              <img src="/img/like-1.svg" />
            </div>
            <img
              width={120}
              height={112}
              src="/img/sneakers/7.jpg"
              alt="Sneakers"
            />
            <h5>Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between ">
              <div className="d-flex flex-column ">
                <span>Prix:</span>
                <b>95.99€</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card align-center	">
            <div className="favorite">
              <img src="/img/like-1.svg" />
            </div>
            <img
              width={120}
              height={112}
              src="/img/sneakers/8.jpg"
              alt="Sneakers"
            />
            <h5>Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between ">
              <div className="d-flex flex-column ">
                <span>Prix:</span>
                <b>95.99€</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card align-center	">
            <div className="favorite">
              <img src="/img/like-1.svg" />
            </div>
            <img
              width={120}
              height={112}
              src="/img/sneakers/9.jpg"
              alt="Sneakers"
            />
            <h5>Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between ">
              <div className="d-flex flex-column ">
                <span>Prix:</span>
                <b>95.99€</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card align-center	">
            <div className="favorite">
              <img src="/img/like-1.svg" />
            </div>
            <img
              width={120}
              height={112}
              src="/img/sneakers/10.jpg"
              alt="Sneakers"
            />
            <h5>Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between ">
              <div className="d-flex flex-column ">
                <span>Prix:</span>
                <b>95.99€</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card align-center	">
            <div className="favorite">
              <img src="/img/like-1.svg" />
            </div>
            <img
              width={120}
              height={112}
              src="/img/sneakers/3.jpg"
              alt="Sneakers"
            />
            <h5>Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between ">
              <div className="d-flex flex-column ">
                <span>Prix:</span>
                <b>95.99€</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card align-center	">
            <div className="favorite">
              <img src="/img/like-1.svg" />
            </div>
            <img
              width={120}
              height={112}
              src="/img/sneakers/5.jpg"
              alt="Sneakers"
            />
            <h5>Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between ">
              <div className="d-flex flex-column ">
                <span>Prix:</span>
                <b>95.99€</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
