import React from "react";

export function Mint({ mint }) {
  return (
    <div>
      <h4>Mint Gether Tokens</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);
          const amount = formData.get("amount");

          if (amount) {
            mint(amount);
          }
        }}
      >
        <div className="form-group">
          <label>Amount of Gether tokens</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="amount"
            placeholder="1"
            required
          />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Mint" />
        </div>
      </form>
    </div>
  );
}
