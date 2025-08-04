import React from 'react'

// export default function About() {
//   const [myStyle, setMyStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white'
//   });



export default function About(props) {




  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'rgb(3, 21, 53)',
    backgroundColor: props.mode === 'dark' ? 'rgb(3, 21, 53)' : 'white'
  }

  return (
    <>

      <div className="container" style={myStyle}>
        <h1><strong>About Us</strong></h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong >Analyze Your Text 1</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <strong>This is the first item’s accordion body.</strong> It is shown by default...
              </div>
            </div>
          </div>

          <div className="accordion-item" >
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Analyze Your Text 2</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <strong>This is the second item’s accordion body.</strong> It is hidden by default...
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Analyze Your Text 3</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <strong>This is the third item’s accordion body.</strong> It is hidden by default...
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
};

