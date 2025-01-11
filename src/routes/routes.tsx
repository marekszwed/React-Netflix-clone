import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import FilmsPage from "../pages/Films/Films";
import AddFilm from "../pages/AddFilm/AddFilm";

function Paths() {
	return (
		<Routes>
			<Route index path="/" element={<HomePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/films" element={<FilmsPage />} />
			<Route path="/films/new" element={<AddFilm />} />
		</Routes>
	);
}

export default Paths;
