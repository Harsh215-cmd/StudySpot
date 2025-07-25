import ClassFormModel from "../Model/ClassFormModel.js";
import ClassroomModel from "../Model/ClassroomModel.js"

const CreateClass = async (req, res) => {
    try {
        const { Branch, Year, Subject, Pass } = req.body;

        // Check if class already exists
        const existingClass = await ClassroomModel.findOne({ Branch, Year, Subject, Pass });

        if (existingClass) {
            return res.status(400).json({
                success: false,
                message: "Class already exists"
            });
        }

        // Create new class
        const classInfo = new ClassroomModel({ Branch, Year, Subject, Pass });
        await classInfo.save();

        res.status(200).json({
            success: true,
            message: "Class created successfully",
            data: classInfo
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        });
    }
}

const ViewClass = async (req, res) => {
    try {
        const classList = await ClassroomModel.find();
        res.status(200).json({
            success: true,
            message: "all Classroom List",
            data: classList
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something Wrong",
            error: error.message
        })
    }
}

const classData = async (req, res) => {
    try {
        const { Classidentity, ClassHeading, ClassLink } = req.body;

        const existingClass = await ClassFormModel.findOne({ Classidentity });

        if (existingClass) {
            return res.status(400).json({
                success: false,
                message: "Class already exists"
            });
        }

        const info = new ClassFormModel({ Classidentity, ClassHeading, ClassLink });
        await info.save();

        res.status(200).json({
            success: true,
            message: "Classroom data saved",
            data: info
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error saving classroom data",
            error: error.message
        });
    }
};


const viewClassData = async (req, res) => {
    try {

        const viewInfo = await ClassFormModel.find();

        if (!viewInfo) {
            return res.status(404).json({
                success: false,
                message: "Class not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Data retrieved successfully",
            data: viewInfo
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error retrieving data",
            error: error.message
        });
    }
};

const SingleEntry = async (req, res) => {
    try {
        const pass = await ClassroomModel.findOne(); // ✅ Await the result
        const password = pass?._id; // Optional chaining in case no data found

        if (!password) {
            return res.status(404).json({
                success: false,
                message: "No classroom found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Classroom ID fetched",
            data: pass
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        });
    }

}

const RemoveClassRoom = async (req, res) => {
    try {
        const { id } = req.params; 

        const delclassroom = await ClassroomModel.findByIdAndDelete(id); 

        if (!delclassroom) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "ClassRoom removed",
            data: delclassroom,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
        });
    }
};

export { CreateClass, ViewClass, classData, viewClassData, SingleEntry ,RemoveClassRoom};
