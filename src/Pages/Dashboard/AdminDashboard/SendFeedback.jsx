import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SendFeedback = () => {
    const classes = useLoaderData();
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        const adminFeedback = {feedback};

        fetch(`https://musical-server.vercel.app/admin/manageClasses/feedback/${classes._id}`, {
            method: "PATCH",
            headers: {
                "content-type" : "application/json",
            },
            body: JSON.stringify(adminFeedback)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                navigate('/dashboard/manageClasses')
                Swal.fire({
                    title: 'Feedback Sent',
                    text: 'Feedback has been sent to the Instructor',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
            }
        })
    }

    return (
        <div>
            <h2 className="text-3xl font-bold">Send Feedback To Instructor : {classes?.instructor_name}</h2>

            <div>
                <form onSubmit={handleSubmit}  className="mt-10">
                    <div className="form-control">
                    <textarea name="feedback" className="textarea w-1/2 h-48 textarea-bordered" placeholder="Write necessary feedback ..."></textarea>
                    </div>
                    <div>
                        <button className="btn btn-info text-white font-bold mt-3">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SendFeedback;