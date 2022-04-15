import React, { Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./global.css"
import AlbumInfo from "./pages/AlbumInfo";

/**
 * The starting page for your App
 */

class App extends Component{
  render(){
    return(
      <>
        <BrowserRouter>
          <Header />
          <main>
            <section>
                <Routes>
                  <Route path={"/"} element={<Home />}>
                    {/* <Route path="albums">
                      <Route path=":id" element={<AlbumInfo />} />
                    </Route> */}

                  </Route>
                  <Route path={"/albums/:id"} element={<AlbumInfo />}/>
                </Routes>
            </section>
          </main>
        </BrowserRouter>
      </>
    );
  }
}

export default App;