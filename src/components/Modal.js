import React, { useState } from "react";
import { pokeAPi } from "../configs/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Modal({ name, id }) {
  const [NewName, setName] = useState("");
  const [rename, setRename] = useState("");

  const notify = (rename) => toast(rename);

  const renamePokemon = async (NewName, id) => {
    const payload = {
      newName: NewName,
      pokemon_id: id,
    };
    console.log(payload);
    try {
      let { data } = await pokeAPi.put(`/rename`, payload);
      console.log(data);
      if (data.status === "00") {
        console.log("success rename");
        setRename("Success Rename");
        notify(rename);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ToastContainer />
      {/* Modal */}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                {name}
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body relative p-4">
              <form>
                <label>
                  Rename Pokemon:
                  <input
                    className="px-4 mx-4 outline outline-offset-2 outline-yellow"
                    type="text"
                    name="name"
                    placeholder="rename pokemon..."
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
              </form>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <a
                type="button"
                className="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                href={"/detail/" + id}
              >
                Detail
              </a>
              <button
                type="button"
                className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1"
                onClick={() => {
                  renamePokemon(NewName, id);
                  window.location.reload(false);
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
