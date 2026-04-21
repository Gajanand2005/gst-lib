const {generateInvoice,calculateGST,createPDFInvoice} = require('../src');

const items = [
  { name: "Shirt", price: 500, qty: 2 },
  { name: "Shoes", price: 1000, qty: 1 }
];

// GST check
console.log(calculateGST(1000, 18));

// Invoice check
const invoice = generateInvoice(items, { taxRate: 18, discount: 10 });
console.log(invoice);

// PDF check
createPDFInvoice(invoice, "testInvoice.pdf");