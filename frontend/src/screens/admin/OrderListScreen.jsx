import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { FaTimes } from "react-icons/fa";
import { useGetOrdersQuery } from "../../slices/ordersApiSlice";
import Meta from "../../components/Meta";

const OrderListScreen = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();

  return (
    <>
      <Meta title="Orders List" />
      <h2>Orders</h2>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.message}
        </Message>
      ) : (
        <Table striped hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Delivered</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>Rs {order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <FaTimes style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <FaTimes style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  <Button
                    as={Link}
                    to={`/order/${order._id}`}
                    className="btn-sm"
                    variant="light"
                  >
                    Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrderListScreen;
