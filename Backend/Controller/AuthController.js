import AuthModel from "../Model/AuthModel.js";

const Register = async (req, res) => {
    try {
        const { StudentName, StudentNumber, StudentMail, StudentPass } = req.body;

        const ExistingMail = await AuthModel.findOne({ StudentMail });
        if (ExistingMail) {
            return res.status(400).json({
                success: false,
                message: "User already registered with this email",
            });
        }

        const StudentInfo = new AuthModel({ StudentName, StudentNumber, StudentMail, StudentPass });
        await StudentInfo.save();

        console.log("User Registered Successfully");

        res.status(200).json({
            success: true,
            message: "Student registered",
            data: StudentInfo
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
        });
    }
};

const LogIn = async (req, res) => {
    try {
        const { StudentMail, StudentPass } = req.body;

        const EnteredMail = await AuthModel.findOne({ StudentMail });
        if (!EnteredMail) {
            res.status(400).json({
                success: false,
                message: "User Not Found",
                error: error.message
            })
        }
        if (EnteredMail.StudentPass !== StudentPass) {
            res.status(400).json({
                success: false,
                message: "Email or PassWord is Wrong",
                error: error.message
            })
        }
        res.status(200).json({
            success: true,
            message: "Log-in Successfully",
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something Gone Wrong :",
            error: error.message
        })
    }
}

const ViewStudent = async (req, res) => {
    try {
        const StudentList = await AuthModel.find();
        res.status(200).json({
            success: true,
            message: "all Students List",
            data: StudentList
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something Wrong",
            error: error.message
        })
    }
}

const RemoveStudent = async (req, res) => {
    try {
        const { id } = req.params; 

        const delStudent = await AuthModel.findByIdAndDelete(id); // ✅ add await

        if (!delStudent) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Student removed",
            data: delStudent,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
        });
    }
};


export { Register, LogIn, ViewStudent, RemoveStudent };
