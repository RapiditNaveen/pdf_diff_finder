const express = require("express");
const router = express.Router();
const resModel = require("../middleware/responseModel");
const pdfjsLib = require("pdfjs-dist");
const diff = require("diff");

//routes
router.post("/api/comparePdfFiles", comparePdfFiles);

async function comparePdfFiles(req, res) {
  const orginalFile = req.files.orginal;
  const targetFile = req.files.target;
  await orginalFile.mv(`data/actual/orginal.pdf`);
  await targetFile.mv(`data/baseline/target.pdf`);

  const file1 = "data/actual/orginal.pdf";
  const file2 = "data/baseline/target.pdf";

  const textInOriginal = await getText(file1);
  const textInTarget = await getText(file2);

  const differences = diff.diffChars(textInOriginal, textInTarget);

  const data = {
    textInOriginal,
    textInTarget,
    differences
  };

  const res_arr = resModel.sendResponse(data, "pdf compared successfully");
  res.send(res_arr);
}

async function getText(file) {
  const loadingTask = pdfjsLib.getDocument(file);

  // Wait for the PDF to be loaded
  const pdf = await loadingTask.promise;

  // Get the first page of the PDF
  const pageNumber = 1;
  const page = await pdf.getPage(pageNumber);
  
  // Extract text from the PDF page
  const content = await page.getTextContent();

  // Convert the content to a string
  const text = content.items.map((item) => item.str).join("");

  loadingTask.promise.catch((error) => {
    console.error("Error loading PDF:", error);
  });

  page.getTextContent().catch((error) => {
    console.error("Error extracting text from PDF page:", error);
  });

  return text;
}

module.exports = router;
