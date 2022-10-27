import Navbar from "../Common/Navbar";
import style from "./style";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const ListOfRecording = () => {
  const [listR, setListR] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/dataapi/listOfRecordings").then((res) => {
      setListR(res.data);
    });
  }, [listR]);
  console.log(listR);
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <div className="flex justify-between items-center">
          <h1 className={style.heading}>List of Recording</h1>
          <input className={style.input} placeholder="Search by Id,Date ..." />
        </div>
        <div className={style.tableContainer}>
          {/* header of the table */}

          <div className={style.headerRow}>
            <div className="w-40 text-orange-600 font-semibold">
              Uploading Date
            </div>
            <div className="w-40 text-orange-600 font-semibold ">ID</div>
            <div className="w-44 text-orange-600 font-semibold">Status</div>

            <div className="w-28 text-orange-600 font-semibold">Action</div>
          </div>
          <div className={style.table}>
            {/* body of the table */}
            <div>
              {listR.map((list) => {
                return (
                  <div className={style.bodyRow} key={list.Id}>
                    {/* <div className="w-40 ">{list._id["$oid"].slice(5)}</div> */}
                    {<div className="w-40 ">{list.info.time_stamp}</div> }
                    {<div className="w-40 ">{list.id.slice(0,15)}</div>}
                    {/* <div className="w-40">{list.name}</div> */}
                    {/* {<div className="w-44">{list.info.dont_know}</div>} */}
                    {<div className="w-44">Not Parkinson</div>}

                    <div className="w-28 space-x-2">
                      <button className={style.tableButton}>Select</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListOfRecording;
