# GST Library

A simple Node.js library for calculating GST (Goods and Services Tax) and generating invoices.

## Installation

```bash
npm install gst-lib
```

## Usage

```javascript
const { calculateGST, generateInvoice, createPDFInvoice } = require('gst-lib');

// Calculate GST
const gstResult = calculateGST(1000, 18);
console.log(gstResult); // { amount: 1000, gstRate: 18, cgst: 90, sgst: 90, totalAmount: 1180 }

// Generate Invoice
const items = [
  { name: "Shirt", price: 500, qty: 2 },
  { name: "Shoes", price: 1000, qty: 1 }
];
const invoice = generateInvoice(items, { taxRate: 18, discount: 10 });
console.log(invoice);

// Create PDF Invoice
createPDFInvoice(invoice, "invoice.pdf");
```

## API

### calculateGST(amount, gstRate)

Calculates GST for a given amount and rate.

- `amount`: Number - The base amount
- `gstRate`: Number - The GST rate in percentage
- Returns: Object with amount, gstRate, cgst, sgst, totalAmount

### generateInvoice(items, options)

Generates an invoice from items.

- `items`: Array of objects with name, price, qty
- `options`: Object with taxRate (default 18) and discount (default 0)
- Returns: Invoice object

### createPDFInvoice(data, fileName)

Creates a PDF invoice.

- `data`: Invoice data object
- `fileName`: Output file name (default "invoice.pdf")

## License

MIT