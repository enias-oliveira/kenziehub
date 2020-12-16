import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');



*{
    margin: 0;
    padding: 0;
    outline: 0;
}

 input{
     font: 14px Roboto, sans-serif;
    color: #171717;
    background: #fff;
    font-size: 15px !important;
}

body{
   
    background-image: url("https://i.postimg.cc/xd186PKC/wallpaper1.jpg")!important;
}

button, svg {
    cursor: pointer;
}

.ant-col{
    background-color: #a52a2a00;
}

#main-container > div.ant-list.ant-list-split.ant-list-grid{
    
    background-image: url("https://i.postimg.cc/xd186PKC/wallpaper1.jpg") !important;
}

#main-container > div > main > div.sc-hKgILt.fSXpto > div{
    background-image: url("https://i.postimg.cc/xd186PKC/wallpaper1.jpg")!important;
}

#main-container > div > main{
    background-image: url("https://i.postimg.cc/xd186PKC/wallpaper1.jpg")!important;
}

.ant-form-item-label > label {
    position: relative;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-align: center;
    align-items: center;
    height: 32px;
    color: rgb(255 255 255 / 85%);
    
}


.ant-card {
    /* background-color: #6AFFDB; */
    font-size: 18px;

}


#login-overflowed-indicator\$Menu > li.ant-menu-item.ant-menu-item-only-child.ant-menu-item-active{
font-size:20px;
}

/* .ant-card-meta-title {
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 25px;
    white-space: nowrap;
    text-overflow: ellipsis;
} */

.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu {
    margin: 0 20px;
    margin-top: -1px;
    margin-bottom: 0;
    padding: 0 20px;
    padding-right: 0;
    padding-left: 0;
    font-size: 20px;
}


`;
