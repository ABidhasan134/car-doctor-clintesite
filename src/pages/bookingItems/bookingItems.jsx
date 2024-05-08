// BookingItems.js
import React, { useContext, useEffect, useState } from "react";
import { Authcoxtext } from "../../context/authProvider";
import TableRow from "./tableRow.jsx";
import axios from "axios";

const BookingItems = () => {
  const { user, loading } = useContext(Authcoxtext);
  const [orders, setOrders] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    axios.get(url,{withCredentials:true})
    .then(res=>{
      setOrders(res.data)
    })
    // fetch(url,{withCredentials:true})
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setOrders(data);
    //   });
  }, [url]);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = orders.filter((item) => item._id !== _id);
          setOrders(remaining);
        }
      });
  };

  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const updatedOrders = orders.map((order) => {
            if (order._id === id) {
              return { ...order, status: "confirm" };
            }
            return order;
          });
          setOrders(updatedOrders);
        }
      });
  };
  if (loading) {
    return;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <TableRow
              key={order._id}
              order={order}
              onDelete={handleDelete}
              onConfirm={handleConfirm}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default BookingItems;
