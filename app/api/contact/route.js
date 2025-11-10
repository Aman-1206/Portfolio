import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";
export async function POST(request) {
    try {
        const { name, email, message } = await request.json();
        await connectDB()
        // await Contact.collection.dropIndex("email_1");

        const newContact = new Contact({ name, email, message });
        await newContact.save();

        return NextResponse.json({ message: "Message sent successfully!" }, { success: true }, { status: 200 });
    } catch (error) {
        console.error("Error saving contact message:", error);
        return NextResponse.json({ message: "Failed to send message." }, { success: false }, { status: 500 });
    }
}
