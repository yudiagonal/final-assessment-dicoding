// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}
// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: items.reduce((total, item) => total + item.price, 0), // Menghitung total harga
    status: 'Menunggu'
  };
  orders.push(newOrder);
}

// TODO: selesaikan fungsi updateOrderStatusnan
function updateOrderStatus(orderId, status) {
  const order = orders.find(order => order.id === orderId); // Mencari pesanan berdasarkan ID
  if (order) {
    order.status = status; // Memperbarui status
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai') // Memfilter pesanan yang selesai
    .reduce((total, order) => total + order.totalPrice, 0); // Menghitung total pendapatan
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id); // Menghapus pesanan berdasarkan ID
}

// Mengekspor variabel dan fungsi
export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
