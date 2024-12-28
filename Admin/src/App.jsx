import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from "./Components/Navbar/Slider";
import AddService from "./Components/AddService/AddService";
import ListService from "./Components/ListService/ListService";
import CustomerReviewList from "./Components/CustomerReviewList/CustomerReviewList";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Slider />}>
            <Route path="addservice" element={<AddService />} />
            <Route path="list" element={<ListService />} />
            <Route path="customer_reviews" element={<CustomerReviewList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
