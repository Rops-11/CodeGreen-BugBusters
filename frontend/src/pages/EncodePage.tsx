import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";



const EncodePage = () => { 
    const navigate = useNavigate()

    const handleAddDriverButton = () => { 
        navigate('/add-driver')
    }
    
    const handleAddViolationButton = () => { 
        navigate('/add-violation')
    }

    return (
    <div className="flex flex-col items-center bg-login-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
        <div className="w-full max-w-3xl mb-8 mt-5">
            <AdminHeader />
        </div>

        <div className="flex justify-center gap-8 p-10 mt-24">

            <div 
                className="flex items-center justify-center w-72 h-40 rounded-lg border-2 border-buttongreen cursor-pointer hover:border-textgreen hover:border-4 transition-all bg-secondgrey text-buttongreen hover:text-textgreen"
                onClick={handleAddDriverButton}
                >
                <span className="font-semibold text-lg">
                Add Driver
                </span>
                
            </div>

            <div 
                className="flex items-center justify-center w-72 h-40 rounded-lg border-2 border-buttongreen cursor-pointer hover:border-textgreen hover:border-4 transition-all bg-secondgrey text-buttongreen hover:text-textgreen"
                onClick={ handleAddViolationButton }
            >
                <span className="font-semibold text-lg">
                Add Violation
                </span>
            </div>
            
        </div>


           
    </div>
    )
}

export default EncodePage;