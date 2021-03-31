import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css'
import 'react-confirm-alert/src/react-confirm-alert.css'

export default createGlobalStyle`

*{
    box-sizing:border-box;
}

:root{
    --color-main: #E5E5E5;
    --color-secundary : #F4EAEA;

    --font-cursiva:'Waiting for the Sunrise', cursive;
    --font-comum: 'Rum Raisin', sans-serif;
    --img-marmore :url("/img/background.jpg");

    --main: #6c757d;
    --main-hover: #5a6268;
    --primary: #007bff;
    --primary-hover: #0069d9;
    --warning: #f4d83c;
    --warning-hover: #f6e987;
    --danger: #dc3545;
    --danger-hover: #c82333;
    --success: #28a745;
    --success-hover: #218838;

    --white: #ffffff;
    --black: #000000;
    --grey: #f0f0f0;

}

body{
    background-image: url("../img/background.jpg");
    background-repeat: repeat;
}

a{
    text-decoration: none;
    color: black;
}

.section{
    background-color: #E5E5E5;   
}

.center{
    text-align: center;
}

.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

[class*="col-"] {
    float: left;
    padding: 0 30px;
  }


.row::after {
    content: "";
    clear: both;
    display: table;
}

body, p{
    margin:0;
    padding: 0;
    font-size: 1.2em;
}

body{
    background-image: url("../img/background.jpg");
    background-repeat: repeat;
}

.flex{
    display :flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    justify-content: center;
}

.flex > div{
    flex: 1 1 200px;
    margin:40px 5%;
    max-width: 250px;
}

.menu{
    padding-top: 40px;
}

.menu > ul{
    list-style: none;
    padding-inline-start: 0;
}

.emAlta{
    box-shadow: 25px 25px #C4C4C4;
}

.texto-central{
    font-size: 0.8em;
}

.texto-central > p{
    background-color: #F4EAEA;
    padding: 15px;
}

.img-lateral{
    text-align: right;
    float:right;
}

.align-esq{
    text-align: left;
    padding: 5px 15px;
}


@media only screen and (max-width: 900px){

    [class*="col-"] {
        width: 100%;
        float: left;
        padding: 15px;
      }
}
.container {
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;

    @media (max-width: 992px) {
      max-width: 960px;
    }
    @media (max-width: 768px) {
      max-width: 720px;
    }
    @media (max-width: 576px) {
      width: 100%;
    }
  }

`;