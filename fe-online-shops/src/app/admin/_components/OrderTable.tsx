"use client";
import { useState } from "react";

const statusOptions = ["PENDING", "DELIVERED", "CANCELLED"];

export default function OrderTable() {
  // Placeholder data
  const [orders, setOrders] = useState<any[]>([]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      <table className="w-full border text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Order ID</th>
            <th className="p-2">Customer</th>
            <th className="p-2">Total</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr><td colSpan={5} className="p-4 text-center">No orders yet.</td></tr>
          ) : (
            orders.map((order, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2">{order._id}</td>
                <td className="p-2">{order.customerName}</td>
                <td className="p-2">{order.totalPrice}</td>
                <td className="p-2">
                  <select className="border rounded px-2 py-1">
                    {statusOptions.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </td>
                <td className="p-2">
                  <button className="bg-blue-600 text-white px-2 py-1 rounded">Update</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
} 