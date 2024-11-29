import { useSelector } from "react-redux";
import "../styles/drop-down.min.css";

export function DropDownMenu({ onSelectCategory }) {
  const accounts = useSelector((state) => state.acc.accounts);

  const allAccounts = Object.values(accounts[0]);
  const transactions = allAccounts.flatMap(
    (account) => account.transactions || []
  );

  const categories = [
    ...new Set(
      transactions.map((transaction) => transaction.transactionCategory)
    ),
  ];
  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    onSelectCategory(selectedCategory);
  };

  return (
    <div className="container-category">
      <select
        className="category"
        onChange={handleChange}
      >
        {categories.map((category, index) => (
          <option
            key={index}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
