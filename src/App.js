import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from "./data/dados_iniciais.json";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer"
function App() {
  return (
    <div style={{ background: "#141414" }}>
     <Menu />
     <BannerMain
				videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
				url={dadosIniciais.categorias[0].videos[0].url}
				videoDescription={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
				}
			/>

			<Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

			<Carousel category={dadosIniciais.categorias[1]} />

			<Carousel category={dadosIniciais.categorias[2]} />

			<Carousel category={dadosIniciais.categorias[3]} />

      <Footer />
    </div>
  );
}

export default App;
