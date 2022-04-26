import React from 'react'
import data from "./data.json";
import data1 from "./data1.json";
const Sheet = () => {
    const d = data
    const d1 = data1
  return (
    
        <>
        <div>
            {d.map((sheet)=><div key={sheet.sheetNumber}>
                <p>{sheet.sheetNumber}</p>
                <p>{sheet.sheetName}</p>
            </div>)}
        </div>
        <div>
        {d1.map((sheet)=><div key={sheet.sheetNumber}>
                <p>{sheet.sheetNumber}</p>
                <p>{sheet.sheetName}</p>
            </div>)}
        </div>
        </>
    
  )
}

export default Sheet