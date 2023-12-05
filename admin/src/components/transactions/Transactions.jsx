import "./transactions.css";

const Transactions = () => {
  return (
    <div className="transaction-container">
      <h2 className="title">Latest Transactions</h2>
      <table className="table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="user">
                {/* <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="userImage}
                /> */}
                John Doe
              </div>
            </td>
            <td>
              <span className="status pending">Pending</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className="user">
                {/* <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="userImage}
                /> */}
                John Doe
              </div>
            </td>
            <td>
              <span className="status done">Done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className="user">
                {/* <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="userImage}
                /> */}
                John Doe
              </div>
            </td>
            <td>
              <span className="status cancelled">Cancelled</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className="user">
                {/* <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="userImage}
                /> */}
                John Doe
              </div>
            </td>
            <td>
              <span className="status pending">Pending</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className="user">
                {/* <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="userImage}
                /> */}
                John Doe
              </div>
            </td>
            <td>
              <span className="status pending">Pending</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
