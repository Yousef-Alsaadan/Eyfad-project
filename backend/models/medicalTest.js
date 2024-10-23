const mongoose = require('mongoose');



const analysisSchema = new mongoose.Schema({
    analysisName: { type: String, required: true },
    result: { type: Number, required: true },
    unit: { type: String, required: true },
    isNormal: { type: Boolean, required: true },
  referenceRange: {
    min: { type: Number, required: true },
    max: { type: Number, required: true }
  },
  symptoms: {
    high: { type: String },
    low: { type: String }
},
management: {
    high: { type: String },
    low: { type: String }
  },
  recommendations: { type: String },
  description: {type: String}
});

const medicalTestSchema = new mongoose.Schema({
  testName: { type: String, required: true },
  testDate: { type: String, required: true },
  analyses: [analysisSchema],
 
});

const medicalTest = mongoose.model('MedicalTest', medicalTestSchema);

module.exports = medicalTest;
