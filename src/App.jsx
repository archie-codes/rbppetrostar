import React, { useEffect } from "react"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom"
import AboutUs from "./components/aboutus/AboutUs";
import "./App.css";
import ContactUs from "./components/contactus/ContactUs";
import ArenasNews from "./components/newsSection/ArenasNews";
import OutreachProgram from "./components/newsSection/OutreachProgram";
import OutreachProgram2 from "./components/newsSection/OutreachProgram2";
import TeamBuilding from "./components/newsSection/TeamBuilding";
import AllNews from "./components/newsSection/AllNews";
import StoTomasReliefOperation from "./components/newsSection/StoTomasReliefOperation";
import DaangBatoReliefOperation from "./components/newsSection/DaangBatoReliefOperation";
import PayangaReliefOperation from "./components/newsSection/PayangaReliefOperation";

import PampangaStationList from "./components/all_stations/PampangaStationList";
import Arenas_Station from "./components/all_stations/pampanga_stations/Arenas_Station";
import Calulut_Station from "./components/all_stations/pampanga_stations/Calulut_Station";
import Panipuan_Station from "./components/all_stations/pampanga_stations/Panipuan_Station";
import Delapaz_Station from "./components/all_stations/pampanga_stations/Delapaz_Station";
import Pandan_Station from "./components/all_stations/pampanga_stations/Pandan_Station";
import Pulungbulu_Station from "./components/all_stations/pampanga_stations/Pulungbulu_Station";
import Sindalan_Station from "./components/all_stations/pampanga_stations/Sindalan_Station";
import SanMatias_Station from "./components/all_stations/pampanga_stations/SanMatias_Station";
import TuboTuboReliefOperations from "./components/newsSection/TuboTuboReliefOperations";

import BataanStationList from "./components/all_stations/BataanStationList";
import Orani_Station from "./components/all_stations/bataan_stations/Orani_Station";
import Dinalupihan_Station from "./components/all_stations/bataan_stations/Dinalupihan_Station";

import NuevaEcijaStationList from "./components/all_stations/NuevaEcijaStationList";
import Talavera_Station from "./components/all_stations/nuevaecija_stations/Talavera_Station";
import Sta_Rosa_Station from "./components/all_stations/nuevaecija_stations/Sta_Rosa_Station";
import Cabanatuan_Station from "./components/all_stations/nuevaecija_stations/Cabanatuan_Station";

import ValueCardRegsitration from "./components/valueCard/ValueCardRegsitration";
import VCardFormRegistration from "./components/valueCard/VCardFormRegistration";
import ScrollToTop from "react-scroll-to-top";

import CareerList from "./components/career/CareerList";
import InquireforSpace from "./components/space/InquireforSpace";
import Fuels from "./components/fuel/Fuels";
import POAccounts from "./components/poaccount/POAccounts";
import Hauling from "./components/hauling/Hauling";
import Brochure from "./components/brochure/Brochure";

// import { BrowserRouter as Router } from "react-router-dom";



import StickyRollbackButton from "./components/marquee/StickyRollbackButton";

function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/AllNews" element={<AllNews />} />
            {/* News Section */}
            <Route path="/PayangaReliefOperation" element={<PayangaReliefOperation />} />
            <Route path="/TuboTuboReliefOperations" element={<TuboTuboReliefOperations />} />
            <Route path="/DaangBatoReliefOperation" element={<DaangBatoReliefOperation />} />
            <Route path="/StoTomasReliefOperation" element={<StoTomasReliefOperation />} />
            <Route path="/ArenasNews" element={<ArenasNews />} />
            <Route path="/OutreachProgram" element={<OutreachProgram />} />
            <Route path="/OutreachProgram2" element={<OutreachProgram2 />} />
            <Route path="/TeamBuilding" element={<TeamBuilding />} />
            {/* Pampanga */}
            <Route path="/PampangaStationList" element={<PampangaStationList />} />
            <Route path="/Arenas_Station" element={<Arenas_Station />} />
            <Route path="/Calulut_Station" element={<Calulut_Station />} />
            <Route path="/Panipuan_Station" element={<Panipuan_Station />} />
            <Route path="/Delapaz_Station" element={<Delapaz_Station />} />
            <Route path="/Pandan_Station" element={<Pandan_Station />} />
            <Route path="/Pulungbulu_Station" element={<Pulungbulu_Station />} />
            <Route path="/Sindalan_Station" element={<Sindalan_Station />} />
            <Route path="/SanMatias_Station" element={<SanMatias_Station />} />
            {/* Bataan */}
            <Route path="/BataanStationList" element={<BataanStationList />} />
            <Route path="/Orani_Station" element={<Orani_Station />} />
            <Route path="/Dinalupihan_Station" element={<Dinalupihan_Station />} />
            {/* Nueva Ecija */}
            <Route path="/NuevaEcijaStationList" element={<NuevaEcijaStationList />} />
            <Route path="/Talavera_Station" element={<Talavera_Station />} />
            <Route path="/Sta_Rosa_Station" element={<Sta_Rosa_Station />} />
            <Route path="/Cabanatuan_Station" element={<Cabanatuan_Station />} />
            {/* Value Card */}
            <Route path="/ValueCardRegistration" element={<ValueCardRegsitration />} />
            <Route path="/VCardFormRegistration" element={<VCardFormRegistration />} />
            {/* Career */}
            <Route path="/CareerList" element={<CareerList />} />
            {/* Space */}
            <Route path="/InquireforSpace" element={<InquireforSpace />} />
            {/* Fuel */}
            <Route path="/Fuels" element={<Fuels />} />
            {/* PO Account */}
            <Route path="/POAccounts" element={<POAccounts />} />
            {/* Hauling */}
            <Route path="/Hauling" element={<Hauling />} />
            {/* Brochure */}
            <Route path="/Brochure" element={<Brochure />} />
            {/* Catch-all route */}
          </Routes>
        </div>
        <ScrollToTop smooth component={<p style={{ color: "red" }}>▲</p>} />
        <StickyRollbackButton />
      </div>
    </>
  )
}

export default App

function CustomLink({ to, children, ...props }) {
    const ResolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: ResolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}
