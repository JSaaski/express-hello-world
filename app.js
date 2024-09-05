const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Oulu!</title>
    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>

    <style>
  @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
  @font-face {
    font-family: "neo-sans";
    src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
    font-style: normal;
    font-weight: 700;
  }
  html {
    font-family: neo-sans;
    font-weight: 700;
    font-size: calc(62rem / 16);
  }
  body {
    background: white;
    margin: 0;
    overflow: hidden; 
  }
    
  section {
    border-radius: 1em;
    padding: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    color: #1d8a4a; 
    z-index: 1; 
  }
    </style>
  </head>
  <body>
  <div id="particles-js"></div>
    <section>
      Hello from Oulu!
    </section>
    <script>
    particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 500
        }
      },
      "color": {
        "value": "#0fd4cd" 
      },
      "shape": {
        "type": "star",
        "stroke": {
          "width": 0,
          "color": "#FF0000"
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "opacity_min": 1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 2,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "push"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      }
    },
    "retina_detect": true
  });
  </script>
  </body>
</html>
`
