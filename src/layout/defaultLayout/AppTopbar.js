import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import PropTypes from "prop-types";
import { logout } from "../../service/authService";

export class AppTopbar extends Component {
  static defaultProps = {
    onToggleMenu: null
  };

  static propTypes = {
    onToggleMenu: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="layout-topbar clearfix" style={{ background: "#4d505b" }}>
        <button
          className="p-link layout-menu-button"
          onClick={this.props.onToggleMenu}
        >
          <span className="pi pi-bars" />
        </button>
        <div className="layout-topbar-icons">
          <span className="layout-topbar-search">
            <InputText type="text" placeholder="Search" />
            <span className="layout-topbar-search-icon pi pi-search" />
          </span>
          <button className="p-link">
            <span className="layout-topbar-item-text">Events</span>
            <span className="layout-topbar-icon pi pi-calendar" />
            <span className="layout-topbar-badge">5</span>
          </button>
          <button className="p-link">
            <span className="layout-topbar-item-text">Settings</span>
            <span className="layout-topbar-icon pi pi-cog" />
          </button>
          <button className="p-link" onClick={() => logout()}>
            <span className="layout-topbar-item-text" />
            <span className="layout-topbar-icon pi pi-user" />
            Sair
          </button>
        </div>
      </div>
    );
  }
}
