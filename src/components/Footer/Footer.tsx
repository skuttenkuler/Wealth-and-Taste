import React from "react"


const Footer: React.FunctionComponent = () => {
    return (
        <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0" style={{top:"30%"}}>
          <section>
              <p style={{color: "white"}}>615-660-0811 -  3250 Dickerson Pike Suite 121  Nashville TN 37207</p>
          </section>
          <section>
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/wealthandtaste_nashville/" role="button">
              Follow us on Instagram
            </a>
          </section>
          
        </div>
      
        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
          © 2020 Copyright:
          Wealth and Taste Tattoo
        </div>
      </footer>
    )
};

export default Footer;
