import ExploreModel from "../Model/ExploreModel.js";


const addMaterial = async (req, res) => {
    try {
        const { MaterialTitle, MaterialDescription, MaterialBranch, MaterialYear } = req.body;

        const material = new ExploreModel({
            MaterialPdf: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            },
            MaterialTitle,
            MaterialDescription,
            MaterialBranch,
            MaterialYear
        });

        await material.save();

        res.status(200).json({
            success: true,
            message: "Material Added",
            data: material
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something Went Wrong",
            error: error.message
        });
    }
};


const ViewMaterial = async (req, res) => {
    try {
        const materiallist = await ExploreModel.find();
        res.status(200).json({
            success: true,
            message: "all Matrial List",
            data: materiallist
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something Wrong",
            error: error.message
        })
    }
}

   const DownlodeNote = async (req, res) => {
  try {
    const material = await ExploreModel.findById(req.params.id);
    if (!material || !material.MaterialPdf || !material.MaterialPdf.data) {
      return res.status(404).json({
        success: false,
        message: "PDF not found"
      });
    }

    res.set({
      'Content-Type': material.MaterialPdf.contentType || 'application/pdf',
      'Content-Disposition': `attachment; filename="${material.MaterialTitle || 'document'}.pdf"`,
    });

    res.send(material.MaterialPdf.data); // Send raw buffer

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message
    });
  }
};


export { addMaterial, ViewMaterial, DownlodeNote }