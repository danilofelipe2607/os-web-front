import React, { Component } from "react";
import classNames from "classnames";
import { logout } from "../../service/authService";
export class AppProfile extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.setState({ expanded: !this.state.expanded });
    event.preventDefault();
  }

  render() {
    return (
      <div className="layout-profile">
        <div></div>
        <button className="p-link layout-profile-link" onClick={this.onClick}>
          <span className="username">Danilo Felipe</span>
          <i className="pi pi-fw pi-cog" />
        </button>
        <ul
          className={classNames({
            "layout-profile-expanded": this.state.expanded
          })}
        >
          <li>
            <button className="p-link">
              <i className="pi pi-fw pi-user" />
              <span>Conta</span>
            </button>
          </li>
          <li>
            <button className="p-link">
              <i className="pi pi-fw pi-inbox" />
              <span>Notificações</span>
              <span className="menuitem-badge">2</span>
            </button>
          </li>
          <li>
            <button className="p-link" onClick={() => logout()}>
              <i className="pi pi-fw pi-power-off" />
              <span>Sair</span>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
