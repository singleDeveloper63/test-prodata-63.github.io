import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

class Footer extends Component {

    render() {
        return (
             <div className="container-fluid p-0 m-0">
                 <div className="footer-content p-3">
                     <div className="row">
                         <div className="col-sm-12 col-md-6 col-lg-3">
                             <h2>Biz kimmiz ?</h2><hr/>
                             <p>
                                 Biz vatanimiz rivojlanishi yo'lida oz bo'lsa ham hissamizni qo'shishni istaydigan ProData jamoasi
                                 O'zbekistonda dasturlashni o'rganuvchi har qanday insonga yordam berishni o'z oldimizga maqsad qilib qo'yganmiz.
                                 Bizning onlayn maktab orqali siz veb - dasturlashni va har xil real - loyihalarda siz duch kelishingiz
                                 mumkun bo'lgan masalalar algoritmlarni o'rganasiz.
                             </p>
                         </div>
                         <div className="col-sm-12 col-md-6 col-lg-6">
                             <h2>Loyiha mualliflari haqida </h2><hr/>
                             <div className="row">
                             <div className="col-sm-12 col-md-12 col-lg-6">
                                     <img className="rounded-circle float-right avatar" src={require('../../assets/Authors/johndoe.jpg')} alt="Azamat Jumabaev" width="100px" height="100px"/>
                                     <h4 className="author">Jamshid Yerzakov</h4>
                                     <p>
                                         2001 - yil. Toshkent shahri. Ma'lumoti yuqori.
                                         Ushbu veb saytning back - end qismi yaratuvchisi. Veb sayt dasturchining birinchi haqiqiy loyihasidan hisoblanadi.
                                         <hr/>
                                         Aloqa : <i className="fa fa-fw fa-envelope"></i> jamshidyerzakov3@gmail.com
                                     </p>
                                 </div>
                                 <div className="col-sm-12 col-md-12 col-lg-6">
                                     <img className="rounded-circle float-right avatar" src={require('../../assets/Authors/Azamat.jpg')} alt="Azamat Jumabaev" width="100px" height="100px"/>
                                     <h4 className="author">Azamat Jumabaev</h4>
                                     <p>
                                         2001 - yil. Qoraqalpog'iston Respublikasi. Ma'lumoti o'rta.
                                         Ushbu veb saytning front - end qismi yaratuvchisi. Veb sayt dasturchining birinchi haqiqiy loyihasidan hisoblanadi.
                                         <hr/>
                                         Aloqa : <i className="fa fa-fw fa-envelope"></i> singledeveloper63@gmail.com
                                     </p>
                                 </div>
                             </div>
                         </div>
                             <div className="col-sm-12  col-lg-3">
                                 <h2>Motivatsiya</h2><hr/>
                                 <p>
                                     Bu yerda sizning reklamangiz bo'lishi mumkun e'di 😁😁😁😁
                                 </p>
                             </div>
                     </div>
                 </div>
                 <div className="footer-copyright mx-auto d-block">

                 </div>
             </div>
        );
    }
}

export default Footer;