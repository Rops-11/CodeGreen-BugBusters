import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";

const DriversList = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center bg-adminlanding-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
        <div>
            <AdminHeader />
        </div>
    </div>
    )
}

export default DriversList;