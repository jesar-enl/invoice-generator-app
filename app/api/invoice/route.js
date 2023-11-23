import { NextResponse } from 'next/server';
import db from '../../libs/db';

export async function POST(request) {
  try {
    const { invoiceData, tableData } = await request.json();

    // create the invoice
    const invoice = await db.invoice.create({
      data: {
        companyName: invoiceData.companyName,
        author: invoiceData.author,
        companyAddress: invoiceData.companyAddress,
        companyCity: invoiceData.companyCity,
        companyCountry: invoiceData.companyCountry,
        clientName: invoiceData.clientName,
        clientAddress: invoiceData.clientAddress,
        invoiceNumber: invoiceData.invoiceNumber,
        billDate: `${invoiceData.billDate}T00:00:00Z`,
        dueDate: `${invoiceData.dueDate}T00:00:00Z`,
        logoUrl: invoiceData.logoUrl,
      },
    });

    // create the table
    const table = tableData.map(async (rowData) => {
      const row = await db.rowData.create({
        data: {
          invoiceId: invoice.id,
          desc: parseFloat(rowData.desc),
          qty: parseFloat(rowData.qty),
          rate: parseFloat(rowData.rate),
          tax: parseFloat(rowData.tax),
          amount: parseFloat(rowData.amount),
        },
      });

      return row;
    });

    // use Promise.all() to await all creation promises.
    const rows = await Promise.all(table);

    const data = { invoice, rows };

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { stauts: 500 });
  }
}

export async function GET(request) {
  try {
    const invoices = await db.invoice.findMany({
      include: {
        tableData: true,
      },
    });

    return NextResponse.json(invoices);
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Failed to load invoices',
        error,
      },
      { status: 500 }
    );
  }
}
