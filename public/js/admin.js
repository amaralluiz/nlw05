const socket = io();


socket.on("admin_list_all_users", (connections) => {
    console.log(connections);
})