import React from "react";

import { Button, Grid, Typography, Checkbox } from "@mui/material";

import BgImage from "./assets/img/view.png";
import { ReactComponent as Logo } from "./assets/img/logo.svg";
// import BottomImage from "./assets/img/bottomAngle.png";

import { ReactComponent as Twitter } from "./assets/img/twitter.svg";
import { ReactComponent as Google } from "./assets/img/google.svg";
import { ReactComponent as Facebook } from "./assets/img/facebook.svg";
import { ReactComponent as Apple } from "./assets/img/apple.svg";

function App() {
  return (
    <section>
      <header>
        <div className="logo">
          <Logo />
        </div>

        <Button>Register</Button>
      </header>

      <main>
        <Grid container className="parentGrid">
          <Grid item md={5} className="bgImage">
            <div style={{ position: "relative" }}>
              <div className="backdrop" />
              <img alt="" src={BgImage} />
            </div>
            {/* <div className="bottomImage">
              <img alt="" src={BottomImage} />
            </div> */}
          </Grid>

          <Grid item md={7} className="gridBox">
            <div className="heading">
              <div className="logoDiv">
                <Logo />
              </div>

              <Typography variant="h1">Continue to stockwick</Typography>
            </div>

            <ul className="list">
              <li>
                1. View Insider, Top shareholders and board compensations.
              </li>
              <li>2. Create your watchlist and share your sentiment.</li>
              <li>
                3. Socialize with a growing community of retail investors world
                wide.
              </li>
            </ul>

            <div className="terms">
              <Checkbox />
              <Typography variant="body1">
                I agree to terms of service. Privacy Policy & Non-professional
                user
              </Typography>
            </div>

            <div className="socialButtons">
              <Button className="twitter">
                <Twitter /> <span>Twitter</span>
              </Button>

              <Button className="google">
                <Google /> <span>Google</span>
              </Button>

              <Button className="facebook">
                <Facebook /> <span>Facebook</span>
              </Button>

              <Button className="apple">
                <Apple /> <span>Apple</span>
              </Button>
            </div>

            <Typography variant="body1" className="termsCondi">
              Terms & Conditions
            </Typography>
          </Grid>
        </Grid>
      </main>
    </section>
  );
}

export default App;
