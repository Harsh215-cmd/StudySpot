import mongoose from "mongoose";

const ExploreSchema = new mongoose.Schema({
  MaterialPdf: {
    data: {
      type: mongoose.Schema.Types.Buffer,
      required: true
    },
    contentType: {
      type: String,
      required: true
    }
  },
  MaterialTitle: {
    type: String,
    required: true
  },
  MaterialDescription: {
    type: String,
    required: true
  },
  MaterialBranch: {
    type: String,
    required: true
  },
  MaterialYear: {
    type: String,
    required: true
  }
});

const ExploreModel = mongoose.model("explore", ExploreSchema);
export default ExploreModel;
