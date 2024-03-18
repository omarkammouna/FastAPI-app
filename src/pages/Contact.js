import React from 'react'


const handleSubmit = async (e) => {
    
    }
const Contact = () => {
  return (
    <div className="contact-form">
        <h2>Contactez Nous</h2>
        <p>
        Votre adresse email ne sera pas publiée. Les champs requis sont indiqués *
        </p>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Votre nom"
                 // value={contact.name}
                 // onChange={handleChange}
                 // required
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Votre adresse e-mail"
                  //value={contact.email}
                  //onChange={handleChange}
                  //required
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Votre sujet"
                  //value={contact.subject}
                 // onChange={handleChange}
                 // required
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group">
                <input
                  type="text"
                  name="number"
                  className="form-control"
                  //value={contact.number}
                 // onChange={handleChange}
                 // placeholder="Your Phone"
                 // required
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="form-group">
                <textarea
                  name="text"
                  cols="30"
                  rows="6"
                  className="form-control"
                  placeholder="Votre message..."
                 // value={contact.text}
                 // onChange={handleChange}
                 // required
                ></textarea>
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12">
              <button type="submit" className="default-btn">
              Envoyer un message
              </button>
            </div>
          </div>
        </form>
      </div>
  )
}

export default Contact
