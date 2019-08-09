import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Papa from "papaparse"
import findMates from "../findmate";

const comparingLevels = [
  {
      label: 'level-1',
      ancestorKeys: ['d11', 's11']
  },
  {
      label: 'level-1,2',
      ancestorKeys: ['d11', 's11', 'd21', 's21', 'd22', 's22']
  },
  {
      label: 'level-1,2,3',
      ancestorKeys: ['d11', 's11', 'd21', 's21', 'd22', 's22', 'd31', 's31', 'd32', 's32', 'd33', 's33', 'd34', 's34']
  }
]

const IndexPage = () => {
  const [data, setData] = useState([])
  const [samples, setSamples] = useState([])
  const [comparingLevel, setLevel] = useState(comparingLevels[0])
  
  const fileSelected = (evt) => {
    const fileReader = new FileReader()

    fileReader.onloadend = (d) => {
      const lines = fileReader.result.split("\n")
      const header = lines[0].toLowerCase()
      const content = lines.slice(1)

      const txt = [header, ...content].join("\n")

      Papa.parse(txt, {
        header: true,
        complete: (results) => {
          setData(results.data)
        }
      })
    }

    const file = evt.target.files[0]
    fileReader.readAsText(file)
  }

  useEffect(() => {
    const _samples = findMates(data, comparingLevel)
    setSamples(_samples)
  }, [data, comparingLevel])

  return <Layout>
    <SEO title="Home" />
    <div style={{paddingBottom: "20px", marginBottom: "20px", borderBottom: "1px solid black"}}>
      <div style={{fontWeight: "bold"}}>
        {/* <label for="file" style={{padding: "5px", border: "2px solid", cursor: "pointer"}}>
          Browse a CSV file
        </label> */}
        <input id="file" type="file"
          onChange={fileSelected}
          accept="text/csv"
          // style={{visibility: "hidden"}}
        />
      </div>
    </div>
    <div style={{ position: "relative", zIndex: 1000 }}>
      <table>
        { samples.length > 0 && <>
          <thead style={{fontWeight: "bold"}}>
            <td width="15%" style={{textAlign: "right"}}>Animal-ID (♂)</td>
            <td width="85%">
              Mating Partners (♀) with <select 
                onChange={(e) => {
                  const i = parseInt(e.target.value)
                  console.log(i)
                  setLevel(comparingLevels[i])
                }}
              >
                {
                  comparingLevels.map( (l, i) => {
                    return <option key={l.label} value={i}>{l.label}</option>
                  })
                }
              </select> common ancestors.
            </td>
          </thead>
            { samples.map( sample => {
                return <tr key={sample.id} style={{ padding: "5px", marginTop: "5px"}}>
                  <td style={{
                      fontWeight: "bold",
                      textAlign: "right",
                    }}
                  >{sample.id}</td>
                  <td style={{}}>
                    <div style={{ paddingLeft: "10px" }}>
                      <div>{sample.mates.length} Partners</div>
                      <ul style={{ padding: 0, margin: 0 }}>
                        {
                          sample.mates.map(m => {
                            return <li key={m.id}
                              style={{
                                fontSize: "0.8em",
                                display: "inline-block",
                                padding: "2.5px",
                                marginLeft: "5px",
                                border: "1px black solid",
                                marginTop: "5px",
                                textAlign: "center",
                                background: "white",
                              }}
                            >{m.id}
                            </li>
                          })
                        }
                      </ul>
                    </div>
                  </td>
                </tr>
              })
            }
          </>
        }

        
      </table>
      <span style={{fontWeight: "bold"}}>
      </span>
    </div>
  </Layout>
}

export default IndexPage
