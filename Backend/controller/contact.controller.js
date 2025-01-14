import Contact from "../model/contact.schema.js";


export const getContacts = async (req, res) => {
    try {
        const contacts = Contact.find();
        if (!contacts) return res.status(404).json({ message: "Contact not found" })

        res.status(200).json(contacts)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getContact = async (req, res) => {
    try {
        const id = req.params.id;
        const contact = Contact.findOne({ _id: id });
        if (!contact) return res.status(404).json({ message: "Contact not found" })

        res.status(200).json(contact)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

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
        })

    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}