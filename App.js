import React from 'react';
import Footer from './components/Footer';
import Map from './components/Map';
import FormInput from './components/FormInput';
import RegionInfo from './components/RegionInfo';
import Header from './components/Header';
import Sidebar from './components/Sidebar';



const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <FormInput />
        <Map latitude={0} longitude={0} /> {/* Pass initial latitude and longitude */}
        <RegionInfo />
      </main>
      <Footer />
    </>
  );
};

export default App;
