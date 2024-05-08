// TableRow.js
import React from 'react';

const TableRow = ({ order, onDelete, onConfirm }) => {
  // console.log(order)
    const handleConfirm = (id) => {
        onConfirm(id);
    };

    return (
        <tr>
            <td>
                <button className="btn btn-circle" onClick={() => onDelete(order._id)}>
                    Delete
                </button>
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={order.service_img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{order.costomer_name}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {order.service_title}
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>${order.price}</td>
            <td>
                {order.status === "confirm" ? (
                    <span className='text-green-400'>Confirmed</span>
                ) : (
                    <button className="btn btn-ghost btn-xs" onClick={() => handleConfirm(order._id)}>Confirm</button>
                )}
            </td>
        </tr>
    );
};

export default TableRow;
