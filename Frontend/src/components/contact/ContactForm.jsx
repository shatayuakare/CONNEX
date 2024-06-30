import toast from "react-hot-toast"
import axios from "axios";
import { useForm } from "react-hook-form"
import { useState } from "react";


const ContactForm = () => {

    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = async (data) => {
        const contactData = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
        }

        setLoading(true)
        await axios.post("https://codersocietyserver.onrender.com/contact", contactData).then((res) => {
            setLoading(false)
            console.log(res.data)
            toast.success("Message Send");

            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }).catch((err) => {
            setLoading(false)
            toast.error(err.response.data.message)
        })
    };

    return (
        <div className="p-5 bg-white shadow-md ">

            <h5 className="text-center text-5xl text-slate-600 font-bold my-4">Send Your Message</h5>
            <form className="md:w-1/2 mx-auto" action="" onSubmit={handleSubmit(onSubmit)}>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-6">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"
                            placeholder="😁 Full name..."
                            {...register("name", { required: { value: true, message: "Name is Required field" } })}
                        />

                        <div className="msg">
                            {errors.name && <span>{errors.name.message}</span>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="email" id="email"
                            placeholder="📧 Email address..."
                            {...register("email", { required: "Email address is Required field" })}
                        />
                        <div className="msg">
                            {errors.email && <span>{errors.email.message}</span>}
                        </div>
                    </div>
                </div>
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" id="subject"
                    placeholder="🤔 Subject..."
                    {...register("subject", { required: "Subject is required field" })}
                />
                <div className="msg">
                    {errors.subject && <span>{errors.subject.message}</span>}
                </div>

                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"
                    placeholder="✍️ Message..."
                    {...register("message", { required: "Message is required field" })}
                />
                <div className="msg">
                    {errors.message && <span>{errors.message.message}</span>}
                </div>

                <button className="btn mx-auto btn-normal hover:shadow px-6 text-xl mt-8">
                    {
                        loading && <span className="loading loading-spinner"></span>
                    }
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default ContactForm