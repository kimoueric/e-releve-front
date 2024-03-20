import React from "react";

const Modele1 = ({ data }) => {
  const logoUrl = JSON.parse(sessionStorage.getItem("userData"))[0].logo_url;
  console.log(logoUrl);
  console.log(data);
  return (
    <div className="">
      <div className="py-2  flex flex-col justify-center items-center text-sm ">
        <div className="my-2 border border-slate-950  p-2">
          {/* Entete du releve */}
          <div className="flex justify-between py-2">
            {/* Entete du releve (gauche)*/}
            <div className="  ">
              {/* Partie logo et nom de la banque */}
              <div className="flex items-start logo w-[55px]">
                {data.includes("logo") ? (
                  <img src={logoUrl} className="w-100" id="logo-image" />
                ) : (
                  ""
                )}

                <div className="name-bank">
                  {/* <h6 id="nom-banque">BANK OF AFRICA</h6> */}
                </div>
              </div>
              <div className="others">
                <div>
                  {data.includes("agence") ? <span>Agence : </span> : ""}
                  <span className="" id="agence"></span>
                </div>

                <div>
                  {data.includes("siege") ? <span>Siège : </span> : ""}
                  <span className="" id="siege"></span>
                </div>

                <div>
                  {data.includes("IBAN") ? <span>IBAN : </span> : ""}
                  <span className="" id="iban"></span>
                </div>

                <div>
                  {data.includes("BIC") ? <span>BIC : </span> : ""}
                  <span className="" id="bic"></span>
                </div>

                <div>
                  {data.includes("numero compte") ? (
                    <span>Numéro de compte: </span>
                  ) : (
                    ""
                  )}
                  <span className="" id="n-compte"></span>
                </div>

                <div>
                  {data.includes("devise") ? (
                    <span>Devise de compte : </span>
                  ) : (
                    ""
                  )}

                  <span className="" id="devise"></span>
                </div>
                <div>
                  {data.includes("solde") ? (
                    <span>Solde du compte : </span>
                  ) : (
                    ""
                  )}

                  <span className="" id="solde"></span>
                </div>
              </div>
            </div>

            {/* Entete du releve (droit)*/}
            <div className="flex justify-start items-end flex-col">
              {/* <div className="pt-5 mt-3">
                <span>Relevé de compte</span>
                <span className="" id="type-releve"></span>
              </div> */}
              {/* <div>
                <span className="text-xs ">du</span>
                <span id="periode" className="text-xs">
                  {" "}
                </span>
              </div> */}

              <div className="client pt-5 mt-3">
                <div>
                  {data.includes("nom client") ? (
                    <span>Monsieur/Madame</span>
                  ) : (
                    ""
                  )}

                  <span id="nom-client"></span>
                </div>

                <div>
                  {data.includes("adresse client") ? (
                    <span>Adresse : </span>
                  ) : (
                    ""
                  )}

                  <span id="adresse-client"></span>
                </div>

                <div>
                  {data.includes("numero client") ? (
                    <span>Numéro client : </span>
                  ) : (
                    ""
                  )}

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
                    {data.includes("dates") ? (
                      <th className="border border-slate-950">Dates</th>
                    ) : (
                      ""
                    )}

                    {data.includes("operations") ? (
                      <th className="border border-slate-950">Opérations</th>
                    ) : (
                      ""
                    )}

                    {data.includes("debits") ? (
                      <th className="border border-slate-950">Débits</th>
                    ) : (
                      ""
                    )}

                    {data.includes("credits") ? (
                      <th className="border border-slate-950">Crédits</th>
                    ) : (
                      ""
                    )}
                  </tr>
                  {/* <tr className="border border-slate-950">
                    <td
                      colSpan={3}
                      className="text-center border border-slate-950"
                    >
                      <span>Solde précédent</span>
                      <span> au</span>
                      <span id="periode-precedente"></span>
                    </td>
                    <th id="depot-mois-precedent"></th>
                  </tr> */}
                </thead>
                <tbody id="transacBody">
                  <tr></tr>
                </tbody>

                <tfoot>
                  {/* <tr className="border border-slate-950">
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
                  </tr> */}
                  {/* <tr className="border border-slate-950">
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
                  </tr> */}
                </tfoot>
              </table>
            </div>
          </div>
          {/* Fin corps du releve */}
          {/* Bas du releve */}
          <div className="footer mt-3">
            {data.includes("frais bancaire") ? (
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
                ></tbody>
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
            ) : (
              ""
            )}
            <div className="mb-2 text-center">
              <span id="message"> </span>
            </div>
          </div>
          {data.includes("pied du releve") ? (
            <p className="">
              Cette partie concerne le pied du relevé, où l'on peut afficher du
              texte, etc.
            </p>
          ) : (
            ""
          )}

          {/* Bas du releve */}
        </div>
      </div>
    </div>
  );
};

export default Modele1;
