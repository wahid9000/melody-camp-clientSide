import PageBanner from "../../../Components/PageBanner/PageBanner";
import ClassesSection from "../ClassesSection/ClassesSection";

const Classes = () => {
    return (
        <div>
            <PageBanner heading={"All Classes"} subHeading={"Home / All Classes"}></PageBanner>
            <div className="w-9/12 mx-auto">
                <ClassesSection></ClassesSection>
            </div>
        </div>
    );
};

export default Classes;