import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...")
    let response = await fetch("https://getform.io/f/b77b04c4-7716-4f88-93a6-a7cf342d6ba2", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    console.log(response);
    setButtonText("Send");
    let result = response.json();
    setFormDetails(formInitialDetails);
    console.log(result.code);
    if (result.code != 404) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later",
      });
    }
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch With E-Mail</h2>
            <form action="https://getform.io/f/b77b04c4-7716-4f88-93a6-a7cf342d6ba2" method="POST" onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows={6}
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
// import "animate.css";
// import TrackVisibility from "react-on-screen";
// import emailjs from "emailjs-com";

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   };
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState("Send");
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };
//   // function sendEmail(e) {
//   //   e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

//   //   emailjs
//   //     .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
//   //     .then(
//   //       (result) => {
//   //         window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
//   //       },
//   //       (error) => {
//   //         console.log(error.text);
//   //       }
//   //     );
//   // }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     let response = await fetch("http://localhost:3000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "Application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code == 200) {
//       setStatus({ success: true, message: "Message sent successfully" });
//     } else {
//       setStatus({
//         success: false,
//         message: "Something went wrong, please try again later.",
//       });
//     }
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <img
//                   className={
//                     isVisible ? "animate__animated animate__zoomIn" : ""
//                   }
//                   src={contactImg}
//                   alt="Contact Us"
//                 />
//               )}
//             </TrackVisibility>
//           </Col>
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={
//                     isVisible ? "animate__animated animate__fadeIn" : ""
//                   }
//                 >
//                   <h2>Get In Touch</h2>
//                   <form  action="https://getform.io/f/079f23aa-7332-43b9-904c-c8ffe41b26a4" method="POST"  onSubmit={handleSubmit}>
//                     <Row>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="text"
//                           value={formDetails.firstName}
//                           placeholder="First Name"
//                           onChange={(e) =>
//                             onFormUpdate("firstName", e.target.value)
//                           }
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="text"
//                           value={formDetails.lastName}
//                           placeholder="Last Name"
//                           onChange={(e) =>
//                             onFormUpdate("lastName", e.target.value)
//                           }
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="email"
//                           value={formDetails.email}
//                           placeholder="Email Address"
//                           onChange={(e) =>
//                             onFormUpdate("email", e.target.value)
//                           }
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="tel"
//                           value={formDetails.phone}
//                           placeholder="Phone No."
//                           onChange={(e) =>
//                             onFormUpdate("phone", e.target.value)
//                           }
//                         />
//                       </Col>
//                       <Col size={12} className="px-1">
//                         <textarea
//                           rows="6"
//                           value={formDetails.message}
//                           placeholder="Message"
//                           onChange={(e) =>
//                             onFormUpdate("message", e.target.value)
//                           }
//                         ></textarea>
//                         <button type="submit">
//                           <span>{buttonText}</span>
//                         </button>
//                       </Col>
//                       {status.message && (
//                         <Col>
//                           <p
//                             className={
//                               status.success === false ? "danger" : "success"
//                             }
//                           >
//                             {status.message}
//                           </p>
//                         </Col>
//                       )}
//                     </Row>
//                   </form>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };
