import React, { Children, useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcoxtext } from "../../context/authProvider";

import Swal from "sweetalert2";

const ChackOut = () => {
  const { user, loading } = useContext(Authcoxtext);
  // console.log(user);
  const service  = useLoaderData();
  // console.log(service);
  // const [data,setData]=useState([])

  const handelBooking = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const date = e.target.date.value;
    const amount = e.target.amount.value;
    // console.log(name,email,date,amount)
    const order = {
      costomer_name: name,
      email: email,
      service_title: service.title,
      service_img: service.img,
      service_id: service._id,
      price: amount,
      service_date: date,
    };
    // console.log(order)
    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.insertedId) {
          Swal.fire({
            title: "Booking for service",
            showClass: {
              popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
            },
            hideClass: {
              popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
            },
          });
        }

        console.log(data);
      });
  };
  if (loading) {
    return;
  }

  return (
    <div>
      <form className="card-body" onSubmit={handelBooking}>
{/* name and email section */}
<div className="flex gap-2 justify-center">
  {/* name section */}
  <div className="w-[50%]">
    <span>Name</span>
    <input
      type="text"
      defaultValue={user.displayeName}
      name="name"
      placeholder="Enter your name"
      className=" mt-2 input input-bordered input-accent w-full"
      required
    />
  </div>
  {/* email section */}
  <div className="w-[50%]">
    <span>Your email</span>
    <input
      type="email"
      defaultValue={user.email}
      name="email"
      placeholder="email"
      className=" mt-2 input input-bordered input-accent w-full"
      required
      />
  </div>
</div>
{/* date and due section */}
<div className="flex gap-2 justify-center">
  {/* date section */}
  <div className="w-[50%]">
    <span>Service Date</span>
    <input
      type="date"
      defaultValue={user.email}
      name="date"
      placeholder="Enter service date"
      className=" mt-2 input input-bordered input-accent w-full"
      required
    />
  </div>
  {/* email section */}
  <div className="w-[50%]">
    <span>Due amount</span>
    <input
      type="amount"
      defaultValue={service.price}
      name="amount"
      placeholder="Due amount"
      className=" mt-2 input input-bordered input-accent w-full"
      required
    />
  </div>
</div>
<button className="btn">Order</button>
</form>
    </div>
  );
};

export default ChackOut;
