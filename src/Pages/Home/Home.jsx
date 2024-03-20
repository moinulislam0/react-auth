import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import NavBar from "../shared/NavBar/NavBar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            
            <div className="grid lg:grid-cols-4">
                 <div className="border">
                    <h2 className="text-2xl"><LeftSideNav></LeftSideNav></h2>
                 </div>
                 <div className="col-span-2">
                    <h2 className="text-3xl "> news coming soon....</h2>
                 </div>
                 <div className="border ml-8">
                    <h2 className="text-2xl"><RightSideNav></RightSideNav></h2>
                 </div>
            </div>
        </div>
    );
};

export default Home;