import Contact from "../model/contact.schema.js";


export const SendMessage = async (req, res) => {

    try {
        const { name, email, subject, message } = req.body;

        const createContact = await new Contact({
            name, email, subject, message
        })

        console.log(createContact)
        await createContact.save();
        res.status(201).json({
            message: "Message Send"
            // contactMsg: {
            //     name, subject, message
            // }
        })

    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}