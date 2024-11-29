export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const ACCOUNT_USER = "ACCOUNT_USER";

export const getUser = () => {
  return async (dispatch, getState) => {
    try {
      const token = getState().auth.accessToken;

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      if (data && data.body) {
        dispatch({ type: GET_USER, payload: data.body });
      } else {
        throw new Error("Données utilisateur invalides");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateUser = (userName) => async (dispatch, getState) => {
  const token = getState().auth.accessToken;
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userName }),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la mise à jour du profil utilisateur");
  }
  const data = await response.json();

  dispatch({ type: UPDATE_USER, payload: data.body });
};

export const getAccounts = () => async (dispatch, getState) => {
  try {
    const token = getState().auth.accessToken;

    const response = await fetch("http://localhost:3001/api/v1/accounts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Erreur du serveur : ${response.statusText}`);
    }
    const data = await response.json();

    dispatch({
      type: ACCOUNT_USER,
      payload: data,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des comptes:", error);
  }
};

export const updateAccountNote =
  (transactionNote, transaction_id, transactionCategory) =>
  async (dispatch, getState) => {
    const token = getState().auth.accessToken;

    const response = await fetch(
      "http://localhost:3001/api/v1/transactions/update-note",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          transaction_id,
          transactionNote,
          transactionCategory,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la mise à jour transactrionNote");
    }
    const data = await response.json();
    console.log("====>", [data.body]);

    dispatch({
      type: ACCOUNT_USER,
      payload: [data.body],
    });
  };
