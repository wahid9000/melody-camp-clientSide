
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="my-24">
            <div className="mx-auto text-center">
                <h3 className="text-4xl uppercase font-bold">{heading}</h3>
                <p className="text-lg font-semibold mt-3">{subHeading}</p>
                <div className="divider w-56 mx-auto my-10"></div>
            </div>
        </div>
    );
};

export default SectionTitle;