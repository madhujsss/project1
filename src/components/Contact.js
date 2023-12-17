
const Contact = () => {
    return (
        <div style={{display: "flex",
        padding: "0px 20px",
       }} className="flex flex-col md:flex-row">
        <div class="form-wrapper" style={{ display: "flex", 
        maxWidth: "1320px",
        marginTop: "60px",
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: "60px",
        position: "relative",
        }}>
     <div className="container mt-5">
      <h2 className="mb-3">Please Fill the details</h2>
      <form >
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
         submit
        </button>
      </form>
      </div>
        </div>
        <div style={{backgroundImage: "url(" + "https://images.pexels.com/photos/1765005/pexels-photo-1765005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" + ")",
    height: "500px",
    width: "850px",
   alignItems: "center",
    justifyContent: "center",
    }}>
        </div>
        </div>
    );
}


export default Contact; 