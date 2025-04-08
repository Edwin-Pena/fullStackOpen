const Notification = ({ notification }) => {
  if (notification === null) {
    return null;
  }

  return (
    <div className={`notification  ${notification.result}`}>
      {notification.message}
    </div>
  );
};

export default Notification;
