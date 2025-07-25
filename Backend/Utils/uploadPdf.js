import multer from "multer";

// Use memory storage (you can switch to disk storage if needed)
const storage = multer.memoryStorage();

// Corrected middleware
const uploadPdf = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "application/pdf") {
            cb(null, true);
        } else {
            // ❌ Fix: 'error' should be 'Error' (capital E)
            cb(new Error("Only PDF files are allowed"), false);
        }
    },
    limits: {
        fileSize: 5 * 1024 * 1024 // Optional: limit file size to 5MB
    }
});

export default uploadPdf;
