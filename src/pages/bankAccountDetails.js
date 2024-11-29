import { Collapse } from "../components";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function BankAccountDetail() {
  const { accountId } = useParams();
  const navigate = useNavigate();
  const accounts = useSelector((state) => state.acc?.accounts);
  const account = accounts[0]?.[accountId];

  const handleClick = () => {
    navigate("/Account");
  };

  return (
    <div>
      {account ? (
        <>
          <div className="account-window entries-anim">
            <div className="account-info">
              <p>Argent Bank ({account?.accountDetails?.accountNumber})</p>
              <p className="text-account">
                $ {account?.accountDetails?.accountBalance}
              </p>
              <p>{account?.transactions?.length} Available Balance</p>
            </div>
            <div
              className="container-chevron"
              onClick={handleClick}
            >
              <span className={"fa-solid fa-xmark"}></span>
            </div>
          </div>
          <div className="container">
            <div className="container-p">
              <p>Date</p>
              <p>Description</p>
              <p className="amount">Amount</p>
              <p>Balance</p>
              <p></p>
            </div>
          </div>
          <div className="container-page-collapse callapse-anim">
            {account.transactions?.length > 0 ? (
              account.transactions.map((transaction, index) => (
                <Collapse
                  key={index}
                  id={`collapse${index + 1}`}
                  transaction={transaction}
                  transaction_id={transaction._id}
                />
              ))
            ) : (
              <p>Aucune transaction disponible.</p>
            )}
          </div>
        </>
      ) : (
        <p>Aucun compte trouvé</p>
      )}
    </div>
  );
}
