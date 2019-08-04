import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Papa from "papaparse"
import findMates from "../findmate";

import logo from "../images/logo.svg"

const comparingLevels = [
  {
      label: 'level-1',
      ancestorKeys: ['c1', 's1']
  },
  {
      label: 'level-1,2',
      ancestorKeys: ['c1', 's1', 'c2', 's2', 'c3', 's3']
  },
  {
      label: 'level-1,2,3',
      ancestorKeys: ['c1', 's1', 'c2', 's2', 'c3', 's3', 'c4', 's4', 'c5', 's5', 'c6', 's6', 'c7', 's7']
  }
]

const IndexPage = () => {
  const [data, setData] = useState([])
  const [samples, setSamples] = useState([])
  const [comparingLevel, setLevel] = useState(comparingLevels[0])
  
  const fileSelected = (evt) => {
    const fileReader = new FileReader()

    fileReader.onloadend = (d) => {
      // todo: convert header to lower case
      const lines = fileReader.result.split("\n")
      const header = lines[0].toLowerCase()
      const content = lines.slice(1)

      const txt = [header, ...content].join("\n")
      console.log(txt)

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
    <h1>Pedigree Mating</h1>
    <div style={{paddingBottom: "20px", marginBottom: "20px", borderBottom: "1px solid black"}}>
      เลือกไฟล์​ CSV
      <input type="file" onChange={fileSelected} accept="text/csv"/> 
      <br/>
    </div>
    <div style={{ position: "relative", zIndex: 1000 }}>
      <span style={{fontWeight: "bold"}}>
        Animal-ID (♂) Mating Partners (♀) with <select 
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
      </span>
      { samples.length > 0 && <div>
        <ul style={{
            listStyle: "none",
            margin: 0,
            padding: 0
          }}
        >
          { samples.map( sample => {
              return <li key={sample.id} style={{ padding: "5px", marginTop: "5px"}}>
                <div style={{
                    fontWeight: "bold",
                    width: "10%",
                    float: "left",
                    textAlign: "right",
                  }}
                >{sample.id}</div>
                <div style={{ float: "left", width: "90%" }}>
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
                </div>
              </li>
            })
          }
        </ul>
        </div>
      }
    </div>
    <div style={{
      position: "fixed",
      textAlign: "center",
      zIndex: 0,
      top: "40%",
      width: "100%",
      left: 0,
    }}>
      <img src={logo} width="100px"/>
    </div>
  </Layout>
}

export default IndexPage
