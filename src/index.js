let pong;
const ping = () => {
  console.log("Ping");
  setTimeout(pong, 1000);
};

pong = () => {
  console.log("Pong");
  setTimeout(ping, 1000);
};

ping();
