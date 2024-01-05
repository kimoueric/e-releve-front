import React from "react";

const Modele1 = ({ startSending }) => {
  return (
    <div>
      <div className="py-2 flex flex-col justify-center items-center text-sm ">
        <div className="my-2 border border-slate-950 w-[820px] p-2">
          {/* Entete du releve */}
          <div className="flex justify-between py-2">
            {/* Entete du releve (gauche)*/}
            <div className="  ">
              {/* Partie logo et nom de la banque */}
              <div className="flex items-start logo">
                <img src="./assets/boa.jpeg" className="w-50" id="logo-image" />
                <div className="name-bank">
                  {/* <h6 id="nom-banque">BANK OF AFRICA</h6> */}
                </div>
              </div>
              <div className="others">
                <div>
                  <span className="">Agence : </span>
                  <span className="" id="agence"></span>
                </div>

                <div>
                  <span>Siège : </span>
                  <span className="" id="siege"></span>
                </div>

                <div>
                  <span>IBAN : </span>
                  <span className="" id="iban"></span>
                </div>

                <div>
                  <span>BIC : </span>
                  <span className="" id="bic"></span>
                </div>

                <div>
                  <span>Numéro de compte: </span>
                  <span className="" id="n-compte"></span>
                </div>

                <div>
                  <span>Devise de compte : </span>
                  <span className="" id="devise"></span>
                </div>
              </div>
            </div>

            {/* Entete du releve (droit)*/}
            <div className="flex justify-start items-end flex-col">
              <div className="pt-5 mt-3">
                <span>Relevé de compte</span>
                <span className="" id="type-releve"></span>
              </div>
              <div>
                <span className="text-xs ">du</span>
                <span id="periode" className="text-xs">
                  {" "}
                </span>
              </div>

              <div className="client pt-5 mt-3">
                <div>
                  <span>Monsieur/Madame</span>
                  <span id="nom-client"></span>
                </div>

                <div>
                  <span>Adresse : </span>
                  <span id="adresse-client"></span>
                </div>

                <div>
                  <span>Numéro client : </span>
                  <span id="numero-client"></span>
                </div>
              </div>
            </div>
          </div>
          {/* Fin entete du releve */}

          {/* Corps du releve */}
          <div className="body mt-3">
            <div>
              <table className="table-auto text-center  w-full border-collapse border border-slate-950">
                <thead>
                  <tr>
                    <th className="border border-slate-950">Dates</th>
                    <th className="border border-slate-950">Opérations</th>
                    <th className="border border-slate-950">Débits</th>
                    <th className="border border-slate-950">Crédits</th>
                  </tr>
                  <tr className="border border-slate-950">
                    <td
                      colSpan={3}
                      className="text-center border border-slate-950"
                    >
                      <span>Solde précédent</span>
                      <span> au</span>
                      <span id="periode-precedente"></span>
                    </td>
                    <th id="depot-mois-precedent"></th>
                  </tr>
                </thead>
                <tbody id="transacBody">
                  <tr></tr>
                </tbody>

                <tfoot>
                  <tr className="border border-slate-950">
                    <td
                      colSpan={2}
                      className="text-start border border-slate-950"
                    >
                      Total des opérations
                    </td>
                    <th
                      className="text-center border border-slate-950"
                      id="total-debit"
                    ></th>
                    <th
                      className="text-center border border-slate-950"
                      id="total-credit"
                    ></th>
                  </tr>
                  <tr className="border border-slate-950">
                    <td
                      colSpan={2}
                      className="text-start border border-slate-950"
                    >
                      <span>Solde final</span>
                      <span id="periode-echeante"></span>
                    </td>
                    <th
                      className="text-center border border-slate-950"
                      id="solde-final"
                      colSpan={2}
                    ></th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          {/* Fin corps du releve */}

          {/* Bas du releve */}
          <div className="footer mt-3">
            <table className="table-auto border border-slate-950 w-full">
              <thead>
                <tr className="border border-slate-950">
                  <td colSpan={4} className="border border-slate-950">
                    Informations préalables sur les frais bancaire
                  </td>
                  <th
                    className="text-center border border-slate-950"
                    colSpan={1}
                  >
                    montant
                  </th>
                </tr>
              </thead>
              <tbody
                id="tbodyFrais"
                className="border border-slate-950 table-auto w-full "
              >
                {/* <tr>
                  <td colSpan={4}>Frais de garde </td>
                  <td
                    colSpan={1}
                    className="text-center border border-slate-950"
                  >
                    2500
                  </td>
                </tr> */}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4}>Total</td>
                  <th
                    colSpan={1}
                    className="text-center border border-slate-950"
                    id="total-frais"
                  ></th>
                </tr>
              </tfoot>
            </table>
            <div className="mb-2 text-center">
              <span id="message"> </span>
            </div>
          </div>

          {/* Bas du releve */}
        </div>
        <div className="flex justify-end  w-[820px]">
          <button
            className="bg-indigo-950 p-2 w-44 rounded-2xl text-white"
            onClick={startSending}
          >
            Creer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modele1;
