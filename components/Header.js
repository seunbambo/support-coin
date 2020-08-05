import React from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu style={{ marginTop: "10px", marginBottom: "40px" }}>
      <Link route="/">
        <a className="item">SupportCoin</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Campaigns</a>
        </Link>

        <Link route="/campaigns/new">
          <a>
            <Button
              content="Create Campaign"
              icon="add circle"
              primary
              style={{ marginTop: "5px", marginBottom: "5px" }}
            />
          </a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
