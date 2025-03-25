import './AdminSideBar.css';

function AdminSideBar() {
  return (
    <div class="vertical-menu mdl-tabs mdl-js-tabs">
        <nav class="menu">

            <div class="mdl-tabs__tab-bar">
            <a href="#" class="vertical-menu-header"><span class="mdl-chip__contact mdl-color--blue-grey-50 mdl-color-text--blue-grey-500"><i class="fa fa-users" aria-hidden="true"></i>
        </span> MENU TITLE <i class="fa fa-angle-right fa-fw" aria-hidden="true"></i></a>
            <div class="vertical-scroll">
                <a href="#starks-panel" class="mdl-tabs__tab is-active"><span class="mdl-chip__contact">S</span> Starks</a>
                <a href="#lannisters-panel" class="mdl-tabs__tab"><span class="mdl-chip__contact">L</span> Lannisters</a>
                <a href="#targaryens-panel" class="mdl-tabs__tab"><span class="mdl-chip__contact">T</span> Targaryens</a>
            </div>
            </div>
        </nav>
        <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
        <div class="mdl-tabs__panel is-active" id="starks-panel">
            <ul>
            <li>Eddard</li>
            <li>Catelyn</li>
            <li>Robb</li>
            <li>Sansa</li>
            <li>Brandon</li>
            <li>Arya</li>
            <li>Rickon</li>
            </ul>
        </div>
        <div class="mdl-tabs__panel" id="lannisters-panel">
            <ul>
            <li>Tywin</li>
            <li>Cersei</li>
            <li>Jamie</li>
            <li>Tyrion</li>
            </ul>
        </div>
        <div class="mdl-tabs__panel" id="targaryens-panel">
            <ul>
            <li>Viserys</li>
            <li>Daenerys</li>
            </ul>
            </div>
            </div>
        </div>
    </div>
  );
}


export default AdminSideBar;