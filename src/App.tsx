import {FC} from "react";
import {Cars} from "./components/Cars/Cars";
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {CarPage} from "./pages/CarPage";
import {CarDetailsPage} from "./pages";

const App: FC = () => {
    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>
                <Route path={'cars'} element={<CarPage/>}>
                    <Route path={':id'} element={<CarDetailsPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export {App};