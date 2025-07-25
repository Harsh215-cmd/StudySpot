import mongoose from "mongoose";

const Libraryschema = mongoose.Schema({
    BookPdf: {
        data: Buffer,
        contentType: {
            type: String,
            required: true
        }

    },
    BookName: {
        type: String,
        required: true
    },
    Branch: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true
    }

})

const LibraryModel = mongoose.model("library", Libraryschema);
export default LibraryModel;
