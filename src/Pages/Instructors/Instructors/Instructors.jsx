import { useLocation } from "react-router-dom";
import PageBanner from "../../../Components/PageBanner/PageBanner";
import InstructorsSection from "../InstructorsSection/InstructorsSection";
import useScrollTop from "../../../hooks/useScrollTop";

const Instructors = () => {

    const { pathName } = useLocation();
    useScrollTop(pathName);

    return (
        <div className="mb-24">
            <PageBanner heading={"Our Instructors"} subHeading={"Home / Instructors"}></PageBanner>

            <div className="w-9/12 mx-auto">
                <InstructorsSection></InstructorsSection>
            </div>
           
        </div>
    );
};

export default Instructors;