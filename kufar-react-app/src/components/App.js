import React, {Component} from "react";
import logo from '../images/logo.png';
import kufar from '../images/kufar.png';
import search from '../images/search.png';
import locationHeader from '../images/locationHeader.png';
import lines from '../images/lines.png';
import shirt from '../images/shirt.png';
import switches from '../images/switch.png';
import squares from '../images/square4.png';
import locationItem from '../images/locationItem.png';
import gistogram from '../images/gistogram.png';
import earth from '../images/earth.png';
import apple from '../images/apple.png';
import googlePlay from '../images/googlePlay.png';
import telegram from '../images/telegram.png';
import vk from '../images/vk.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import youtube from '../images/youtube.png';
import odnoklassniki from '../images/odnoklassniki.png';
import item from '../images/item.jpg';
import './App.css';
import Button from "./Button";

class App extends Component {
  render() {
    return (
        <div className="page-container">
          <header>
            <div className="left-part-of-cup">
              <div className="logo-container">
                <img className="logo-img logo-icon" src={logo} alt="Logo"/>
                <img className="logo-img logo-text" src={kufar} alt="Logo"/>
              </div>
              <div className="search-field-container">
                <label htmlFor="search-field" tabIndex="0">
                  <img className="img--loupe" src={search} alt="Search"/>
                </label>
                <input id="search-field" type="text" placeholder="Товар, услуга"/>
              </div>
              <button className="btn--location">
                <img className="img--marker" src={locationHeader} alt="Location"/>
                <p>Вся Беларусь</p>
              </button>
            </div>
            <Button/>
          </header>
          <nav className="navigation">
            <button className="btn--all-categories">
              <img className="btn--all-categories__img" src={lines} alt="Lines"/>
              <p className="btn--all-categories__text">Категории</p>
            </button>
            <div className="scroll-panel-nav">
              <a className="nav--category">
                <img className="nav-img--skirt" src={shirt} alt="Shirt"/>
                <p>Модное лето</p>
              </a>
              <a className="nav--category">Техника с доставкой</a>
              <a className="nav--category">Телефоны</a>
              <a className="nav--category">Недвижимость</a>
              <a className="nav--category">Легковые авто</a>
              <a className="nav--category">Велосипеды</a>
              <a className="nav--category">Работа</a>
              <a className="nav--category">Платья</a>
              <a className="nav--category">Строительный инструмент</a>
              <a className="nav--category">Садовая техника</a>
              <a className="nav--category">Запчасти,расходники</a>
              <a className="nav--category">Коляски</a>
              <a className="nav--category">Диваны</a>
              <a className="nav--category">Холодильники</a>
            </div>
            <div className="scroll-panel-btn">
              <button className="scroll-btn scroll-panel-btn--left"/>
              <button className="scroll-btn scroll-panel-btn--right"/>
            </div>
          </nav>
          <div className="cup-of-mainpage">
            <div className="cup-of-mainpage__text">
              <p className="cup-of-mainpage--txt headline">Kufar - площадка объявлений в Беларуси</p>
              <p className="cup-of-mainpage--txt count-ad">Объявлений: 2071428</p>
            </div>
            <div className="sortings-container">
              <select className="list-sortings">
                <option>По дате</option>
                <option>По цене ↑</option>
                <option>По цене ↓</option>
              </select>
              <div className="switches-display">
                <button className="btn--show-filters">
                  <img className="btn--show-filters--img switch-display--img" src={switches} alt="Switch"/>
                  <p className="btn--show-filters--txt">Фильтры</p>
                </button>
                <button className="btn--switch-display">
                  <img className="switch-display--img" src={squares} alt="Square"/>
                </button>
              </div>
            </div>
          </div>
          <div className="mainpage">
            <div className="filters-container">
              <nav className="list-nav-filters">
                <a className="nav-filters nav-filters__all-categories">Все категории</a>
                <a className="nav-filters">Модное лето</a>
                <a className="nav-filters">Недвижимость</a>
                <a className="nav-filters">Авто и транспорт</a>
                <a className="nav-filters">Техника</a>
                <a className="nav-filters">Мода и стиль</a>
                <a className="nav-filters">Все для детей и мам</a>
                <a className="nav-filters">Все для дома</a>
                <a className="nav-filters">Ремонт и стройка</a>
                <a className="nav-filters">Сад и огород</a>
                <a className="nav-filters">Хобби, спорт и туризм</a>
                <a className="nav-filters">Свадьба и праздники</a>
                <a className="nav-filters">Животные</a>
                <a className="nav-filters">Работа, бизнес, учеба</a>
                <a className="nav-filters">Услуги</a>
                <a className="nav-filters">Прочее</a>
              </nav>
              <div className="other-filters-container">
                <div className="location-filters">
                  <label className="location-filters--lbl" htmlFor="list-region-filters">ВСЯ БЕЛАРУСЬ</label>
                  <select id="list-region-filters">
                    <option>Область</option>
                    <option>Минск</option>
                    <option>Брестская</option>
                    <option>Могилевская</option>
                    <option>Гомельская</option>
                    <option>Витебская</option>
                    <option>Гродненская</option>
                    <option>Минск</option>
                  </select>
                  <label className="location-filters--lbl" htmlFor="list-city-filters">ГОРОД / РАЙОН</label>
                  <select id="list-city-filters" disabled>
                    <option>Любой</option>
                    {/* <!--                        <option>Минск</option>-->*/}
                    {/* <!--                        <option>Брестская</option>-->*/}
                    {/* <!--                        <option>Могилевская</option>-->*/}
                    {/* <!--                        <option>Гомельская</option>-->*/}
                    {/* <!--                        <option>Витебская</option>-->*/}
                    {/* <!--                        <option>Гродненская</option>-->*/}
                    {/* <!--                        <option>Минск</option>-->*/}
                  </select>
                  <label className="location-filters--lbl" htmlFor="price-filters-from">ЦЕНА</label>
                  <div className="price-filters">
                    <input className="price-filters--input" id="price-filters-from" placeholder="От" type="number"
                           min="0" step="0.01"/>
                    <input className="price-filters--input" id="price-filters-to" placeholder="До" type="number"
                           min="0" step="0.01"/>
                  </div>
                  <label className="location-filters--lbl">СОСТОЯНИЕ</label>
                  <div className="state-filters">
                    <label className="icon-label">
                      <input className="icon-input" type="radio" defaultChecked name="state"/>
                      <div className="icon-radio-btn"/>
                      <p>Любой</p>
                    </label>
                    <label className="icon-label">
                      <input className="icon-input" type="radio" name="state"/>
                      <div className="icon-radio-btn"/>
                      <p>Новое</p>
                    </label>
                    <label className="icon-label">
                      <input className="icon-input" type="radio" name="state"/>
                      <div className="icon-radio-btn"/>
                      <p>Б/у</p>
                    </label>
                  </div>
                  <label className="location-filters--lbl">ПРОДАВЕЦ</label>
                  <div className="seller-filters">
                    <label className="icon-label">
                      <input className="icon-input" type="radio" defaultChecked name="seller"/>
                      <div className="icon-radio-btn"/>
                      <p>Любой</p>
                    </label>
                    <label className="icon-label">
                      <input className="icon-input" type="radio" name="seller"/>
                      <div className="icon-radio-btn"/>
                      <p>Частное лицо</p>
                    </label>
                    <label className="icon-label">
                      <input className="icon-input" type="radio" name="seller"/>
                      <div className="icon-radio-btn"/>
                      <p>Компания</p>
                    </label>
                  </div>
                </div>
                <div className="additional-modes">
                  <label className="icon-label">
                    <input className="icon-input" type="checkbox" value="fSummer"/>
                    <div className="icon-checkbox"/>
                    <p>Модное лето</p>
                  </label>
                  <label className="icon-label">
                    <input className="icon-input" type="checkbox" value="halva"/>
                    <div className="icon-checkbox"/>
                    <p>В рассрочку по халве</p>
                  </label>
                  <label className="icon-label">
                    <input className="icon-input" type="checkbox" value="withPhoto"/>
                    <div className="icon-checkbox"/>
                    <p>Только с фото</p>
                  </label>
                  <label className="icon-label">
                    <input className="icon-input" type="checkbox" value="exchange"/>
                    <div className="icon-checkbox"/>
                    <p>Возможен обмен</p>
                  </label>
                </div>
                <button className="btn--show-result">Показать результаты(62893)</button>
                <button className="btn--reset-filters">Сбросить фильтры</button>
                <button className="btn--save-search">Сохранить поиск</button>
              </div>
            </div>

            <div className="list-advertisements">
              <div className="ad-container">
                <div className="ad-container--img" style={{backgroundImage: item}}/>
                <div className="info-about-ad">
                  <div className="top-part-of-ad-container">
                    <div className="name-ad-container">
                      <p className="top-part-of-ad--txt name-ad">Кастрюля</p>
                      <p className="top-part-of-ad--txt info-ad">Кухонные приборы, Redmand, Б/у</p>
                    </div>
                    <p className="top-part-of-ad--txt price-ad">100 р.</p>
                  </div>
                  <div className="bot-part-of-ad-container">
                    <div className="location-advertisement">
                      <img className="location-ad--img" src={locationItem} alt="Location"/>
                      <p className="bot-part-of-ad--text">Гомель</p>
                    </div>
                    <p className="bot-part-of-ad--text announced-ad">Сегодня, 09:40</p>
                  </div>
                </div>
              </div>
              <div className="ad-container">
                <div className="ad-container--img" style={{backgroundImage: "url(../images/item2.jpg)"}}/>
                <div className="info-about-ad">
                  <div className="top-part-of-ad-container">
                    <div className="name-ad-container">
                      <p className="top-part-of-ad--txt name-ad">Наклейки Ледниковый период</p>
                      <p className="top-part-of-ad--txt info-ad">Коллекции</p>
                    </div>
                    <p className="top-part-of-ad--txt price-ad">1 р.</p>
                  </div>
                  <div className="bot-part-of-ad-container">
                    <div className="location-advertisement">
                      <img className="location-ad--img" src={locationItem} alt="Location"/>
                      <p className="bot-part-of-ad--text">Минск, Октябрьский</p>
                    </div>
                    <p className="bot-part-of-ad--text announced-ad">12 июля, 10:23</p>
                  </div>
                </div>
              </div>
              <div className="ad-container">
                <div className="ad-container--img" style={{backgroundImage: "url(../images/item3.jpg)"}}/>
                <div className="info-about-ad">
                  <div className="top-part-of-ad-container">
                    <div className="name-ad-container">
                      <p className="top-part-of-ad--txt name-ad">Куртка</p>
                      <p className="top-part-of-ad--txt info-ad">Женская одежда, Верхняя одежда, 52(XXL), Деми,
                        Новое</p>
                    </div>
                    <p className="top-part-of-ad--txt price-ad">10 р.</p>
                  </div>
                  <div className="bot-part-of-ad-container">
                    <div className="location-advertisement">
                      <img className="location-ad--img" src={locationItem} alt="Location"/>
                      <p className="bot-part-of-ad--text">Минская, Вилейка</p>
                    </div>
                    <p className="bot-part-of-ad--text announced-ad">23 июня, 19:30</p>
                  </div>
                </div>
              </div>
              <div className="ad-container">
                <div className="ad-container--img" style={{backgroundImage: "url("+"../images/item4.jpg"+")"}}/>
                <div className="info-about-ad">
                  <div className="top-part-of-ad-container">
                    <div className="name-ad-container">
                      <p className="top-part-of-ad--txt name-ad">Красавица поночка</p>
                      <p className="top-part-of-ad--txt info-ad">Домашние питомцы, Собаки</p>
                    </div>
                    <p className="top-part-of-ad--txt price-ad">Бесплатно</p>
                  </div>
                  <div className="bot-part-of-ad-container">
                    <div className="location-advertisement">
                      <img className="location-ad--img" src={locationItem} alt="Location"/>
                      <p className="bot-part-of-ad--text">Минск, Октябрьский</p>
                    </div>
                    <p className="bot-part-of-ad--text announced-ad">12 июля, 10:40</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination">
            <button className="pagination--btn pagination--btn-previous" disabled/>
            <p className="pagination--page active-pagination--page">1</p>
            <p className="pagination--page">2</p>
            <p className="pagination--page">3</p>
            <p className="pagination--page points">...</p>
            <p className="pagination--page">62893</p>
            <button className="pagination--btn pagination--btn-next"/>
          </div>
          <footer>
            <div className="top-part-of-foot">
              <div className="list-additional-links">
                <a className="additional-link link-advertising">
                  <img className="img--gistogram" src={gistogram} alt="Gistogram"/>
                  <p>Реклама</p>
                </a>
                <a className="additional-link">Рассрочка</a>
                <a className="additional-link">Доставка</a>
                <a className="additional-link">Правила</a>
                <a className="additional-link">Помощь</a>
                <a className="additional-link">Выбрать регион</a>
              </div>
              <button className="btn-change-language">
                <img className="btn-change-language--img" src={earth} alt="Earth"/>
                <p>Беларуская</p>
              </button>
            </div>
            <p className="price-info">*Оплата производится в белорусских рублях по курсу НБ РБ.</p>
            <p className="info-about-site">© Kufar — крупнейшая площадка объявлений Беларуси по данным gemiusAudience,
              апрель 2019. Использование ресурса Kufar означает согласие с Пользовательским соглашением и
              Политикой конфиденциальности. ООО «Адевинта», УНП 191767445, 220030, г. Минск, ул. Немига, 5,
              помещение 77. Режим работы: 10.00 - 18.00, Пн-Пт.</p>
            <div className="bot-part-of-foot">
              <div className="links-app-container">
                <a className="link-app">
                  <img className="link-app--img" src={apple} alt="Apple"/>
                  <p className="link-app--text">Приложение Kufar в App Store</p>
                </a>
                <a className="link-app">
                  <img className="link-app--img" src={googlePlay} alt="Google Play"/>
                  <p className="link-app--text">Приложение Kufar в Google Play</p>
                </a>
              </div>
              <div className="links-social-network">
                <a className="link-social-network">
                  <img className="link-social-network--img" src={telegram} alt="Telegram"/>
                </a>
                <a className="link-social-network">
                  <img className="link-social-network--img" src={vk} alt="Vk"/>
                </a>
                <a className="link-social-network">
                  <img className="link-social-network--img" src={facebook} alt="Facebook"/>
                </a>
                <a className="link-social-network">
                  <img className="link-social-network--img" src={instagram} alt="Instagram"/>
                </a>
                <a className="link-social-network">
                  <img className="link-social-network--img" src={youtube} alt="Youtube"/>
                </a>
                <a className="link-social-network">
                  <img className="link-social-network--img" src={odnoklassniki} alt="Odnoklassniki"/>
                </a>
              </div>
            </div>
          </footer>
        </div>
    );
  }
}

export default App;