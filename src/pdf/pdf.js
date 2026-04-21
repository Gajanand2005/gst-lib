const PDFDocument = require("pdfkit");
const fs = require("fs");

function createPDFInvoice(data, fileName = "invoice.pdf") {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(fileName));

    doc.text("GST Invoice", { align: "center" });
    doc.moveDown();

    data.items.forEach(item => {
        doc.text(`${item.name} - ₹${item.price} x ${item.qty}`);
    });

    doc.moveDown();
    doc.text(`Total: ₹${data.total}`);

    doc.end();

    return fileName;
}

module.exports = { createPDFInvoice };