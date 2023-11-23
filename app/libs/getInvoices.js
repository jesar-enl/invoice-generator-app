export async function getInvoices() {
  const response = await fetch('http://localhost:3000/api/invoice', {
    cache: 'no-store',
  });
  const invoices = await response.json();

  return invoices;
}
