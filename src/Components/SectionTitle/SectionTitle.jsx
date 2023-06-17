import { Fade } from "react-awesome-reveal";

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mt-16 md:mt-28">
            <div className="text-center w-full">

                <Fade direction="up" delay={10}>
                <h3 className="text-4xl  font-primary md:text-5xl uppercase font-bold">{heading}</h3>
                    <p className="text-slate-600 text-lg font-secondary font-semibold mt-3">{subHeading}</p>
                </Fade>

                <div className="divider w-60 mx-auto my-10"></div>
            </div>
        </div>
    );
};

export default SectionTitle;