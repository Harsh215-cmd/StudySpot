import LibraryModel from "../Model/LibraryModel.js";


const AddBook = async (req, res) => {
    try {
        const { BookName, Branch, Year } = req.body;

        const ExistingBook = await LibraryModel.findOne({ BookName });
        if (ExistingBook) {
            return res.status(400).json({
                success: false,
                message: "Book already exists"
            });
        }

        const Book = new LibraryModel({ BookPdf: { data: req.file.buffer, contentType: req.file.mimetype }, BookName, Branch, Year });
        await Book.save();

        res.status(200).json({
            success: true,
            message: "Book added successfully",
            data: Book
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};

const getBook = async (req, res) => {
    try {
        const booklist = await LibraryModel.find();
        res.status(200).json({
            success: true,
            message: "all books here",
            data: booklist
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "something Wrong",
            error: error.message
        })
    }
}

const downLodePdf = async (req, res) => {
    try {
        const bookPdf = await LibraryModel.findById(req.params.id);
        if (!bookPdf) {
            return res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }

        const buffer = Buffer.from(bookPdf.BookPdf.data); // Correct way

        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="${bookPdf.BookName}.pdf"`,
        });

        res.send(buffer);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
        });
    }
};



export { AddBook, getBook, downLodePdf };
