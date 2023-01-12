import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Menu, Label } from "semantic-ui-react";
import _ from "lodash";
import { updateNotification } from "../../helpers/mongodb/NotificationCallCenter";
import { updateUnreadNotifications } from "../../store/actions";


const Notifications = () => {

  const dispatch = useDispatch();

  const [displayed, setDisplayed] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const mongoClient = useSelector((state) => state.manageData.mongoNotifications);

  const showTen = (startingNumber) => {
    setActivePage(startingNumber + 1);
    const start = startingNumber * 10;
    const end = start + 10;
    setDisplayed(mongoClient.notifications.slice(start, end));
    const allRead = mongoClient.notifications.slice(start, end).every((n) => _.isEqual(n.seen, true));
    if(!allRead) {
      mongoClient.notifications
        .slice(start, end)
        .forEach((n) => (n.seen = true));
      updateNotification(mongoClient._id, {
        notifications: mongoClient.notifications,
      });
      notificationsUnreadCount();
    }
  }

  const notificationsUnreadCount = () => {
    let count = 0;

    if (mongoClient) {
      const unreadFiltered = mongoClient.notifications.filter((n) =>
        _.isEqual(n.seen, false)
      );
      count = unreadFiltered.length;
    }

    dispatch(updateUnreadNotifications(count));
  };

  const displayPagination = () => {
    const pages = [];

    if(!_.isNull(mongoClient)) {
      const numberInRow = Math.ceil(mongoClient.notifications.length / 10);
      for(let i = 0; i < numberInRow; i++){
        pages.push(<Menu.Item key={i} active={activePage === i+1} onClick={() => showTen(i)} as="a">{i+1}</Menu.Item>);
      }
    }

    return pages;
  }

  useEffect(() => {
    if(!_.isNull(mongoClient)) {
      showTen(0);
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
          {displayed.map((notification, idx) => (
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
              <Menu floated="right" pagination>
                {/* <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item> */}
                { !_.isNull(mongoClient) && (mongoClient.notifications.length && displayPagination())}
                {/* <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item> */}
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}

export default Notifications;