import { Fade } from "react-awesome-reveal";

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mt-32">
            <div className="mx-auto text-center w-11/12 md:w-full">

                <Fade direction="up" delay={10} cascade damping={1e-1}>
                <h3 className="text-5xl uppercase font-bold">{heading}</h3>
                    <p className="text-lg font-semibold mt-3">{subHeading}</p>
                </Fade>

                <div className="divider w-60 mx-auto my-10"></div>
            </div>
        </div>
    );
};

export default SectionTitle;