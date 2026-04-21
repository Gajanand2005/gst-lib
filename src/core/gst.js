function calculateGst(amount,gstRate) {
    if(amount < 0 || gstRate <0){
        throw new Error("Amount and gstRate should be non-negative");
    }

    const gstAmount = (amount * gstRate)/100;

    return  {
        amount,
        gstRate,
        cgst: gstAmount/2,
        sgst: gstAmount/2,
        totalAmount: amount + gstAmount
    }
    
}

module.exports = { calculateGST: calculateGst };