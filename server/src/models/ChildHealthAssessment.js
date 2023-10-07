import mongoose from "mongoose";

const ChildHealthAssessmentSchema = new mongoose.Schema({
    findings: { type: String },
    notes: { type: String },
    serviceProvider: { type: String }
},{
    timestamps: true
})

export const ChildHealthAssessmentModel = mongoose.model("child_health_assessments", ChildHealthAssessmentSchema);