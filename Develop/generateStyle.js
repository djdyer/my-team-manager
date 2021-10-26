function generateCSS() {
  return `* {
          margin: 0;
          padding: 0;
        }
  
        body {
          background-color: #051014;
          height: 100vh;
          place-items: center;
        }
  
        header {
          height: 150px;
          background-color: #2e2f2f;
          text-align: center;
          width: 100%;
        }
  
        h1 {
          color: #42bfdd;
        }
  
        main {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin-left: 50px;
          margin-top: 50px;
        }
  
        article,
        .labels,
        .answers {
          display: flex;
          flex-direction: column;
        }
  
        .card-border {
          max-width: 300px;
          padding: 1rem;
          position: relative;
          background: linear-gradient(to right, #42bfdd, #7b79e2);
          border-radius: 10pt;
          /* box-shadow: ; */
          padding: 3px;
        }
  
        .card {
          background: #051014;
          color: #f0f6f6;
          padding: 2rem;
          border-radius: 10pt;
        }
  
        .header {
          background-color: #2e2f2f;
          color: #f0f6f6;
        }
  
        .iconTitle,
        .details {
          display: flex;
          flex-direction: row;
        }
  
        #icon {
          width: 50px;
          height: auto;
        }
        `;
}

module.exports = generateCSS;
