// Returns string of entire style sheet
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
    padding-top: 50px;
  }
  
  h1,
  h2 {
    font-family: "Comfortaa", cursive;
    color: #42bfdd;
    margin-bottom: 10px;
  }
  
  h4 {
    font-family: "Comfortaa", cursive;
    color: #f0f6f6;
    padding: 15px 0;
  }
  
  h3 {
    font-family: "Comfortaa", cursive;
    color: #7b79e2;
  }
  
  main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 50px;
    margin-top: 50px;
    justify-content: center;
  }
  
  article,
  .labels,
  .answers {
    display: flex;
    flex-direction: column;
  }
  
  .card-border {
    width: 350px;
    padding: 1rem;
    position: relative;
    background: linear-gradient(to right, #42bfdd, #7b79e2);
    border-radius: 10pt;
    box-shadow: 0px 5px 30px rgb(0, 0, 0);
    padding: 3px;
    margin: 20px 30px 30px 10px;
  }
  
  .card {
    background: #051014;
    padding: 2rem;
    border-radius: 10pt;
  }
  
  .header {
    display: flex;
    flex-direction: row;
    padding: 20px 0;
  }
  
  .details {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  
  .nameTitle {
    display: flex;
    flex-direction: column;
  }
  
  #icon {
    width: 55px;
    height: auto;
    margin: 0 30px 0 10px;
  }
`;
}

module.exports = generateCSS;