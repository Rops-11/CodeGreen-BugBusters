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
    <div className="flex flex-col items-center bg-adminlanding-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
        <div>
            <AdminHeader />
        </div>
        <h1 className="text-white font-syke-light text-3xl mt-5">What would you like to do?</h1>
        <div className="flex justify-center gap-10 p-3 mt-10">

            <div 
                className="flex items-center justify-center border-5 border-white w-72 h-40 rounded-lg border-2cursor-pointer hover:border-textgreen hover:border-4 transition-all bg-secondgrey text-buttongreen hover:text-textgreen"
                onClick={handleAddDriverButton}
                >
                <span className="font-syke-medium text-white text-3xl">
                Add Driver
                </span>
                
            </div>

            <div 
                className="flex items-center justify-center w-72 h-40 rounded-lg border-2cursor-pointer border-white hover:border-textgreen hover:border-4 transition-all bg-secondgrey text-buttongreen hover:text-textgreen"
                onClick={ handleAddViolationButton }>
                <span className="font-syke-medium text-white text-3xl">
                Add Violation
                </span>
            </div>
            
        </div>


           
    </div>
    )
}

export default EncodePage;