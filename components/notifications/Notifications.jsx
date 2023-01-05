import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Table, Menu, Label, Icon } from "semantic-ui-react";
import _ from "lodash";


const Notifications = () => {

  const [notifications, setNotifications] = useState([]);

  const mongoClient = useSelector((state) => state.manageData.mongoNotifications);

  useEffect(() => {
    if(!_.isNull(mongoClient)) {
      setNotifications(mongoClient.notifications);
    }
  }, [mongoClient]);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {notifications.map((notification, idx) => (
            <Table.Row key={idx}>
              <Table.Cell>
                <Label ribbon>{notification.message}</Label>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              {/* <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu> */}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}

export default Notifications;